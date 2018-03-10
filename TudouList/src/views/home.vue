<template lang='html'>
  <div>

    <div class="task-list">
      <h1 style="padding-left:20px;margin-top:10px;font-weight:400;font-size:22px;" v-text="title"></h1>

      <div class="task-input-panel">
        <input type="text" class="input-task"
        placeholder="Write task to inbox by Enter"
        v-model="newTaskText"
        v-on:keyup.enter="addNewTask" />
        <span class="icon-button">

          <el-date-picker
            ref="newTaskDate"
            v-model="value1"
            type="date"
            size="mini"
            clearable="true"
            placeholder="选择日期"
            style="width:133px"
            >
          </el-date-picker>

          <el-dropdown @command="handleCommand">
            <svg class="icon-listpage" aria-hidden="true">
              <use xlink:href="#icon-priority"></use>
            </svg>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a" style="color:#ff3180">高</el-dropdown-item>
              <el-dropdown-item command="b" style="color:#ffc817">中</el-dropdown-item>
              <el-dropdown-item command="c" style="color:#617fde">低</el-dropdown-item>
              <el-dropdown-item command="e" style="color:#c4c4c4">无优先级</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown @command="handleCommand">
            <svg class="icon-listpage" aria-hidden="true">
              <use xlink:href="#icon-box"></use>
            </svg>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">Uncategory Task</el-dropdown-item>
              <el-dropdown-item command="b" divided>HKT</el-dropdown-item>
              <el-dropdown-item command="c">前端学习</el-dropdown-item>
              <el-dropdown-item command="e">Mac</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </span>
      </div>

      <div class="list-panel">
        <section v-for="list in lists">
          <div class="list-header" v-on:click="toggleDisplayList(list)">
            <svg class="icon icon-small" aria-hidden="true">
              <use v-bind:xlink:href="list.iconTriangle"></use>
            </svg>
            <span class="list-title" v-text="list.name"></span>
          </div>
          <ul v-show="list.isShow">
            <li v-for="task in list.tasks" class="task-panel">
              <div class="list-item" 
                  v-bind:class="{selected: task.id == selectedTaskId, hovered: task.id == hoveredTaskId}" 
                  v-on:click="getTaskDetails(task)"
                  v-on:mouseenter="setHoveredTask(task)"
                  >
                  <span v-bind:class="{complete: task.isCompleted}" >
                    <span v-if="task.isCompleted">
                      <svg class="icon-listpage" aria-hidden="true">
                        <use xlink:href="#icon-checkboxmarkedcircleoutline"></use>
                      </svg>
                    </span>
                    <span v-else >
                      <svg class="icon-listpage" aria-hidden="true" v-on:click="closeTask(task)">
                        <use xlink:href="#icon-checkboxblankcircleoutline"></use>
                      </svg>
                    </span>

                    <span class="task-name" v-text="task.name" ></span>
                    <span class="task-context-menu">
                      <svg class="icon-listpage" aria-hidden="true" @click="deleteTask(task)">
                        <use xlink:href="#icon-delete"></use>
                      </svg>
                      <svg class="icon-listpage" aria-hidden="true">
                        <use xlink:href="#icon-more"></use>
                      </svg>
                    </span>
                </span>
                <div class="task-spliter" />
              </div>
              
            </li>
          </ul>
        </section>
      </div>
    
    </div>

    <div class="task-detail">
      <detail-panel ref="detailPanel"></detail-panel>
    </div>

  </div>
</template>

<script>
 
  import DetailPanel from './detail.vue';

  export default {
    name: 'homeP',
    data() {
      return {
        title: this.$store.getters.getViewTitle(this.$route.params.id),
        newTaskText: "",
        lists: this.$store.state.todoList.todoListData,
        selectedTaskId: -1,
        hoveredTaskId: -1,
        value1: ""
      }
    },
    watch: {
    '$route' (to, from) {
      this.title = this.$store.getters.getViewTitle(to.params.id);

    }
  },
    components: {
      'detail-panel': DetailPanel
    },
    methods: {
      addNewTask: function() {
        console.log(this.newTaskText);

        this.$store.dispatch('addTask',{
            id: 123,
            name: this.newTaskText
          });

        this.newTaskText = "";
      },

      deleteTask: function(task) {
        this.$message({
          message: '任务【' + task.name + '】已删除',
          type: 'success'
        });
      },

      toggleDisplayList: function(list) {
        list.isShow = !list.isShow;
        list.iconTriangle = list.isShow?"#icon-msnui-triangle-down":'#icon-msnui-triangle-right';
      },

      getTaskDetails: function(task) {

        this.selectedTaskId = task.id;

        let selectedTask = this.$store.getters.getTaskDetail(task.id);

        this.$refs.detailPanel.task = selectedTask;

        console.log(task.id);
      },

      closeTask: function(task) {
        this.$store.dispatch('closeTask',task.id);
        this.$message({
          message: '任务【' + task.name + '】已完成',
          type: 'success'
        });
      },

      setHoveredTask: function(task) {
        this.hoveredTaskId = task.id;
      },

      handleCommand: function(command) {
        this.$message('click on item ' + command);
      },
      pickDate: function() {
        console.log(this.$refs.newTaskDate)
        this.$refs.newTaskDate.focus();
      }
    }
  }
</script>

<style lang="stylus">

  .icon-listpage {
    width: 20px; 
    height: 20px;
    vertical-align: middle;
    fill: grey;
    overflow: hidden;
  }

  .icon-small {
    width: 13px; 
    height: 13px;
  }

  .task-input-panel {
    padding: 5px 10px;
    border: 1px solid #617fde;
    margin: 0 15px;
  }

  .input-task {
    width: 270px;
    height: 25px;
    border-style: none;
  }

  .icon-button {
    position: relative;
    float: right;
  }

  .list-header {
    margin: 5px 0 10px 5px;
    cursor: pointer;
  }

  .task-spliter {
    background-color: rgba(0,0,0,.08);
    height: 1px;
    margin-left: 24px;
  }

  .list-title {
    font-size: 12px;
  }

  .task-name {
    font-size: 14px;
    color: rgba(0,0,0,.85);
  }


  .task-panel {
    height: 36px;
    cursor: pointer;
    line-height: 36px;
  }

  .list-item {
    padding-left: 17px;
    padding-right: 15px;
  }

  .hovered {
    background-color: #f9f9f9
  }

  .selected {
    background-color: #f3f3f3
  }


  .task-context-menu {
    position: relative;
    float: right;
  }

  .complete {
    color: #c5c5c5;
  }

</style>