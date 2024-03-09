export default function ErrorPage(){
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className="relative flex flex-col justify-center items-center py-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute opacity-40 animate-pulse inset-0 icon icon-tabler icon-tabler-error-404 w-full h-full" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 7v4a1 1 0 0 0 1 1h3" />
            <path d="M7 7v10" />
            <path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z" />
            <path d="M17 7v4a1 1 0 0 0 1 1h3" />
            <path d="M21 7v10" />
            </svg>
                <h1 className='text-center text-4xl font-bold uppercase'>Error 404</h1>
            </div>
            <p className="text-center mb-16">{"Page doesn't exist."}</p>
            <a href='/' className='text-center font-semibold border-b-2 border-b-transparent px-4 xs:px-20 hover:border-b-white hover:px-0 duration-200'>Volver al inicio</a>
        </div>
    )
}