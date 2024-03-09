export default function ListProyects() {

    const LIST_PROYECTS = [
        {
            name: "Drag and Drop",
            link: "drag-drop"
        },
        {
            name: "TODO List",
            link: "todo-list"
        },
        {
            name: "Create Post",
            link: "create-post"
        },
        {
            name: "Fetch API",
            link: "fetch-api"
        }
    ]

    return (
        <div className="flex justify-center w-60 animate-pulse-veryshort">
        <ul className="w-full animate-width overflow-hidden text-ellipsis text-nowrap">
            {LIST_PROYECTS.map(({name, link}, index) => 
                <a key={index} href={`/${link}`}>
                    <li  className="my-3 rounded border p-2 text-center hover:bg-slate-900 hover:font-semibold duration-200">
                        {name}
                    </li>
                </a>
            )}
        </ul></div>
    );
}
