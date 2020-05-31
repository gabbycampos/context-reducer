import { v1 as uuidv1 } from 'uuid';

export const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, {
                title: action.task.title,
                creator: action.task.creator,
                id: uuidv1()
            }]
        case 'REMOVE_TASK':
            return state.filter(task => task.id !== action.id);
        default:
            return state
    }
}

// reducers - method of changing state in a single function(reducer)
// 2 functions here - addTask and removeTask

// Reducer Function - iteracts with state/data
// Action - describes type of change in reducer function
// Dispatch - sends action to reducer