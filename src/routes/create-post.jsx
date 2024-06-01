import { useEffect, useState } from "react";
import TitleProyect from "../components/TitleProyect";
import Background from "../components/Background";

export default function CreatePostPage() {


    const POST_INICIAL = [
        {id: 273292374, category: "Movies",title: "Title 1",content: "Content 1",  date: "20 de febrero de 2024"},
        {id: 27348662374, category: "Movies",title: "Title 2",content: "Content 2", date: "20 de febrero de 2024"},
        {id: 2735492374, category: "Movies",title: "Title 3",content: "Content 3", date: "20 de febrero de 2024"},
        {id: 273342374, category: "Movies",title: "Title 13",content: "Content 3", date: "20 de febrero de 2024"},
        {id: 2734892374, category: "Sports",title: "Title 4",content: "Content 4", date: "20 de febrero de 2024"},
        {id: 27323892374, category: "Sports",title: "Title 5",content: "Content 5", date: "20 de febrero de 2024"},
        {id: 2234892374, category: "Sports",title: "Title 6",content: "Content 6", date: "20 de febrero de 2024"},
        {id: 2434892374, category: "Movies",title: "Title 7",content: "Content 7", date: "20 de febrero de 2024"},
        {id: 272318974, category: "Movies",title: "Title 8",content: "Content 8", date: "20 de febrero de 2024"},
        {id: 2734892234, category: "History",title: "Title 9",content: "Content 9", date: "20 de febrero de 2024"},
        {id: 2734892423, category: "History",title: "Title 10",content: "Content 10", date: "20 de febrero de 2024"}
        ];
    const [post, setPost] = useState([]);
    const [createPostForm, setCreatePostForm] = useState(false);
    const [alertCategory, setAlertCategory] = useState(false);
    const [alertTitle, setAlertTitle] = useState(false);
    const [alertContent, setAlertContent] = useState(false);
    const [problemCategory, setProblemCategory] = useState("")
    const [problemTitle, setProblemTitle] = useState("")
    const [problemContent, setProblemContent] = useState("")
    const [noteCreatedAlert, setNoteCreatedAlert] = useState(false);
    const [filterBy, setFilterBy] = useState("All");
    const [filterExist, setFilterExist] = useState(false);

    useEffect(() => {
        if(!localStorage.getItem("notesCreated")) {
            localStorage.setItem("notesCreated", JSON.stringify(POST_INICIAL));
        }
        if(localStorage.getItem("notesCreated")) {
            setPost(JSON.parse(localStorage.getItem("notesCreated")));
        }
    },[])

    function formatDate(date, locale, options) {
        return new Intl.DateTimeFormat(locale, options).format(date);
    }

    function handleSubmitPost(e) {
        e.preventDefault();
        const categoryPost = e.target.category.value;
        const date = new Date();
        const datePost = formatDate(date, 'es', {dateStyle: 'long'})
        const titlePost = e.target.title.value;
        const contentPost = e.target.content.value;
        if (categoryPost === "-1") {
            setProblemCategory("You must choose a category")
            setAlertCategory(true);
            setTimeout(() => setAlertCategory(false), 2500);
            return;
        }
        if (titlePost === "" || titlePost.length > 35) {
            titlePost === "" ? setProblemTitle("You must write a title") : setProblemTitle("Title must be less than 35 characters")
            setAlertTitle(true);
            setTimeout(() => setAlertTitle(false), 2500);
            return;
        }
        if (contentPost === "" || contentPost.length > 300) {
            contentPost === "" ? setProblemContent("You must write a content") : setProblemContent("Content must be less than 300 characters")
            setAlertContent(true);
            setTimeout(() => setAlertContent(false), 2500);
            return;
        }
        setPost([...post, { id: new Date().getTime(), category: categoryPost, title: titlePost, content: contentPost, date: datePost }]);
        localStorage.setItem("notesCreated", JSON.stringify([...post, { category: categoryPost, title: titlePost, content: contentPost, date: datePost }]))
        setNoteCreatedAlert(true);
        setCreatePostForm(false);
        setTimeout(() => setNoteCreatedAlert(false), 2500);
    }

    function handleFilterNotes(e) {
        e.preventDefault()
        if(e.target.innerText === "Clear Filter") {
            setFilterExist(false);
            setFilterBy("All");
            return;
        }
        setFilterBy(e.target.innerText);
        setFilterExist(true);
    }


    function handleDeletePost(id_post) {
        const newSetPost = [...post];
        const posteos = newSetPost.filter(item => item.id !== id_post)
        setPost(posteos);
        localStorage.setItem("notesCreated", JSON.stringify(posteos))
    }


    return (
        <div className="flex flex-col items-center animate-pulse-veryshort pb-8 min-h-screen">
            <Background />
            <TitleProyect title={"Create Post"} />
            <div className="z-50 fixed flex flex-col gap-3 top-6 left-2 text-lg">
                {alertCategory && <div className="z-50 border rounded px-3 py-1 bg-red-900 border-red-600">{problemCategory}</div>}
                {alertTitle && <div className="z-50 border rounded px-3 py-1 bg-red-900 border-red-600">{problemTitle}</div>}
                {alertContent && <div className="z-50 border rounded px-3 py-1 bg-red-900 border-red-600">{problemContent}</div>}
                {noteCreatedAlert && <div className="z-50 border rounded px-3 py-1 bg-green-900 border-green-600">Note created successfully</div>}
            </div>
            <section className="flex flex-col items-center gap-4">
                <div onClick={() => setCreatePostForm(!createPostForm)} className="mx-4 w-fit py-2 px-4 cursor-pointer font-extrabold border border-green-300 bg-green-800 rounded uppercase hover:border-green-400 hover:bg-green-900 duration-200">
                    Create +
                </div>
                {createPostForm && <form onSubmit={(e) => handleSubmitPost(e)} className="fixed flex justify-center top-0 w-full h-full bg-black bg-opacity-80 z-40 animate-pulse-veryshort">
                    <div className="p-4 border w-3/4 max-w-[600px] h-fit mt-20 bg-black ">
                    <h2 className="text-center font-extrabold text-2xl mb-4">Create a new post!</h2>
                    <div className="relative flex flex-col gap-4 flex-nowrap">
                    <select defaultValue={-1} name="category" className="rounded text-white py-1 px-1">
                        <option value={-1} disabled className="text-white">chose a category</option>
                        <option value={"Sports"}>Sports</option>
                        <option value={"Movies"}>Movies</option>
                        <option value={"History"}>History</option>
                    </select>
                    <input type="text" name="title" maxLength={35} placeholder="Title" className="px-2 py-1 rounded"/>
                    <textarea type="text" name="content" maxLength={300} rows={6} placeholder="Content" className="px-2 py-1 rounded resize-none"/>
                    
                    <button type="submit" className="border w-fit mx-auto py-1 bg-green-700 hover:bg-green-900 duration-200 px-4 rounded">Create Post</button>
                    <button type="button" onClick={() => setCreatePostForm(false)} className="absolute -top-[82px] -right-8 border bg-rose-900 px-3 py-1 rounded-full font-extrabold hover:bg-rose-950 duration-200">X</button>
                    </div>
                    </div>
                </form>}
                <fieldset className="border rounded px-2 pb-3 pt-2">
                <legend className="text-center px-4">Filter by: </legend>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <div onClick={(e) => handleFilterNotes(e)} className={`w-20 border border-neutral-600 px-2 py-1 rounded text-center ${filterBy === "Sports" ? "bg-neutral-800" : "bg-neutral-600"} hover:bg-neutral-950 hover:border-neutral-300 hover:shadow hover:shadow-white duration-200 cursor-pointer select-none`}>Sports</div>
                        <div onClick={(e) => handleFilterNotes(e)} className={`w-20 border border-neutral-600 px-2 py-1 rounded text-center  ${filterBy === "History" ? "bg-neutral-800" : "bg-neutral-600"} hover:bg-neutral-950 hover:border-neutral-300 hover:shadow hover:shadow-white duration-200 cursor-pointer select-none`}>History</div>
                        <div onClick={(e) => handleFilterNotes(e)} className={`w-20 border border-neutral-600 px-2 py-1 rounded text-center ${filterBy === "Movies" ? "bg-neutral-800" : "bg-neutral-600"} hover:bg-neutral-950 hover:border-neutral-300 hover:shadow hover:shadow-white duration-200 cursor-pointer select-none`}>Movies</div>
                    </div>
                    {filterExist && <div className="flex w-full text-center animate-pulse-veryshort">
                        <div onClick={(e) => handleFilterNotes(e)} className="w-full border border-neutral-600 px-2 rounded text-center bg-neutral-800 hover:bg-neutral-950 hover:border-neutral-300 hover:shadow hover:shadow-white duration-200 cursor-pointer select-none">Clear Filter</div>
                    </div>}
                </div>
                </fieldset>
                {filterBy === "All" && <div className="underline">Showing all post</div>}
                {filterBy === "Sports" && <div className="flex gap-2"><span className="underline">Filter by Sports</span></div>}
                {filterBy === "History" && <div className="flex gap-2"><span className="underline">Filter by History</span></div>}
                {filterBy === "Movies" && <div className="flex gap-2"><span className="underline">Filter by Movies</span></div>}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mx-2 order">
                {[...post].reverse().map((item, index) => 
                    filterBy === "All" 
                        ? <div key={index} className={`relative`}>
                            <div className="flex flex-col gap-2 z-20 bg-neutral-700 w-60 min-w-0 max-w-80 border-2 border-neutral-500 rounded p-2 capitalize animate-pulse-short break-words hover:border-white duration-200">
                                <div className="flex justify-between">
                                    <h2 className="italic text-xs">{item.category}</h2>
                                    <p className="text-[10px]">{item.date?.replaceAll(" de ", "-")}</p>
                                </div>
                                <h4 className="font-extrabold text-2xl">{item.title}</h4>
                                <p className="min-h-40">{item.content}</p>
                                <button type="button" onClick={() => handleDeletePost(item.id)} className="w-fit px-2 py-1 border rounded bg-red-600 mx-auto text-xs">Eliminar</button>
                            </div>
                            <div className="absolute top-0 left-0 border border-neutral-200 rounded bg-neutral-400 min-w-full min-h-full -z-10 blur-sm"></div>
                            </div>
                        : filterBy === "Movies"
                            ? item.category === "Movies"
                                ? <div key={index} className="relative">
                                    <div className="flex flex-col gap-2 z-20 bg-neutral-700 w-60 min-w-0 max-w-80 border border-neutral-500 rounded p-2 capitalize animate-pulse-short break-words hover:border-white duration-200">
                                        <div className="flex justify-between">
                                            <h2 className="italic text-xs">{item.category}</h2>
                                            <p className="text-[10px]">{item.date?.replaceAll(" de ", "-")}</p>
                                        </div>
                                        <h4 className="font-extrabold text-2xl">{item.title}</h4>
                                        <p className="min-h-40">{item.content}</p>
                                        <button type="button" onClick={() => handleDeletePost(item.id)} className="w-fit px-2 py-1 border rounded bg-red-600 mx-auto text-xs">Eliminar</button>
                                    </div>
                                    <div className="absolute top-0 left-0 scale-105 hover:scale-110 border border-neutral-600 rounded bg-neutral-800 min-w-full min-h-full -z-10 blur-sm"></div>
                                    </div> 
                                : null
                            : filterBy === "Sports"
                                ? item.category === "Sports"
                                    ? <div key={index} className="relative">
                                        <div className="flex flex-col gap-2 z-20 bg-neutral-700 w-60 min-w-0 max-w-80 border border-neutral-500 rounded p-2 capitalize animate-pulse-short break-words hover:border-white duration-200">
                                            <div className="flex justify-between">
                                            <h2 className="italic text-xs">{item.category}</h2>
                                            <p className="text-[10px]">{item.date?.replaceAll(" de ", "-")}</p>
                                        </div>
                                        <h4 className="font-extrabold text-2xl">{item.title}</h4>
                                        <p className="min-h-40">{item.content}</p>
                                        <button type="button" onClick={() => handleDeletePost(item.id)} className="w-fit px-2 py-1 border rounded bg-red-600 mx-auto text-xs">Eliminar</button>
                                        </div>
                                        <div className="absolute top-0 left-0 scale-105 hover:scale-110 border border-neutral-600 rounded bg-neutral-800 min-w-full min-h-full -z-10 blur-sm"></div>
                                        </div>
                                    : null
                                : filterBy === "History"
                                    ? item.category === "History"
                                        ? <div key={index} className="relative">
                                            <div className="flex flex-col gap-2 z-20 bg-neutral-700 w-60 min-w-0 max-w-80 border border-neutral-500 rounded p-2 capitalize animate-pulse-short break-words hover:border-white duration-200">
                                            <div className="flex justify-between">
                                                <h2 className="italic text-xs">{item.category}</h2>
                                                <p className="text-[10px]">{item.date?.replaceAll(" de ", "-")}</p>
                                            </div>
                                            <h4 className="font-extrabold text-2xl">{item.title}</h4>
                                            <p className="min-h-40">{item.content}</p>
                                            <button type="button" onClick={() => handleDeletePost(item.id)} className="w-fit px-2 py-1 border rounded bg-red-600 mx-auto text-xs">Eliminar</button>
                                            </div>
                                            <div className="absolute top-0 left-0 scale-105 hover:scale-110 border border-neutral-600 rounded bg-neutral-800 min-w-full min-h-full -z-10 blur-sm"></div>
                                            </div>
                                        : null
                                    : null
                    )}</div>
            </section>
        </div>
    );
}
