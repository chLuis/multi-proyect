import { useEffect, useState } from "react";
import { SET_ELEMENT } from "../../lib/list";
import TrashItem from "../components/TrashItem";
import TitleProyect from '../components/TitleProyect.jsx'

export default function DragAndDropPage() {
    const [landingZone, setLandingZone] = useState([]);
    const [dropItemZone, setDropItemZone] = useState(false)
    const [hoverDrag, setHoverDrag] = useState("bg-neutral-800");
    const [showTrash, setShowTrash] = useState(false);
    const [hoverTrash, setHoverTrash] = useState("bg-red-600 border-red-900");
    const [addItem, setAddItem] = useState(false)
    const [deleteItem, setDeleteItem] = useState(false)
    const [count, setCount] = useState(0);

    useEffect(() => {
        let total = 0;
        landingZone.forEach((item) => {
            total += item.price;
        });
        setCount(total);
    }, [landingZone]);

    function handleOnDrag(e) {
        //console.log("AGARRAO");
        e.dataTransfer.setData("contenido", e.target.innerText);
        e.dataTransfer.setData("precio", e.target.value);
        setDropItemZone(true)

    }

    function handleDragOver(e) {
        e.preventDefault();
        //console.log("VOLANDO");
        setHoverDrag("bg-neutral-700");
        setHoverTrash("bg-red-600 border-red-900");
    }

    function handleOnDrop(e) {
        e.stopPropagation();
        //console.log("ADENTRO");
        e.preventDefault();
        setHoverDrag("bg-neutral-800");
        setDropItemZone(false)
        if (e.dataTransfer.getData("contenido")) {
            const data = e.dataTransfer.getData("contenido");
            const precio = Number(e.dataTransfer.getData("precio"));
            setLandingZone([...landingZone, { name: data, price: precio }]);
            setAddItem(true)
            setTimeout(() => {
                setAddItem(false)
            }, 900)
        }
    }

    function handleEndAll(e) {
        e.preventDefault();
        setHoverDrag("bg-neutral-800");
        //console.log("AFUERA");
        setShowTrash(false);
    }

    function handleOnDragList(e) {
        //console.log("AGARRAO LISTA");
        e.dataTransfer.setData("contenidoLista", e.target.innerText);
        e.dataTransfer.setData("index", e.target.value);
        if (!showTrash) {
            setShowTrash(true);
        }
    }

    function handleOverTrash(e) {
        e.preventDefault();
        e.stopPropagation();
        setHoverTrash("bg-red-900 border-red-500");
        //console.log("VOLANDO TRASH");
    }

    function handleTrash(e) {
        e.stopPropagation();
        e.preventDefault();
        //console.log("BORRAR");
        const index = Number(e.dataTransfer.getData("index"));
        //console.log(index);
        //const data = e.dataTransfer.getData("contenidoLista")
        //const precio = Number(e.dataTransfer.getData("precioLista"))
        let newLandingZone = landingZone;
        newLandingZone.splice(index, 1);
        setLandingZone([...newLandingZone]);
        setHoverTrash("bg-red-600");
        setShowTrash(false);
        setDeleteItem(true)
        setTimeout(() => {
            setDeleteItem(false)
        }, 900)
        
    }

    function handleDeleteInList(e, index){
        e.stopPropagation();
        e.preventDefault();
        //console.log("BORRAR");
        //const index = Number(e.dataTransfer.getData("index"));
        //console.log(index);
        //const data = e.dataTransfer.getData("contenidoLista")
        //const precio = Number(e.dataTransfer.getData("precioLista"))
        let newLandingZone = landingZone;
        newLandingZone.splice(index, 1);
        setLandingZone([...newLandingZone]);
        //setHoverTrash("bg-red-600");
       // setShowTrash(false);
        setDeleteItem(true)
        setTimeout(() => {
            setDeleteItem(false)
        }, 900)
        //setHoverDrag("bg-neutral-800");
        //setHoverTrash("bg-red-600");
        //setShowTrash(false);
        //setDeleteOption(!deleteOption)
       // setHoverTrash("bg-red-600");
        //setShowTrash(false);
        //setDeleteOption(!deleteOption)
    }

    function handleOverAll(e) {
        e.preventDefault();
        setHoverDrag("bg-neutral-800");
        setHoverTrash("bg-red-600");
        //setDropItemZone(true)
        //console.log("VOLANDO GRANDE");
    }
    function handleClick(e) {
        const precio = Number(e.target.value);
        const data = e.target.innerText;
        setLandingZone([...landingZone, { name: data, price: precio }])
        setAddItem(true)
        setTimeout(() => {
            setAddItem(false)
        }, 900)
    }
    function handleDropALL(){
        //console.log("SOLTAO")
        setDropItemZone(false)
    }

    return (
        //<div className="mx-4" onDrop={handleOverAll}>
        <div
            onDragOver={handleOverAll}
            onDrop={handleDropALL}
            className="mx-6 animate-pulse-veryshort"
        >
            <TitleProyect title={"Drag and Drop"} />
            {addItem && <div className="fixed top-10 left-6 px-4 py-2 border border-green-500 rounded bg-green-950 animate-pulse-shortout opacity-0"> Agregado </div>}
            {deleteItem && <div className="fixed top-10 left-6 px-4 py-2 border border-red-500 rounded bg-red-950 animate-pulse-shortout opacity-0"> Eliminado </div>}
            <section className="flex flex-col md:flex-row gap-2 justify-center w-full text-center select-none">

                <div className="w-full">
                    <h4 className="font-extrabold text-xl uppercase">Elementos</h4>
                    <div className="flex flex-row flex-wrap gap-2 justify-center items-center hover:bg-neutral-800 p-4">
                        {SET_ELEMENT.map((item, index) => (
                            <option
                                value={item.price}
                                key={index}
                                draggable
                                onDragStart={(e) => handleOnDrag(e)}
                                onDragEnd={handleOverAll}
                                onClick={handleClick}
                                className="w-28 overflow-clip text-nowrap text-ellipsis border rounded p-2 hover:bg-slate-400 cursor-grab active:cursor-grabbing select-none duration-200"
                            >
                                {item.name}
                            </option>
                        ))}
                    </div>
                </div>
                <div className="w-full">
                    <div
                        onDrop={(e) => e.stopPropagation()}
                        onDragOver={(e) => e.stopPropagation()}
                        className="w-full min-h-60 border rounded bg-blue-600"
                    >
                        <h4 className="min-h-6 uppercase font-semibold">Drop zone</h4>

                        <div
                            onDrop={handleOnDrop}
                            onDragOver={handleDragOver}
                            className={`relative flex flex-col gap-1 min-w-full min-h-60 z-10 ${hoverDrag}`}
                        >
                        {dropItemZone && <div className="absolute w-full h-full bg-black bg-opacity-85 flex justify-center items-center text-4xl font-semibold animate-pulse-veryshort">Drop Element Here</div>}

                            {landingZone.map((item, index) => (
                                <div className="flex flex-nowrap justify-center items-center gap-2 hover:bg-slate-900 duration-200 cursor-grab active:cursor-grabbing" key={index}>
                                <div className="hover:text-red-600 duration-200 hover:cursor-pointer" onClick={(e) => handleDeleteInList(e, index)}>
                                    <TrashItem width="18" height="18" />
                                </div>
                                
                                <option
                                    draggable
                                    onDragStart={(e) => handleOnDragList(e)}
                                    onDragEnd={handleEndAll}
                                    value={index}
                                    className="flex justify-center flex-nowrap  gap-2"
                                >
                                
                                    {item.name} - {item.price}
                                </option>
                                
                                </div>
                            ))}
                        </div>
                        <div>{landingZone?.length >= 1 ? `Quantity: ${landingZone?.length}` : null}</div>
                        <div className="uppercase font-semibold">Total: {count}</div>
                    </div>
                    <div className="min-h-14 flex justify-center items-center w-full">
                        {showTrash && (
                            <div
                                onDragOver={handleOverTrash}
                                onDrop={handleTrash}
                                className={`${hoverTrash} min-h-14 w-full border flex justify-center items-center rounded duration-200 animate-width`}
                            >
                                <TrashItem width={34} height={30} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
