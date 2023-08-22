import {TaskType} from "../Todolist";

export const TasksReducer = (state: TaskType[], action: ActionType): TaskType[] => {
    switch (action.type) {
        case "REMOVE-TASK": {
            return  state
        }
        default: {
            return  state
        }
    }
}


type ActionType = RemoveTaskACType


type RemoveTaskACType = ReturnType<typeof removeTaskAC >
export const removeTaskAC = () => {
    return {
        type: "REMOVE-TASK"
    } as const
}