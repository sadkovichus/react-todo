import { ITodos, ActionsT, IAction } from "../../types"

const initialState: ITodos[] = []

export const MainReducer = (state = initialState, action: IAction ) => {
    switch (action.type) {
        case ActionsT.ADD_TODO:
            return [
                ...state,
                {
                    id: Math.floor(1+Math.random()*100000),
                    title: action.payload.title,
                    completed: action.payload.completed
                }
            ]
        case ActionsT.REMOVE_TODO:
            return state.filter(item => item.id !== action.payload.id)
        case ActionsT.TODO_COMPLETED:
            state.filter(item => item.id === action.payload.id)[0].completed = true;
            return [...state]
        default:
            return state
    }
}