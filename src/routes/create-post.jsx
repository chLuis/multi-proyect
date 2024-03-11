import { useState } from "react";
import TitleProyect from "../components/TitleProyect";

export default function CreatePostPage() {
    const [post, setPost] = useState([]);
    const [createPostForm, setCreatePostForm] = useState(false);



    function handleSubmitPost(e) {
        e.preventDefault();

        const titlePost = e.target.title.value;
        const contentPost = e.target.content.value;
        setPost([...post, { title: titlePost, content: contentPost }]);
        setCreatePostForm(false);
    }

    return (
        <div className="flex flex-col items-center">
            <TitleProyect title={"Create Post"} />
            <section className="flex flex-col items-center gap-4">
                <div onClick={() => setCreatePostForm(!createPostForm)} className="mx-4 w-fit py-2 px-4 border border-green-300 bg-green-800 rounded uppercase hover:border-green-400 hover:bg-green-900 duration-200">
                    Create +
                </div>
                {createPostForm && <form onSubmit={(e) => handleSubmitPost(e)} className="fixed p-4 border w-3/4 min-h-72 bg-black animate-pulse-veryshort">
                    <div className="relative flex flex-col gap-4 flex-nowrap">
                    <input type="text" name="title" maxLength={35} placeholder="Title" className="px-2 py-1 rounded"/>
                    <textarea type="text" name="content" maxLength={300} rows={6} placeholder="Content" className="px-2 py-1 rounded resize-none"/>
                    <select defaultValue={-1}>
                        <option value={-1} disabled>Category</option>
                        <option value={"Sports"}>Sports</option>
                        <option value={"Movies"}>Movies</option>
                        <option value={"History"}>History</option>
                    </select>
                    <button type="submit" className="border w-fit mx-auto py-1 bg-green-700 hover:bg-green-900 duration-200 px-4 rounded">Create Post</button>
                    <button type="button" onClick={() => setCreatePostForm(false)} className="absolute -top-9 -right-8 border bg-rose-900 px-3 py-1 rounded-full">X</button>
                    </div>
                </form>}
                {post.map((item, index) => 
                    <div key={index} className="w-full">
                        <h4>{item.title}</h4>
                        <p>{item.content}</p>    
                    </div>)}
            </section>
        </div>
    );
}
