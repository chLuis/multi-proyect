import { useEffect, useState } from "react";
import ToDoList from "./ToDoList";

export default function ToDo({dataLoad}) {
    const [newTask, setNewTask] = useState('')
    const [allTask, setAllTask] = useState(dataLoad)
    
    function handleToDo(e) {
        setNewTask(e.target.value)
    }
    useEffect(() => {
        setAllTask(dataLoad)
    }, [dataLoad])
    
    function addNewTask(){
        if(newTask === '') return alert("Ingresar text");
        const todoStorage = JSON.parse(localStorage.getItem('todoList'))
        console.log(todoStorage)
        const newTodo = {
            id: new Date().getTime(),
            text: newTask,
            completed: false
        }
        todoStorage.push(newTodo)
        setAllTask(todoStorage)
        localStorage.setItem('todoList', JSON.stringify(todoStorage))
    }

    return (
        <div className="min-w-0 w-full max-w-[900px] px-4">
            <label className="relative">
                <span className="absolute -inset-y-1 border-b border-orange-400 h-6 left-2 w-11 text-neutral-500 text-nowrap">
                    to do:
                </span>
                <input type="text" onChange={(e) => handleToDo(e)} className="min-w-0 w-full py-2 ps-16 pe-12" />
                <button type="button" onClick={addNewTask} className="absolute inset-y-0 right-2 px-2 flex items-center text-sm font-medium text-white bg-orange-400 border border-transparent rounded-r-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                    +
                </button>
            </label>
            <ToDoList data={allTask} />
        </div>
    );
}
