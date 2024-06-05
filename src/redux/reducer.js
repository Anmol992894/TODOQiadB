// Initial state for the task reducer
const initialState = {
    tasks: [], // Array to hold the tasks
};

// Reducer function for managing tasks
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            // Adding a new task
            return {
                ...state,
                tasks: [...state.tasks, action.payload], // Adding the new task to the tasks array
            };
        case 'DELETE_TASK':
            // Deleting a task
            return {
                ...state,
                tasks: state.tasks.filter((_, index) => index !== action.payload), // Removing the task with the specified index
            };
        case 'EDIT_TASK':
            // Editing a task
            const updatedTasks = state.tasks.map((task, index) =>
                index === action.payload.index ? action.payload.newTask : task // Updating the task if its index matches the edited task index
            );
            return {
                ...state,
                tasks: updatedTasks, // Updating the tasks array with the edited task
            };
        case 'CLEAR_LIST':
            // Clearing the task list
            return {
                ...state,
                tasks: [], // Resetting the tasks array to an empty array
            };
        default:
            return state;
    }
};

export default taskReducer; // Exporting the taskReducer function as default
