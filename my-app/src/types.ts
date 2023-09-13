export enum ActionsT {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    TODO_COMPLETED = 'TODO_COMPLETED'
}

type ActionType = ActionsT.ADD_TODO | ActionsT.REMOVE_TODO | ActionsT.TODO_COMPLETED;

export interface ITodos {
    id?: number;
    title: string;
    completed: boolean;
}

export interface IAction {
    type: ActionType;
    payload: ITodos;
}

export interface IRemoveTodo {
    type: ActionType;
    payload: Omit<ITodos, 'completed' | 'title'>
}