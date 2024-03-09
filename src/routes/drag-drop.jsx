import { useEffect, useState } from "react";
import { SET_ELEMENT } from "../../lib/list";

export default function DragAndDropPage() {
    const [landingZone, setLandingZone] = useState([]);
    const [hoverDrag, setHoverDrag] = useState("bg-neutral-800");
    const [showTrash, setShowTrash] = useState(false);
    const [hoverTrash, setHoverTrash] = useState("bg-red-600");
    const [count, setCount] = useState(0);

    useEffect(() => {
        let total = 0;
        landingZone.forEach((item) => {
            total += item.price;
        });
        setCount(total);
    }, [landingZone]);

    function handleOnDrag(e) {
        console.log("AGARRAO");
        //console.log(e.target.value)
        e.dataTransfer.setData("contenido", e.target.innerText);
        e.dataTransfer.setData("precio", e.target.value);
    }

    function handleDragOver(e) {
        e.preventDefault();
        console.log("VOLANDO");
        setHoverDrag("bg-neutral-700");
        setHoverTrash("bg-red-600");
    }

    function handleOnDrop(e) {
        e.stopPropagation();
        console.log("ADENTRO");
        e.preventDefault();
        setHoverDrag("bg-neutral-800");
        if (e.dataTransfer.getData("contenido")) {
            const data = e.dataTransfer.getData("contenido");
            const precio = Number(e.dataTransfer.getData("precio"));
            setLandingZone([...landingZone, { name: data, price: precio }]);
        }
    }

    function handleEndAll(e) {
        e.preventDefault();
        setHoverDrag("bg-neutral-800");
        console.log("AFUERA");
        setShowTrash(false);
    }

    function handleOnDragList(e) {
        console.log("AGARRAO LISTA");
        e.dataTransfer.setData("contenidoLista", e.target.innerText);
        e.dataTransfer.setData("index", e.target.value);
        if (!showTrash) {
            setShowTrash(true);
        }
    }

    function handleOverTrash(e) {
        e.preventDefault();
        e.stopPropagation();
        setHoverTrash("bg-red-900");
        console.log("VOLANDO TRASH");
    }

    function handleTrash(e) {
        e.stopPropagation();
        e.preventDefault();
        console.log("BORRAR");
        const index = Number(e.dataTransfer.getData("index"));
        console.log(index);
        //const data = e.dataTransfer.getData("contenidoLista")
        //const precio = Number(e.dataTransfer.getData("precioLista"))
        let newLandingZone = landingZone;
        newLandingZone.splice(index, 1);
        setLandingZone([...newLandingZone]);
        setHoverTrash("bg-red-600");
        setShowTrash(false);
    }

    function handleOverAll(e) {
        e.preventDefault();
        setHoverDrag("bg-neutral-800");
        setHoverTrash("bg-red-600");
        console.log("VOLANDO GRANDE");
    }

    return (
        //<div className="mx-4" onDrop={handleOverAll}>
        <div
            onDragOver={handleOverAll}
            onTouchMove={handleOverAll}
            className="mx-4 animate-pulse-veryshort"
        >
            <header className="flex flex-col justify-center items-center mt-10 mb-10">
                <h1 className="text-2xl font-extrabold">Drag and Drop</h1>
                <a
                    href="/"
                    className="text-center font-semibold border-b-2 border-b-transparent px-4 xs:px-20 hover:border-b-white hover:px-0 duration-200"
                >
                    Back to home
                </a>
            </header>

            <section className="flex flex-col md:flex-row gap-2 justify-center w-full text-center select-none">
                <div>
                    <div
                        onDrop={(e) => e.stopPropagation()}
                        onDragOver={(e) => e.stopPropagation()}
                        onTouchEnd={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                        className="w-full min-h-60 border rounded bg-blue-600"
                    >
                        <h4 className="min-h-6">Zona de landing</h4>

                        <div
                            onDrop={handleOnDrop}
                            onDragOver={handleDragOver}
                            onTouchEnd={handleOnDrop}
                            onTouchMove={handleDragOver}
                            className={`min-w-full min-h-60 z-10 ${hoverDrag}`}
                        >
                            {landingZone.map((item, index) => (
                                <option
                                    draggable
                                    onDragStart={(e) => handleOnDragList(e)}
                                    onDragEnd={handleEndAll}
                                    onTouchStart={(e) => handleOnDragList(e)}
                                    onTouchEnd={handleEndAll}
                                    key={index}
                                    value={index}
                                    className="hover:bg-slate-900 duration-200"
                                >
                                    {item.name} - {item.price}
                                </option>
                            ))}
                        </div>

                        <div>Total: {count}</div>
                    </div>
                    <div className="min-h-14 flex justify-center items-center w-full">
                        {showTrash && (
                            <div
                                onDragOver={handleOverTrash}
                                onDrop={handleTrash}
                                onTouchMove={handleOverTrash}
                                onTouchEnd={handleTrash}
                                className={`${hoverTrash} min-h-14 w-full flex justify-center items-center rounded duration-200 animate-width`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-trash"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M4 7l16 0" />
                                    <path d="M10 11l0 6" />
                                    <path d="M14 11l0 6" />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>

                <div className="w-full">
                    <h4>Elementos</h4>
                    <div className="flex flex-row flex-wrap gap-1 justify-center items-center hover:bg-neutral-800 p-4">
                        {SET_ELEMENT.map((item, index) => (
                            <option
                                value={item.price}
                                key={index}
                                draggable
                                onDragStart={(e) => handleOnDrag(e)}
                                onDragEnd={handleOverAll}
                                onTouchStart={(e) => handleOnDrag(e)}
                                onTouchEnd={handleOverAll}
                                className="w-28 border rounded p-2 hover:bg-slate-400 cursor-grab active:cursor-grabbing select-none duration-200"
                            >
                                {item.name}
                            </option>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
