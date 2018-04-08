const state = {
    data: [
        {
            name: "All",
            icon: "#icon-quanbu",
            taskCount: 3,
            path: "all"
        },
        {
            name: "Today",
            icon: "#icon-today",
            taskCount: "",
            path: "today"
        },
        {
            name: "Tomorrow",
            icon: "#icon-icon_day",
            taskCount: 3,
            path: "tomorrow"
        },
        {
            name: "Recent 7 days",
            icon: "#icon-weeklyview",
            taskCount: 5,
            path: "recent"
        },
        {
            name: "Calendar",
            icon: "#icon-calendar",
            taskCount: 7,
            path: "calendar"
        },
        {
            name: "Uncategory Task",
            icon: "#icon-box",
            taskCount: 3,
            path: "box"
        }
    ]
};

const getters = {
    getViewTitle: (state) => (path) => {
        for(let view of state.data)
        {
            if(view.path === path)
            {
                return view.name;
            }
        }
    }
}

export default {
    state,
    getters
}