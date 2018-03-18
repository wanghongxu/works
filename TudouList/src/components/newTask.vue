<template lang='html'>
<div class="task-input-panel">
    <input type="text" class="input-task"
        ref="taskInput"
        placeholder="Write task to inbox by Enter"
        v-model="newTaskText"
        v-on:keyup.enter="newTask" />
        
    <span class="icon-button">

        <el-date-picker
            v-model="targetDate"
            type="date"
            size="mini"
            placeholder="选择日期"
            style="width:133px"
            @change="focusInput"
            >
        </el-date-picker>

        <el-dropdown @command="handlePriority" trigger="click">
            <svg class="icon-listpage" aria-hidden="true">
                <use xlink:href="#icon-priority"></use>
            </svg>
            <el-dropdown-menu slot="dropdown" trigger="click">
                <el-dropdown-item command="H" style="color:#ff3180" v-bind:class="{selected: this.priority == 'H'}">高</el-dropdown-item>
                <el-dropdown-item command="M" style="color:#ffc817" v-bind:class="{selected: this.priority == 'M'}">中</el-dropdown-item>
                <el-dropdown-item command="L" style="color:#617fde" v-bind:class="{selected: this.priority == 'L'}">低</el-dropdown-item>
                <el-dropdown-item command="N" style="color:#c4c4c4" v-bind:class="{selected: this.priority == 'N'}">无优先级</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown >
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
</template>

<script>

  export default {
    name: 'NewTaskPanel',
    data() {
      return {
          
            newTaskText: '',
            targetDate: '',
            priority: 'N'
      }
    },
    methods: {
      newTask: function(){

          this.$emit('newtask', {
              id: Date.now(),
              name: this.newTaskText,
              targetDate: this.targetDate,
              priority: this.priority
              }
          );
          this.newTaskText = '';
          this.targetDate = '';
          this.priority = 'N';
      },
      handlePriority: function(val) {
          this.priority = val;
          this.$refs.taskInput.focus();
      },
      focusInput: function(){
          this.$refs.taskInput.focus();
      }
    }
  }
</script>

<style lang='stylus'>
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

.icon-listpage {
    width: 20px; 
    height: 20px;
    vertical-align: middle;
    fill: grey;
    overflow: hidden;
  }

  .selected {
      background-color: #ecf5ff;
  }
</style>