import Background from "../components/Background";
import FetchWeather from "../components/FetchWeather";
import TitleProyect from "../components/TitleProyect";

export default function FetchApiPage() {
    return (
        <>
        <Background />
        <TitleProyect title={"Fetch API"} />
        <FetchWeather />
        </>

    )
}