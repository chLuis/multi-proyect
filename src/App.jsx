import { useEffect } from "react";
import Background from "./components/Background"
import ListProyects from "./components/ListProyects"
import { useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    let title = '';

    switch (pathname) {
      case '/':
        title = 'Home projects';
        break;
      case '/drag-drop':
        title = 'Arrastrar y soltar';
        break;
      case '/todo-list':
        title = 'Lista de tareas';
        break;
      case '/wspFake':
        title = 'WhatsApp';
        break;
      case '/transcription':
        title = 'Transcription';
        break;
      case '/design':
        title = 'Design';
        break;
      // Agrega más casos según sea necesario para otras rutas
      default:
        title = 'chLuis';
    }

    document.title = title;
  }, [location.pathname]);

  return (
    <>

    <section className="font-cormorant flex flex-col items-center pt-32 lg:pt-20 pb-32 mx-auto animate-pulse-short bg-gray-900 duration-200">
      <h1 className='font-bold text-center text-3xl lg:text-6xl mt-0 lg:mt-4 mb-4 animate-width text-ellipsis text-nowrap'>Welcome to my Projects!</h1>
      <h2 className='text-center lg:text-xl mb-0'>Explore my lates frontend projects and learn about me.</h2>
      <h4 className="text-neutral-400 text-sm">{"Developed with React(Vite) and Tailwind"}</h4>
      <div className="font-sans flex gap-6 mt-8">
        <a href="#projects" className="w-40 text-center font-medium outline outline-1 outline-gray-50 hover:outline-blue-600 rounded-lg text-lg bg-gray-950 bg-opacity-20 hover:text-blue-600 py-3 px-4 duration-200">View Projects</a>
        <a href="https://chluis-portfolio.netlify.app/" target="_blank" rel="noreferrer noopenner" className="w-40 text-center font-medium text-lg rounded-lg hover:bg-gray-950 py-3 px-4 outline outline-1 bg-white text-gray-950 hover:text-white duration-200">About Me</a>
      </div>
        <Background />
    </section>
    <section>
      <ListProyects />
    </section>
    </>
  )
}

export default App
