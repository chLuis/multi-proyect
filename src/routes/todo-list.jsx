import { useEffect, useState } from "react";
import TitleProyect from "../components/TitleProyect";
//import ListToDo from "../components/ListToDo";

import ToDo from "../components/ToDo";

export default function TodoPage() {

    const [preloadTodoList, setPreloadTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || [])
    const [afterLoadList, setAfterLoadList] = useState(preloadTodoList)

    const INITIAL_TODO = [
        {
            id: 1710901108180,
            text: "Make an item",
            completed: true,
        },
        {
            id: 1710901120065,
            text: "Delete an item",
            completed: true,
        },
        {
            id: 1710901131119,
            text: "Explore more projects ideas",
            completed: false,
        }
    ]

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("todoList")) || []
        //console.log(data)
        if(data && data.length > 0) {
            setPreloadTodoList(data)
            setAfterLoadList(data)
        } else {
            //console.log("else")
            localStorage.setItem("todoList", JSON.stringify(INITIAL_TODO))
            setAfterLoadList(INITIAL_TODO)
        }
    } , [])
    
    //console.log(JSON.parse(localStorage.getItem("todoList")))
    return (
        <div className="flex flex-col justify-center items-center">
        <span className="fixed top-4 right-5 w-52 h-52 rounded-full border border-white -z-20 bg-gradient-to-bl animate-spin-long from-white to-blue-950 blur bg-opacity-10"></span>
      <span className="fixed -z-10 animate-pulse-short bottom-0 left-0 w-[200%] h-60 bg-gradient-to-t from-stone-900 to-stone-700 blur"></span>
      <span className="fixed -z-10 animate-pulse-short bottom-60 left-0 w-[200%] h-60 bg-gradient-to-t from-white via-10% via-blue-800 to-blue-950 blur"></span>
        <TitleProyect title={"TODO List"} />
            <ToDo dataLoad={afterLoadList}/>
        </div>
    )
}