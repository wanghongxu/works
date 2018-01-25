
const state = {
    todoListData: [
        {
          id: 1000,
          name: "Inbox",
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
          tasks: [
            {
              id: 3000,
              name: "已完成的任务测试",
              detail: "阿斯顿；福利卡上的纠纷；lkasjdf",
              isCompleted: true
            },
            {
              id: 3001,
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
        state.todoListData[0].tasks.push(task);
    },

    deleteTask (state, task) {

    }

    
};

const actions = {
    
    //context
    addTask ({commit}, task) {
        commit('addTask', task);
    },
    
    deleteTask ({commit}, task) {
        commit('deleteTask', task);
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