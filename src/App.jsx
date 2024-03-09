import ListProyects from "./components/ListProyects"

function App() {

  return (
    <div className="flex flex-col items-center mt-8 mx-32 animate-pulse-short">
      <h1 className='font-bold text-center uppercase text-4xl mb-4 text-balance'>Bienvenido a mi página de multiproyectos!</h1>
        <ListProyects />
    </div>
  )
}

export default App
