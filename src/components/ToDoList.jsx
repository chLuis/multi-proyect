import ToDoDate from "./ToDoDate";

export default function ToDoList({data}) {
    //console.log(data)
    return (
        <div className="mt-10 flex flex-col mx-auto gap-4 min-w-0 w-fit max-w-[680px]">
            {data?.sort((a, b) => a.completed - b.completed || b.id - a.id).map((item, index) => (
                    <label name={index+"todo"} key={index} className={`flex ${item.completed ? "bg-neutral-700" : ""} items-center w-fit px-3 py-2 gap-4 min-w-0 max-w-[500px] border hover:shadow-none shadow-white shadow-sm hover:shadow-neutral-200 duration-200`}>
                        {item.completed 
                            ? <svg xmlns="http://www.w3.org/2000/svg" className={`fill-blue-500 duration-200 cursor-pointer`} height="32" viewBox="0 -960 960 960" width="32"><path d="m427.462-363.692 211.846-210.846L616-597.846 427.462-410.308l-85-84L319.154-471l108.308 107.308ZM480.134-136q-70.673 0-133.41-26.839-62.737-26.84-109.865-73.922-47.127-47.082-73.993-109.757Q136-409.194 136-479.866q0-71.673 26.839-133.91 26.84-62.237 73.922-109.365 47.082-47.127 109.757-73.993Q409.194-824 479.866-824q71.673 0 133.91 26.839 62.237 26.84 109.365 73.922 47.127 47.082 73.993 109.257Q824-551.806 824-480.134q0 70.673-26.839 133.41-26.84 62.737-73.922 109.865-47.082 47.127-109.257 73.993Q551.806-136 480.134-136ZM480-168q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/></svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" className={`fill-blue-200 hover:fill-green-400 duration-200 cursor-pointer`} height="32" viewBox="0 -960 960 960" width="32"><path d="M480.409-136q-70.948 0-133.685-26.839-62.737-26.84-109.865-73.922-47.127-47.082-73.993-109.716Q136-409.111 136-480.325q0-71.214 26.839-133.451 26.84-62.237 73.922-109.365 47.082-47.127 109.716-73.993Q409.111-824 480.325-824q71.214 0 133.451 26.839 62.237 26.84 109.365 73.922 47.127 47.082 73.993 109.482Q824-551.357 824-480.409q0 70.948-26.839 133.685-26.84 62.737-73.922 109.865-47.082 47.127-109.482 73.993Q551.357-136 480.409-136ZM480-168q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"/></svg>}
                        <p className={`${item.completed ? "line-through" : ""}`}>{item.text}</p>
                        <ToDoDate date={item.id} />
                    </label>
                ))}
        </div>
    )
}