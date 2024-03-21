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
        <TitleProyect title={"TODO List"} />
            <ToDo dataLoad={afterLoadList}/>
        </div>
    )
}