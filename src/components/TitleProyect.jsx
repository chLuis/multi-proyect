export default function TitleProyect({title}){
    return(
        <header className="flex flex-col justify-center items-center mt-10 mb-10">
                <h1 className="text-2xl font-extrabold">{title}</h1>
                <a
                    href="/"
                    className="text-center font-semibold border-b-2 border-b-transparent px-4 xs:px-20 hover:border-b-white hover:px-0 duration-200"
                >
                    Back to home
                </a>
            </header>
    )
}