<template lang='html'>
  <div>

    <div class="task-list">
      <h1 style="padding-left:20px;margin-top:10px;font-weight:400;font-size:22px;">所有All</h1>

      <div class="task-input-panel">
        <input type="text" class="input-task"
        placeholder="Write task to inbox by Enter"
        v-model="newTaskText"
        v-on:keyup.enter="addNewTask" />
        <span class="icon-button">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-calendar"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-priority"></use>
          </svg>
        </span>
      </div>

      <div class="list-panel">
        <section v-for="list in lists">
          <div class="list-header">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-msnui-triangle-down"></use>
            </svg>
            <span class="list-title" v-text="list.name"></span>
          </div>
          <ul>
            <li v-for="task in list.tasks" class="task-panel selected">
                <span v-bind:class="{complete: task.isCompleted}">
                  <span v-if="task.isCompleted">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-checkboxmarkedcircleoutline"></use>
                    </svg>
                  </span>
                  <span v-else >
                    <svg class="icon" aria-hidden="true" v-on:click="closeTask(task.id)">
                      <use xlink:href="#icon-checkboxblankcircleoutline"></use>
                    </svg>
                  </span>

                  <span class="task-name" v-text="task.name" v-on:click="getTaskDetails(task.id)"></span>
                  <span class="task-context-menu">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-delete"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-more"></use>
                    </svg>
                  </span>
              </span>
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
        newTaskText: "",
        lists: this.$store.state.todoList.todoListData
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

      getTaskDetails: function(taskId) {

        let selectedTask = this.$store.getters.getTaskDetail(taskId);

        this.$refs.detailPanel.task = selectedTask;

        console.log(taskId);
      },

      closeTask: function(taskId) {
        this.$store.dispatch('closeTask',taskId);
      }
      
    }
  }
</script>

<style lang="stylus">

  .icon {
    width: 24px; height: 24px;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
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
    margin: 5px 0 10px 0;
    cursor: pointer;
  }

  .list-title {
    font-size: 12px;
  }

  .task-name {
    font-size: 14px;
  }


  .task-panel {
    padding-left: 30px;
    height: 35px;
    cursor: pointer;
  }

  .task-panel .selected {
    background-color: #53beb8

  }

  .task-context-menu {
    position: relative;
    float: right;
    padding-right: 25px;
  }

  .complete {
    color: #c5c5c5;
  }


</style>