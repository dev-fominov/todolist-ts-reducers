import React, { useReducer } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import {v1} from 'uuid';
import { addTaskAC, removeTaskAC, todolistReducer } from './reducers/todolistRedusers';
import { changeFilterAC, filterReducer } from './reducers/filterReducer';


export type FilterValuesType = "all" | "active" | "completed";

function App() {

    // let [tasks, setTasks] = useState([
    //     { id: v1(), title: "HTML&CSS", isDone: true },
    //     { id: v1(), title: "JS", isDone: true },
    //     { id: v1(), title: "ReactJS", isDone: false },
    //     { id: v1(), title: "Rest API", isDone: false },
    //     { id: v1(), title: "GraphQL", isDone: false },
    // ]);

    let [tasks, tasksDispatch] = useReducer(todolistReducer, [
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Rest API", isDone: false },
        { id: v1(), title: "GraphQL", isDone: false },
    ]);

    function removeTask(id: string) {
        tasksDispatch(removeTaskAC(id))
    }

    function addTask(title: string) {
        tasksDispatch(addTaskAC(title))
    }

    let [filter, filterDispatch] = useReducer(filterReducer, "all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        filterDispatch(changeFilterAC(value))
    }



    return (
        <div className="App">
            <Todolist title="What to learn"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask} />
        </div>
    );
}

export default App;
