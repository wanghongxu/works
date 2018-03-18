<template lang='html'>
  <div id='container'>
    <div class="left-panel">
      <div id="head"></div>

      <div id="menu-li">
        <ul>
          <li class="menu-item" v-for="view in views">
            <router-link :to="{path: `/view/${view.path}`}"> 
              <svg class="icon" aria-hidden="true">
                  <use v-bind:xlink:href="view.icon"></use>
              </svg>
              <span class="menu-label" v-text="view.name"></span>
              <span class="task-count" v-text="view.taskCount"></span>
            </router-link>
          </li>
        </ul>

        <ul>
          <li class="menu-item" v-for="list in customizedList">
            <router-link :to="{path: `/customized-list/${list.path}`}"> 
              <svg class="icon" aria-hidden="true">
                  <use v-bind:xlink:href="list.icon"></use>
              </svg>
              <span class="menu-label" v-text="list.name"></span>
              <span class="task-count" v-text="list.taskCount"></span>
            </router-link>
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
      views: this.$store.state.viewList.data,
      customizedList: this.$store.state.customizedList.data
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
    position:absolute;
    top: 0;
    left: 0;
    width: 260px;
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
    left: 260px;
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

  a, abbr, acronym, address, article, aside, audio, big, blockquote, body, canvas, caption, cite, code, dd, del, details, dfn, div, dl, dt, em, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, p, pre, q, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, ul, var, video, input {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font: inherit;
    vertical-align: middle;
}

</style>