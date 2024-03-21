import { useState } from "react"

export default function FetchWeather() {
    const BASE_URL = "http://api.weatherapi.com/v1"
    const currentWeather = "/current.json"
    const key = import.meta.env.VITE_CLIMA
    //const q = "Buenos Aires"
    const [weather, setWeather] = useState([])
    const [location, setLocation] = useState("")

    //fetch(`${BASE_URL}${currentWeather}?key=${key}&q=${q}`)
    function getWeather() {
        fetch(`${BASE_URL}${currentWeather}?key=${key}&q=${location}`)
            .then(response => response.json())
            .then(data => setWeather(data))
            .then(setLocation(""))
            .catch(error => alert(`${error} - ${location} doesn't match`))
    }
    function handleKeyDown(event){
        if(event.key === 'Enter'){
            getWeather()
        }
    }

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex gap-2 justify-center items-center mb-8">
                <input value={location} onChange={(e) => setLocation(e.target.value)} onKeyDown={(e) => handleKeyDown(e)} className="rounded py-1 px-2"></input>
                <button onClick={getWeather} className="border rounded px-2 bg-orange-500 hover:bg-orange-800 duration-200 ">Search</button>
            </div>
            {weather && <div className="relative flex flex-col justify-between gap-1 items-center w-80 h-[350px] border rounded py-2 px-2 animate-pulse-short">
                <div className="absolute inset-0 w-full h-full bg-black opacity-45 -z-10 blur-md"></div>
                {weather?.error && <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black z-10">
                    <div>{weather.error.message}</div>
                </div>}
                <div className="flex flex-col items-center">
                    <div className="flex gap-2 font-semibold">
                        <span>{weather?.location?.name}</span>
                        <span> - </span>
                        <span>{weather?.location?.region}</span>
                    </div>
                    <span className="font-medium text-sm">{weather?.location?.country}</span>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1 justify-center ">
                        <img src={weather?.current?.condition?.icon} alt="weather icon" className="object-cover h-32" />
                        <div className="flex flex-col justify-center">
                            <span className="text-5xl font-bold">{weather?.current?.temp_c}°C</span>
                            <span className="px-2">{weather?.current?.condition?.text}</span>
                        </div>
                    </div>
                    <span>Wind: {weather?.current?.wind_kph} Km/h from {weather?.current?.wind_dir}</span>
                    <span>Humidity: {weather?.current?.humidity}%</span>
                    <span>Visibility: {weather?.current?.vis_km} km.</span>
                </div>
                <div className="mt-6 text-xs">{weather?.location?.localtime}</div>
            </div>}
        </div>
    )
}