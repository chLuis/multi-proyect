import { useEffect, useState } from "react";
import TitleProyect from "../components/TitleProyect";

export default function CreatePostPage() {


    const POST_INICIAL = [
        {category: "Movies",title: "Title 1",content: "Content 1",},
        {category: "Movies",title: "Title 2",content: "Content 2",},
        {category: "Movies",title: "Title 3",content: "Content 3",},
        {category: "Movies",title: "Title 13",content: "Content 3",},
        {category: "Sports",title: "Title 4",content: "Content 4",},
        {category: "Sports",title: "Title 5",content: "Content 5",},
        {category: "Sports",title: "Title 6",content: "Content 6",},
        {category: "Movies",title: "Title 7",content: "Content 7",},
        {category: "Movies",title: "Title 8",content: "Content 8",},
        {category: "History",title: "Title 9",content: "Content 9",},
        {category: "History",title: "Title 10",content: "Content 10"}
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

    useEffect(() => {
        if(!localStorage.getItem("notesCreated")) {
            localStorage.setItem("notesCreated", JSON.stringify(POST_INICIAL));
        }
        if(localStorage.getItem("notesCreated")) {
            setPost(JSON.parse(localStorage.getItem("notesCreated")));
        }
    },[])



    function handleSubmitPost(e) {
        e.preventDefault();
        const categoryPost = e.target.category.value;
        console.log(categoryPost)
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
        setPost([...post, { category: categoryPost, title: titlePost, content: contentPost }]);
        localStorage.setItem("notesCreated", JSON.stringify([...post, { category: categoryPost, title: titlePost, content: contentPost }]))
        setNoteCreatedAlert(true);
        setCreatePostForm(false);
        setTimeout(() => setNoteCreatedAlert(false), 2500);
    }

    function handleFilterNotes(e) {
        e.preventDefault()
        setFilterBy(e.target.innerText);
    }
    //consle.log(filterBy)

    function handleDeletePost(index) {
        const newSetPost = [...post];
        newSetPost.splice(index, 1);
        setPost(newSetPost);
        localStorage.setItem("notesCreated", JSON.stringify(newSetPost))
    }

    return (
        <div className="flex flex-col items-center animate-pulse-veryshort">
            <TitleProyect title={"Create Post"} />
            <div className="z-50 fixed flex flex-col gap-3 top-6 left-2 text-lg">
                {alertCategory && <div className="z-50 border rounded px-3 py-1 bg-red-900 border-red-600">{problemCategory}</div>}
                {alertTitle && <div className="z-50 border rounded px-3 py-1 bg-red-900 border-red-600">{problemTitle}</div>}
                {alertContent && <div className="z-50 border rounded px-3 py-1 bg-red-900 border-red-600">{problemContent}</div>}
                {noteCreatedAlert && <div className="z-50 border rounded px-3 py-1 bg-green-900 border-green-600">Note created successfully</div>}
            </div>
            <section className="flex flex-col items-center gap-4">
                <div onClick={() => setCreatePostForm(!createPostForm)} className="mx-4 w-fit py-2 px-4 cursor-pointer border border-green-300 bg-green-800 rounded uppercase hover:border-green-400 hover:bg-green-900 duration-200">
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
                <div className="flex gap-2">
                    <div onClick={(e) => handleFilterNotes(e)} className="w-20 border border-neutral-600 px-2 py-1 rounded text-center bg-neutral-800 hover:bg-neutral-950 hover:border-neutral-300 hover:shadow hover:shadow-white duration-200 cursor-pointer select-none">Sports</div>
                    <div onClick={(e) => handleFilterNotes(e)} className="w-20 border border-neutral-600 px-2 py-1 rounded text-center bg-neutral-800 hover:bg-neutral-950 hover:border-neutral-300 hover:shadow hover:shadow-white duration-200 cursor-pointer select-none">History</div>
                    <div onClick={(e) => handleFilterNotes(e)} className="w-20 border border-neutral-600 px-2 py-1 rounded text-center bg-neutral-800 hover:bg-neutral-950 hover:border-neutral-300 hover:shadow hover:shadow-white duration-200 cursor-pointer select-none">Movies</div>
                </div>
                </fieldset>
                {filterBy === "All" && <div className="underline">Show all post</div>}
                {filterBy === "Sports" && <div className="flex gap-2"><span className="underline">Filter by Sports</span><span onClick={() => setFilterBy("All")} className="italic border rounded px-2 bg-neutral-500  hover:bg-neutral-600 duration-200 cursor-pointer">Clear Filter</span></div>}
                {filterBy === "History" && <div className="flex gap-2"><span className="underline">Filter by History</span><span onClick={() => setFilterBy("All")} className="italic border rounded px-2 bg-neutral-500  hover:bg-neutral-600 duration-200 cursor-pointer">Clear Filter</span></div>}
                {filterBy === "Movies" && <div className="flex gap-2"><span className="underline">Filter by Movies</span><span onClick={() => setFilterBy("All")} className="italic border rounded px-2 bg-neutral-500  hover:bg-neutral-600 duration-200 cursor-pointer">Clear Filter</span></div>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mx-2">
                {post.map((item, index) => 
                    filterBy === "All" 
                        ? <div key={index} className="relative">
                            <div className="flex flex-col gap-2 z-20 bg-neutral-700 w-60 min-w-0 max-w-80 border border-neutral-500 rounded p-2 capitalize animate-pulse-short break-words hover:border-white duration-200">
                                <h2 className="italic text-xs">{item.category}</h2>
                                <h4 className="font-extrabold text-2xl">{item.title}</h4>
                                <p className="min-h-40">{item.content}</p>
                                <button type="button" onClick={() => handleDeletePost(index)} className="w-fit px-2 py-1 border rounded bg-red-600 mx-auto text-xs">Eliminar</button>
                            </div>
                            <div className="absolute top-0 left-0 scale-105 hover:scale-110 border border-neutral-600 rounded bg-neutral-800 min-w-full min-h-full -z-10 blur-sm"></div>
                            </div>
                        : filterBy === "Movies"
                            ? item.category === "Movies"
                                ? <div key={index} className="relative">
                                    <div className="flex flex-col gap-2 z-20 bg-neutral-700 w-60 min-w-0 max-w-80 border border-neutral-500 rounded p-2 capitalize animate-pulse-short break-words hover:border-white duration-200">
                                        <h2 className="italic text-xs">{item.category}</h2>
                                        <h4 className="font-extrabold text-2xl">{item.title}</h4>
                                        <p className="min-h-40">{item.content}</p>
                                    </div>
                                    <div className="absolute top-0 left-0 scale-105 hover:scale-110 border border-neutral-600 rounded bg-neutral-800 min-w-full min-h-full -z-10 blur-sm"></div>
                                    </div> 
                                : null
                            : filterBy === "Sports"
                                ? item.category === "Sports"
                                    ? <div key={index} className="relative">
                                        <div className="flex flex-col gap-2 z-20 bg-neutral-700 w-60 min-w-0 max-w-80 border border-neutral-500 rounded p-2 capitalize animate-pulse-short break-words hover:border-white duration-200">
                                        <h2 className="italic text-xs">{item.category}</h2>
                                        <h4 className="font-extrabold text-2xl">{item.title}</h4>
                                        <p className="min-h-40">{item.content}</p>
                                        </div>
                                        <div className="absolute top-0 left-0 scale-105 hover:scale-110 border border-neutral-600 rounded bg-neutral-800 min-w-full min-h-full -z-10 blur-sm"></div>
                                        </div>
                                    : null
                                : filterBy === "History"
                                    ? item.category === "History"
                                        ? <div key={index} className="relative">
                                            <div className="flex flex-col gap-2 z-20 bg-neutral-700 w-60 min-w-0 max-w-80 border border-neutral-500 rounded p-2 capitalize animate-pulse-short break-words hover:border-white duration-200">
                                            <h2 className="italic text-xs">{item.category}</h2>
                                            <h4 className="font-extrabold text-2xl">{item.title}</h4>
                                            <p className="min-h-40">{item.content}</p>
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
