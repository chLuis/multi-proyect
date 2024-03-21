import { useEffect, useState } from "react";
import ToDoList from "./ToDoList";

export default function ToDo({dataLoad}) {
    const [newTask, setNewTask] = useState('')
    const [allTask, setAllTask] = useState(dataLoad)
    const [taskCreated, setTaskCreated] = useState(false)
    const [insertText, setInsertText] = useState("bg-orange-400")
    
    function handleToDo(e) {
        setNewTask(e.target.value)
    }
    useEffect(() => {
        setAllTask(dataLoad)
    }, [dataLoad])
    
    function addNewTask(){
        if(newTask === '') {
            setInsertText("animate-bounce bg-red-500")
            setTimeout(() => {
                setInsertText("bg-orange-400")
            }, 1500)
            return
        } 
        const todoStorage = JSON.parse(localStorage.getItem('todoList'))
        const newTodo = {
            id: new Date().getTime(),
            text: newTask,
            completed: false
        }
        todoStorage.push(newTodo)
        setAllTask(todoStorage)
        localStorage.setItem('todoList', JSON.stringify(todoStorage))
        setTaskCreated(true)
        setNewTask('')
        setTimeout(() => {
            setTaskCreated(false)
        }, 850)
    }
    function handleKeyDown(event){
        if(event.key === 'Enter'){
            addNewTask()
        }
    }

    return (
        <div className="min-w-0 w-full max-w-[900px] px-4">
            <label className="relative">
                <span className="absolute -inset-y-1 border-b border-orange-400 h-6 left-2 w-11 text-neutral-500 text-nowrap">
                    to do:
                </span>
                <input type="text" value={newTask} onChange={(e) => handleToDo(e)} onKeyDown={(e) => handleKeyDown(e)} className="min-w-0 w-full rounded py-2 ps-16 pe-12 bg-black bg-opacity-65 focus:bg-opacity-75" />
                <button type="button" onClick={addNewTask}  className={`${insertText} duration-200 absolute font-extrabold inset-y-0 right-2 px-2 flex items-center justify-center text-xl text-white border border-transparent rounded-r-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 pb-1`}>
                    +
                </button>
            </label>
            <ToDoList data={allTask} />
            {taskCreated && <span className="fixed top-3 left-3 z-50 border rounded px-2 py-1 bg-emerald-500 animate-pulse-shortout shadow shadow-white">Task created !</span>}
        </div>
    );
}
