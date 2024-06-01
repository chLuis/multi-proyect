export default function ListProyects() {

    const LIST_PROYECTS = [
        {
            name: "WhatsappWeb only CSS",
            link: "wspFake",
            description: "Create a fake WhatsApp interface that mimics the look and feel of the real app.",
            image: "/images/wspFake.webp"
        },
        {
            name: "Transcription Audio",
            link: "transcription",
            description: "A TypeScript app that plays .WAV audio file and syncs their transcriptions from a JSON file in real-time.",
            image: "/images/transcription.webp"
        },
        {
            name: "API",
            link: "fetch-api",
            description: "Develop a Weather App that fetches data from a weather API based on the user's inputted location. The app should display current weather conditions, such as temperature, humidity.",
            image: "/images/api.webp"
        },
        {
            name: "Drag and Drop",
            link: "drag-drop",
            description: "Develop an application that demonstrates drag-and-drop functionality. The app should allow users to drag items from one area and drop them into another.",
            image: "/images/dragDrop.webp"
        },
        {
            name: "TODO List",
            link: "todo-list",
            description: "Create a ToDo List application where users can add, edit, and delete tasks.",
            image: "/images/todo.webp"
        },
        {
            name: "Create Post",
            link: "create-post",
            description: "Build an application where users can create and publish posts. The app should include a form for creating posts with fields like title, content, and category.",
            image: "/images/createPost.webp"
        },
    ]

    return (
        <div id="projects" className="flex flex-col items-center justify-center py-12 animate-pulse-veryshort bg-gray-200 text-gray-900 font-cormorant px-4 lg:px-16">
        <h2 className="capitalize font-sans text-center sm:text-start w-full px-4 lg:px-0 text-3xl font-semibold pb-6 duration-200">My latest projects</h2>
        <ul className="w-full animate-width grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 text-ellipsis text-nowrap px-4 lg:px-0 duration-200">
            {LIST_PROYECTS.map(({name, link, description, image}, index) => 
                <a key={index} href={`/${link}`} className="relative flex flex-col rounded-lg font-sans overflow-clip h-80 group bg-white hover:bg-gray-100 hover:scale-[1.02] border border-gray-500 hover:shadow hover:shadow-gray-700 duration-200">
                    <img src={image} alt={name} className="object-cover object-top h-48 max-h-48 group-hover:scale-105 overflow-clip duration-200" />
                    <div className="p-4 flex flex-col gap-2">
                    <h4 className="font-bold text-lg">{name}</h4>
                    <p className="line-clamp-2 text-wrap text-ellipsis">{description}</p>
                    <span className="hidden group-hover:inline font-bold animate-comeFromRight absolute top-4 right-0 px-4 py-1 bg-yellow-300 text-black text-sm z-50 uppercase">View project</span>
                    {name === "WhatsappWeb only CSS" && <span className="group-hover:inline font-bold animate-comeFromRight absolute top-10 -left-10 px-8 py-1 rotate-[-45deg] bg-yellow-300 text-black text-sm z-50 ">Winner challenge!</span>}
                    </div>
                </a>
            )}
        </ul></div>
    );
}
