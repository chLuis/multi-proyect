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
        <ul className="w-60">
            {LIST_PROYECTS.map(({name, link}, index) => 
                <li key={index} className="my-3 rounded border p-2 text-center hover:bg-slate-900 duration-200">
                <a href={`/${link}`}>{name}</a>
                </li>)}
                
        </ul>
    );
}
