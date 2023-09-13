import { Dispatch } from "react";
import { ActionsT, IAction, IRemoveTodo } from "../../types"

export const addTodos = (dispatch: Dispatch<IAction>) => {
    return (title: string) => {
        dispatch({type: ActionsT.ADD_TODO, payload: {title, completed: false}})
    }
}

export const removeTodo = (dispatch: Dispatch<IRemoveTodo>) => {
    return (id: number | undefined) => {
        dispatch({type: ActionsT.REMOVE_TODO, payload: {id}})
    }
}

export const completedTodo = (dispatch: Dispatch<IRemoveTodo>) => {
    return (id: number | undefined) => {
        dispatch({type: ActionsT.TODO_COMPLETED, payload: {id}})
    }
}