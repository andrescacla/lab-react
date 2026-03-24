import type { TodoState } from './TodoContext';

export type TodoAction = 
    | { type: 'hidden', payload: boolean }
    | { type: 'show', payload: boolean};
export const todoReducer = ( state: TodoState, action: TodoAction ): TodoState => {

    switch ( action.type ) {
        case 'hidden':
            return {
                ...state,
                isVisible: action.payload
            }

        case 'show': 
            return {
                ...state,
                isVisible: action.payload
            }

            
        default:
            return state;
    }

}