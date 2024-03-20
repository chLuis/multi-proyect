import { useEffect, useState } from "react";

export default function ToDoDate({date}) {

    const MONTHS = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre']

    const [dia, setDia] = useState()
    const [mes, setMes] = useState()
    const [año, setAño] = useState()
    const [hora, setHora] = useState()
    const [minuto, setMinuto] = useState()

    function getDateString(date){
        let fechaTransform = new Date(date);
        let dia = fechaTransform.getDate();
        let mes = fechaTransform.getMonth(); // Los meses en JavaScript comienzan desde 0
        let año = fechaTransform.getFullYear().toString().slice(-2); // Obtiene los últimos dos dígitos del año
        let hora = fechaTransform.getHours();
        let minuto = fechaTransform.getMinutes();
        //console.log(dia)
    // Asegura que todos los valores de fecha y hora tengan dos dígitos
        setDia(dia < 10 ? '0' + dia : dia);
        setMes(mes < 10 ? '0' + mes : mes);
        setHora(hora < 10 ? '0' + hora : hora);
        setMinuto(minuto < 10 ? '0' + minuto : minuto);
    
        //let fechaFormateada = año + '/' + mes + '/' + dia + ' ' + hora + ':' + minuto;
        return //fechaFormateada;
}

useEffect(() => {
    getDateString(date)

},[]) 
//console.log(dia)
    return (
        <div className="relative text-[10px] flex flex-col border px-1 pt-4 pb-1 w-16 min-w-16 max-w-16 h-20 max-h-20 text-center bg-red-100 text-neutral-900">
                <span className="absolute top-1 left-2 w-2 h-2 bg-neutral-700 border border-black rounded-full"></span>
                <span className="absolute top-1 right-2 w-2 h-2 bg-neutral-700 border border-black rounded-full"></span>
            <h2 className="uppercase font-semibold overflow-clip text-ellipsis">{MONTHS[Number(mes)]}</h2>
            <h2 className="text-sm font-extrabold">{dia}</h2>
            <p>{hora}:{minuto}</p>
        </div>
    )
}