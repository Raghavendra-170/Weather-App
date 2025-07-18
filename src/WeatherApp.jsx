import SearchBox from "./Search Box"
import InfoBox from "./InfoBox"
import { useState } from "react"
import './WeatherApp.css'; // Assuming you have a CSS file for styling

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] =useState({
        city : "Delhi",
        feelsLike: 42.9,
        humidity: 67,
        temp: 35.9,
        tempMax: 35.9,
        tempMin: 35.9,
        weather: "overcast clouds",
    })

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div className="WeatherApp">
            <br /><br /><br />
            <h1>Welcome to the Weather App</h1>
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}