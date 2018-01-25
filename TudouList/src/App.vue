<template lang='html'>
  <div id='container'>
    <div class="left-panel">
      <div id="head"></div>

      <div id="menu-li">
        <ul>
          <li class="menu-item">
            <router-link to="/">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-quanbu"></use>
              </svg>
              <span class="menu-label">全部</span>
              <span class="task-count">1</span>
            </router-link>
          </li>
        </ul>

        <ul>
          <li class="menu-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-today"></use>
            </svg>
            <span class="menu-label">Today</span>
            <span class="task-count">7</span>
          </li>
          <li class="menu-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-queueplaynext"></use>
            </svg>
            <span class="menu-label">Tomorrow</span>
            <span class="task-count">6</span>
          </li>
          <li class="menu-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weeklyview"></use>
            </svg>
            <span class="menu-label">Recent 7 days</span>
            <span class="task-count">3</span>
          </li>
          <li class="menu-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-calendar"></use>
            </svg>
            <span class="menu-label">Calendar</span>
            <span class="task-count">3</span>
          </li>
          <li class="menu-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-box"></use>
            </svg>
            <span class="menu-label">Uncategory Task</span>
            <span class="task-count">3</span>
          </li>
        </ul>
      </div>
    </div>

    
    <router-view></router-view>

  </div>
</template>


<script>



export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  components: {
    
  },
  methods: {
    

  }
}
</script>

<style lang='stylus'>
  h2 {
    color: #f00;
    font-weight: normal;
  }

  #container {
    margin: 0;
    padding: 0;
  }

  .icon {
    width: 24px; height: 24px;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }

  .left-panel {
    //display: none;
    position:absolute;
    top: 0;
    width: 300px;
    height: 100%;
    background-color: #5069c4;
  }

  .menu-item {
    height: 36px;
    line-height: 36px;
    color: white;
    padding: 0 16px 0 12px;
    opacity: .7;
    cursor: pointer;
  }

  .menu-label {
    display: inline-block;
    font-size: 14px;
  }

  .task-count {
    position: absolute;
    right: 16px;
    font-size: 12px;
  }

  .task-list {
    position: absolute;
    top: 0;
    left: 300px;
    right: 36%;
    height: 100%;
    background-color: white;
  }

  .task-detail {
    position: absolute;
    width: 36%;
    top: 0;
    right: 0;
    height: 100%;
    background-color: #fafafa;
  }

  li, ol, ul {
    list-style: none;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    -webkit-padding-start: 0;
  }

  a {
    color: white;
    text-decoration: none;
  }

</style>