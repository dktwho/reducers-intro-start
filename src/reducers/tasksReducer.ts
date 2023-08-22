import {TaskType} from "../Todolist";

export const TasksReducer = (state: TaskType[], action: ActionType): TaskType[] => {
    switch (action.type) {
        case "REMOVE-TASK": {
            return  state.filter(el => el.id !== action.payload.id)
        }
        default: {
            return  state
        }
    }
}


type ActionType = RemoveTaskACType


type RemoveTaskACType = ReturnType<typeof removeTaskAC >
export const removeTaskAC = (id: string) => {
    return {
        type: "REMOVE-TASK",
        payload: {id}
    } as const
}