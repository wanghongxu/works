<template lang='html'>
  <div class='aboutPage'>
    
    <div class="detail-menu-bar">
      <span>
        <el-date-picker
          v-model="value1"
          type="date"
          size="mini"
          placeholder="选择日期">
        </el-date-picker>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-priority"></use>
        </svg>
      </span>
    </div>
    <div>
      <div class="detail-header" v-text='task.name'></div>
      <div class="detail-container">
        <el-input
          type="textarea"
          :autosize="{ minRows: 10, maxRows: 20}"
          placeholder="请输入任务详细信息"
          v-model="task.detail">
        </el-input>
      </div>

    </div>
  </div>

</template>
<script>

  export default {
    name: 'detailPage',
    data() {
      return {
        task: {},
        value1: ''
      }
    },
    components: {
      
    }
  }
</script>
<style lang='stylus'>

  .detail-menu-bar {
    padding: 12px 14px 12px 20px;
    border-bottom: 1px solid;
    border-color: #dedede;
  }

  .detail-header {
    padding: 16px 14px 12px 20px;
    font-size: 16px;
    font-weight: 700;
  }

  .detail-container {
    padding: 0 20px 10px 20px;
    font-size: 14px;
  }

</style>   