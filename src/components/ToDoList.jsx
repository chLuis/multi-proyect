import { useEffect, useState } from "react";

export default function ToDoList({data}) {
    //console.log(data)
    const [list, setList] = useState(data)
    const [taskCompleted, setTaskCompleted] = useState(false)
    const [completedRemoved, setCompletedRemoved] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    const [taskDeleteID, setTaskDeleteID] = useState(null)
    const [taskRemoved, setTaskRemoved] = useState(false)


    useEffect(() => {
        const dataSorted = data
        setList(dataSorted)
    }, [data])


    const MONTHS = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ]

    function getDateString(date){
        let fechaTransform = new Date(date);
        let dia = fechaTransform.getDate();
        let mes = fechaTransform.getMonth(); // Los meses en JavaScript comienzan desde 0
        //let año = fechaTransform.getFullYear().toString().slice(-2); // Obtiene los últimos dos dígitos del año
        let hora = fechaTransform.getHours();
        let minuto = fechaTransform.getMinutes();
        //console.log(dia)
    // Asegura que todos los valores de fecha y hora tengan dos dígitos
        dia = (dia < 10 ? '0' + dia : dia);
        mes = (mes < 10 ? '0' + mes : mes);
        hora = (hora < 10 ? '0' + hora : hora);
        minuto = (minuto < 10 ? '0' + minuto : minuto);
    
        //let fechaFormateada = año + '/' + mes + '/' + dia + ' ' + hora + ':' + minuto;
        return (
                <>
                    <div className="relative text-[8px] flex shadow-md shadow-neutral-500 flex-col border pt-[10px] w-14 min-w-14 max-w-14 h-fit pb-1 text-center bg-red-100 text-neutral-900">
                        <span className="absolute top-[2px] left-1 w-1 h-1 bg-neutral-700 border border-black rounded-full"></span>
                        <span className="absolute top-[2px] right-1 w-1 h-1 bg-neutral-700 border border-black rounded-full"></span>
                        <h2 className="uppercase bg-red-700 text-neutral-100 font-semibold text-ellipsis">{MONTHS[Number(mes)]}</h2>
                        <h2 className="text-sm font-extrabold border-b border-r border-l border-red-500">{dia}</h2>
                        <p className="border-b border-r border-l border-red-500 bg-neutral-300">{hora}:{minuto}</p>
                    </div>
                </>
        )
    }

    function handleCompleted(id){
        let newList = list.map((item) => {
            if(item.id === id){
                item.completed = !item.completed
            }
            return item
        })
        setList(newList)
        localStorage.setItem('todoList', JSON.stringify(newList))
        setTaskCompleted(true)
        setTimeout(() => {
            setTaskCompleted(false)
        }, 850)
    }
    function handleNotCompleted(id){
        let newList = list.map((item) => {
            if(item.id === id){
                item.completed = !item.completed
            }
            return item
        })
        setList(newList)
        localStorage.setItem('todoList', JSON.stringify(newList))
        setCompletedRemoved(true)
        setTimeout(() => {
            setCompletedRemoved(false)
        }, 850)
    }
    function handleModalDelete(id){
        setModalDelete(true)
        setTaskDeleteID(id)
    }

    function handleDeleteTask(e){
        e.stopPropagation();
        let newList = list.filter((item) => item.id !== taskDeleteID)
        setList(newList)
        localStorage.setItem('todoList', JSON.stringify(newList))
        setTaskRemoved(true)
        setModalDelete(false)
        setTimeout(() => {
            setTaskRemoved(false)
        }, 850)
    }


    return (
        <div className="mt-10 flex flex-col mx-auto gap-4 min-w-0 w-fit max-w-[680px]">
            {list?.sort((a, b) => a.completed - b.completed || b.id - a.id).map((item, index) => (
                    <label name={index+"todo"} key={index} className={`flex ${item.completed ? "bg-stone-600 text-stone-500 shadow-stone-600 shadow-sm hover:bg-neutral-800" : "shadow-neutral-700 shadow-sm hover:shadow-sm hover:shadow-neutral-200 hover:bg-neutral-950"} relative justify-center select-none w-fit ps-1 pe-1 py-1 gap-2 min-w-0 max-w-[500px] shadow-neutral-500 shadow-sm rounded duration-200 animate-pulse-short`}>
                    <div className="absolute -z-10 inset-0 bg-black bg-opacity-80 blur-sm"></div>
                        {getDateString(item.id)}
                        {item.completed 
                            ? <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleNotCompleted(item.id)} className={`fill-green-400 hover:fill-red-500 mt-4 min-w-4 duration-200 cursor-pointer scale-125`} height="26" viewBox="0 -960 960 960" width="22"><path d="m427.462-363.692 211.846-210.846L616-597.846 427.462-410.308l-85-84L319.154-471l108.308 107.308ZM480.134-136q-70.673 0-133.41-26.839-62.737-26.84-109.865-73.922-47.127-47.082-73.993-109.757Q136-409.194 136-479.866q0-71.673 26.839-133.91 26.84-62.237 73.922-109.365 47.082-47.127 109.757-73.993Q409.194-824 479.866-824q71.673 0 133.91 26.839 62.237 26.84 109.365 73.922 47.127 47.082 73.993 109.257Q824-551.806 824-480.134q0 70.673-26.839 133.41-26.84 62.737-73.922 109.865-47.082 47.127-109.257 73.993Q551.806-136 480.134-136ZM480-168q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/></svg>
                            : <span onClick={() => handleCompleted(item.id)} className="min-w-5 h-5 mt-5 fill-blue-200 hover:border-blue-400 border hover:bg-green-400 rounded duration-200 cursor-pointer"></span>}
                        <div className="flex flex-col h-full">
                            {!item.completed 
                            ? <span className=" font-light text-xs w-fit text-neutral-400 text-nowrap">task</span>
                            : <span className=" font-light text-xs w-fit text-neutral-400 text-nowrap">done!</span>}
                            <p className={`${item.completed ? "line-through text-wrap italic" : "text-wrap"}`}>{item.text}</p>
                        </div>
                        
                        {/* <ToDoDate date={item.id} /> */}
                        <div className="rounded bg-neutral-700 h-fit hover:bg-neutral-500 duration-200 mt-4">

                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleModalDelete(item.id)} height="28" fill="white" className="cursor-pointer hover:fill-neutral-300 duration-200" viewBox="0 -960 960 960" width="26"><path d="M377.731-330.769 480.5-433.538l102.769 102.769 26.462-26.462L506.962-460l102.769-102.769-26.462-26.462L480.5-486.462 377.731-589.231l-26.462 26.462L454.038-460 351.269-357.231l26.462 26.462Zm-71.27 164.615q-25.937 0-43.738-17.8-17.8-17.801-17.8-43.56v-490.64h-39.385v-36.795h155.693v-29.667h238.154v29.539h155.692v36.923h-39.384v490.64q0 25.759-17.801 43.56-17.8 17.8-43.738 17.8H306.461Zm372.308-552H281.846v490.462q0 9.231 7.692 16.923 7.693 7.692 16.923 7.692h347.693q9.231 0 16.923-7.692 7.692-7.692 7.692-16.923v-490.462Zm-396.923 0v515.077-515.077Z"/></svg>
                        </div>
                            
                    </label>
                ))}
            {taskCompleted && <span className="fixed top-3 left-3 z-50 border rounded px-2 py-1 bg-blue-600 animate-pulse-shortout shadow shadow-white">Task completed !</span>}
            {completedRemoved && <span className="fixed top-3 left-3 z-50 border rounded px-2 py-1 bg-orange-600 animate-pulse-shortout shadow shadow-white">Completed remove !</span>}
            {taskRemoved && <span className="fixed top-3 left-3 z-50 border rounded px-2 py-1 bg-rose-900 animate-pulse-shortout shadow shadow-white">Task removed !</span>}
            {modalDelete && <div onClick={() => setModalDelete(false)} className="fixed flex justify-center items-center inset-0 w-full h-full z-50 bg-opacity-90 rounded px-2 py-1 bg-black animate-pulse-veryshort">
                <div onClick={(e) => e.stopPropagation()} className="w-fit h-fit py-4 px-8 border bg-rose-900 text-white text-lg rounded shadow-sm shadow-orange-400">
                    <h4 className="uppercase font-semibold text-2xl pb-4 text-center flex gap-2 justify-center items-center flex-nowrap"><span><svg fill="white" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M117.23-165.538 480-791.385l362.77 625.847H117.23Zm63.847-36.924h597.846L480-717.538 181.077-202.462Zm298.818-55.999q10.336 0 16.913-6.472t6.577-16.808q0-10.336-6.472-16.913t-16.808-6.577q-10.336 0-16.913 6.472-6.577 6.471-6.577 16.808 0 10.336 6.472 16.913t16.808 6.577Zm-18.049-86.154h36.923v-198.154h-36.923v198.154ZM480-460Z"/></svg></span>
                        <span>Delete task?</span></h4>
                    <div className="flex gap-2 flex-nowrap items-center justify-center">
                        <button onClick={() => setModalDelete(false)} className="w-20 border rounded bg-neutral-600 shadow-md shadow-rose-500 hover:shadow-sm hover:shadow-white hover:bg-neutral-500 duration-200">Cancel</button>
                        <button onClick={(e) => handleDeleteTask(e)} type="button" className="w-20 border rounded bg-green-600 shadow-md shadow-rose-500 hover:shadow-sm hover:shadow-white hover:bg-green-500 duration-200">Confirm</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}