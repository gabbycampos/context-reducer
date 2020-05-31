import { v1 as uuidv1 } from 'uuid';

export const memberReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MEMBER':
            return [...state, {
                name: action.member.name,
                id: uuidv1()
            }]
        case 'REMOVE_MEMBER':
            return state.filter(member => member.id !== action.id);
        default:
            return state
    }
}