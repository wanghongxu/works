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
            value-format="yyyy年MM月dd日"
            @change="focusInput"
            >
        </el-date-picker>

        <el-dropdown @command="handlePriority" trigger="click">
            <span>
                <svg class="icon-listpage" aria-hidden="true">
                    <use xlink:href="#icon-priority"></use>
                </svg>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="H" style="color:#ff3180" v-bind:class="{selected: this.priority == 'H'}">高</el-dropdown-item>
                <el-dropdown-item command="M" style="color:#ffc817" v-bind:class="{selected: this.priority == 'M'}">中</el-dropdown-item>
                <el-dropdown-item command="L" style="color:#617fde" v-bind:class="{selected: this.priority == 'L'}">低</el-dropdown-item>
                <el-dropdown-item command="N" style="color:#c4c4c4" v-bind:class="{selected: this.priority == 'N'}">无优先级</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown @command="handleCategory" trigger="click">
            <span>
                <svg class="icon-listpage" aria-hidden="true">
                    <use xlink:href="#icon-box"></use>
                </svg>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="Uncategory" v-bind:class="{selected: this.category == 'Uncategory'}" >Uncategory Task</el-dropdown-item>
                <el-dropdown-item command="HKT" v-bind:class="{selected: this.category == 'HKT'}" divided>HKT</el-dropdown-item>
                <el-dropdown-item command="FRONT" v-bind:class="{selected: this.category == 'FRONT'}" >前端学习</el-dropdown-item>
                <el-dropdown-item command="MAC" v-bind:class="{selected: this.category == 'MAC'}" >Mac</el-dropdown-item>
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
            priority: 'N',
            category: 'Uncategory'
      }
    },
    methods: {
      newTask: function(){

          this.$emit('newtask', {
                id: Date.now(),
                name: this.newTaskText,
                targetDate: this.targetDate,
                priority: this.priority,
                category: this.category
              }
          );
          this.newTaskText = '';
          this.targetDate = '';
          this.priority = 'N';
      },
      handlePriority: function(val) {
          this.priority = val;
          this.focusInput();
      },
      handleCategory: function(val) {
          this.category = val;
          this.focusInput();
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
    width: 370px;
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