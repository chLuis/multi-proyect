import ListProyects from "./components/ListProyects"

function App() {

  return (
    <div className="flex flex-col items-center mt-12 mx-auto animate-pulse-short overflow-clip">
      <h1 className='font-bold text-center uppercase text-4xl mb-4 text-balance'>Welcome!</h1>
      <h2 className='font-bold text-center uppercase text-xl mb-4'>Here can you find some projects</h2>
      <span className="fixed top-4 right-5 w-52 h-52 rounded-full border border-white -z-20 bg-gradient-to-bl animate-spin-long from-white to-blue-950 blur bg-opacity-10"></span>
      <span className="fixed -z-10 animate-pulse-short bottom-0 left-0 w-[200%] h-60 bg-gradient-to-t from-stone-900 to-stone-700 blur"></span>
      <span className="fixed -z-10 animate-pulse-short bottom-60 left-0 w-[200%] h-60 bg-gradient-to-t from-white via-10% via-blue-800 to-blue-950 blur">

      </span>
        <ListProyects />
    </div>
  )
}

export default App
