
const state = {
    todoListData: [
        {
          id: 1000,
          name: "Inbox",
          isShow: true,
          iconTriangle: "#icon-msnui-triangle-down",
          tasks: [
            {
              id: 2000,
              name: "新Counter集成",
              detail: "Counter的详细",
              isCompleted: false
            },
            {
              id: 2001,
              name: "SplitBill MDM",
              detail: "MDM的详细",
              isCompleted: false
            }
          ]
        },
        {
          id: 1001,
          name: "HKT",
          isShow: true,
          iconTriangle: "#icon-msnui-triangle-down",
          tasks: [
            {
              id: 3000,
              name: "月底买飞机票",
              detail: "asdfbbasdf",
              isCompleted: false
            },
            {
              id: 3001,
              name: "HTML5语义化",
              detail: "zxcvzxcvzxcv",
              isCompleted: false
            }
          ]
        },
        {
          id: 1003,
          name: "Completed",
          isShow: true,
          iconTriangle: "#icon-msnui-triangle-down",
          tasks: [
            {
              id: 5000,
              name: "已完成的任务测试",
              detail: "阿斯顿；福利卡上的纠纷；lkasjdf",
              isCompleted: true
            },
            {
              id: 5001,
              name: "HTML5语义化",
              detail: "zxcvzxcvzxcv",
              isCompleted: true
            }
          ]
        }
      ],
      name: ""
};

const mutations = {

    addTask (state, task) {
        state.todoListData[1].tasks.push(task);
    },

    deleteTask (state, task) {

    },

    closeTask (state, taskId) {
      for(let list of state.todoListData)
        {
          for(let i=0; i<list.tasks.length; i++)
          {
            let task = list.tasks[i];
            if(task.id === taskId)
            {
              task.isCompleted = true;
              list.tasks.splice(i, 1);
              state.todoListData[2].tasks.unshift(task);
            }
          }
        }
    }

    
};

const actions = {
    
    //context
    addTask ({commit}, task) {
        commit('addTask', task);
    },
    
    deleteTask ({commit}, task) {
        commit('deleteTask', task);
    },

    closeTask ({commit}, taskId) {
      commit('closeTask', taskId);
    }

};

const getters = {
    getTaskDetail: (state) => (taskId) => {
        for(let list of state.todoListData)
        {
          for(let task of list.tasks)
          {
            if(task.id === taskId)
            {
              return task;
            }
          }
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}