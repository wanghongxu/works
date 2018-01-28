const state = {
    data: [
        {
            name: "HKT",
            icon: "#icon-list",
            taskCount: 3,
            path: "hkt"
        },
        {
            name: "Mac",
            icon: "#icon-list",
            taskCount: "",
            path: "mac"
        }
    ]
};

const getters = {
    getTitle: (state) => (path) => {
        for(let list of state.data)
        {
            if(list.path === path)
            {
                return list.name;
            }
        }
    }
}

export default {
    state,
    getters
}