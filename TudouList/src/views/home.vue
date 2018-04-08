<template lang='html'>
  <div>

    <div class="task-list">
      <div class="top-title">
        <h1 style="font-weight:400;font-size:22px;" v-text="title"></h1>
      </div>
      

      <new-task-panel v-on:newtask="addNewTask"></new-task-panel>

      <div class="list-panel">
        <section v-for="list in lists">
          <div class="list-header" v-on:click="toggleDisplayList(list)">
            <svg class="icon icon-small" aria-hidden="true">
              <use v-bind:xlink:href="list.iconTriangle"></use>
            </svg>
            <span class="list-title" v-text="list.name"></span>
          </div>
          <ul v-show="list.isShow">
            <li v-for="task in list.tasks" class="task-line">
              <div class="list-item" 
                  v-bind:class="{selected: task.id == selectedTaskId, hovered: task.id == hoveredTaskId}" 
                  v-on:click="getTaskDetails(task)"
                  v-on:mouseenter="setHoveredTask(task)" >
                  
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

                    <span class="task-name" contenteditable="true">{{task.name}}</span>
                    <div style="float:right; position: relative; max-height: 36px;">
                      <span class="target-date">{{task.targetDate}}</span>

                      
                    </div>

                  </span>
                  <div style="position:absolute; top: 0px; right: 9px">
                    <el-dropdown trigger="click" style="height:26px">
                        <span v-show="task.id == hoveredTaskId">
                            <svg class="icon-listpage" aria-hidden="true">
                                <use xlink:href="#icon-more"></use>
                            </svg>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="handleMenuCommand('DELETE',task.id)">Delete</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                    <!-- <span v-show="task.id == hoveredTaskId">
                      <svg class="icon-listpage" aria-hidden="true" @click="deleteTask(task)">
                        <use xlink:href="#icon-delete"></use>
                      </svg>
                      <svg class="icon-listpage" aria-hidden="true">
                        <use xlink:href="#icon-more"></use>
                      </svg>
                    </span> -->
                  </div>
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
  import newTaskPanel from '../components/newTask.vue';

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
      'detail-panel': DetailPanel,
      'new-task-panel': newTaskPanel
    },
    methods: {
      addNewTask: function(task) {
        //console.log(this.newTaskText);

        this.$store.dispatch('addTask',task);

        //this.newTaskText = "";
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

      handleMenuCommand: function(command, taskId) {
        this.$message('click on item ' + taskId + ' ' + command);
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

  .top-title {
    padding: 12px 20px
  }

  .icon-small {
    width: 13px; 
    height: 13px;
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


  .task-line {
    height: 36px;
    cursor: pointer;
    line-height: 36px;
  }

  .list-item {
    padding-left: 17px;
    padding-right: 37px;
    position: relative;
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

  .tip {
    position: relative;
    float: right;
  }

  .target-date {
    font-size: 13px;
  }

  .complete {
    color: #c5c5c5;
  }

</style>