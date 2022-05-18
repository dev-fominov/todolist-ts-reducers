import { TaskType } from "../Todolist"
import {v1} from 'uuid';

export const todolistReducer = (state: TaskType[], action: todolistReduserType) => {
	switch(action.type) {
		case 'REMOVE_TASK': {
			// let filteredTasks = tasks.filter(t => t.id != id);
			return state.filter(t => t.id !== action.payload.id)
		}
		case 'ADD_TASK': {
			let task = { id: v1(), title: action.payload.title, isDone: false };
      let newState = [task, ...state];
			// return state.filter(t => t.id !== action.payload.id)
			return newState
		}
		default: return state
		
	}
}

type todolistReduserType = removeTaskACType | addTaskACType

type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id: string) => {
	return {
		type: "REMOVE_TASK",
		payload: {id}
	} as const
}

type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string) => {
	return {
		type: "ADD_TASK",
		payload: {title}
	} as const
}