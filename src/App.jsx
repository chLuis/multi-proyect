import ListProyects from "./components/ListProyects"

function App() {

  return (
    <div className="flex flex-col items-center mt-16 mx-auto animate-pulse-short">
      <h1 className='font-bold text-center uppercase text-4xl mb-4 text-balance'>Welcome!</h1>
      <h2 className='font-bold text-center uppercase text-xl mb-0'>Here you can find some projects</h2>
      <h4 className="text-neutral-200 italic">Developed with React and Tailwind</h4>
      <div className="fixed blur flex justify-center items-center top-4 right-5 w-52 h-52 rounded-full border border-white -z-20 bg-gradient-to-bl animate-spin-long from-stone-100 to-blue-950  bg-opacity-10">
        <span className="relative min-w-full min-h-full">
          <span className="fixed top-10 right-10 bg-neutral-500 rounded-full w-2 h-2"></span>
          <span className="fixed top-20 right-10 bg-neutral-500 rounded-full w-4 h-4"></span>
          <span className="fixed top-40 right-20 bg-neutral-500 rounded-full w-6 h-2"></span>
          <span className="fixed bottom-10 right-10 bg-neutral-500 rounded-full w-4 h-2"></span>
          <span className="fixed bottom-10 left-10 bg-neutral-500 rounded-full w-2 h-2"></span>
        </span>
      </div>
        <span className="fixed top-12 left-2 z-10 w-1 h-1 bg-white animate-pulse-star rounded-full"></span>
        <span className="fixed top-12 left-22 z-10 w-1 h-1 bg-white animate-pulse-star rounded-full"></span>
        <span className="fixed top-28 left-20 z-10 w-1 h-1 bg-white animate-pulse-star rounded-full"></span>
        <span className="fixed top-24 left-28 z-10 w-1 h-1 bg-white animate-pulse-star rounded-full"></span>
        <span className="fixed top-28 left-40 z-10 w-1 h-1 bg-white animate-pulse-star rounded-full"></span>
        <span className="fixed top-32 left-40 z-10 w-1 h-1 bg-white animate-pulse-star rounded-full"></span>
        <span className="fixed top-36 left-10 z-10 w-2 h-2 bg-white animate-pulse-star rounded-full"></span>
        <span className="fixed top-40 left-32 z-10 w-1 h-1 bg-white animate-pulse-star rounded-full"></span>
        <span className="fixed top-44 left-14 z-10 w-1 h-1 bg-white animate-pulse-star rounded-full"></span>
        <span className="fixed top-52 left-16 z-10 w-1 h-1 bg-white animate-pulse-star rounded-full"></span>
        <span className="fixed top-56 left-24 z-10 w-1 h-1 bg-white animate-pulse-star rounded-full"></span>
        <span className="fixed top-48 left-28 z-10 w-1 h-1 bg-white animate-pulse-star rounded-full"></span>
        <span className="fixed top-52 left-44 z-10 w-1 h-1 bg-white animate-pulse-star rounded-full"></span>
      <span className="fixed -z-10 animate-heigh-size-up bottom-52 left-0 w-[200%] h-60 bg-gradient-to-t from-blue-400 via-15% via-blue-900 to-blue-950 blur"></span>
      <span className="fixed -z-20 animate-pulse-short bottom-0 left-0 w-[200%] h-52 bg-gradient-to-t from-stone-900 to-stone-700 blur"></span>
        <ListProyects />
    </div>
  )
}

export default App
