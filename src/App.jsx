import { useEffect } from "react";
import Background from "./components/Background"
import ListProyects from "./components/ListProyects"
import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    let title = '';

    switch (pathname) {
      case '/':
        title = 'Inicio';
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
      // Agrega más casos según sea necesario para otras rutas
      default:
        title = 'chLuis';
    }

    document.title = title;
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center mt-16 mx-auto animate-pulse-short">
      <h1 className='font-bold text-center uppercase text-4xl mb-4 text-balance'>Welcome!</h1>
      <h2 className='font-bold text-center uppercase text-xl mb-0'>Here you can find some projects</h2>
      <h4 className="text-neutral-200 italic">{"Developed with React(Vite) and Tailwind"}</h4>
        <Background />
        <ListProyects />
    </div>
  )
}

export default App
