import { React, useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import axios from "axios"

function App(){

    const [data, setData] = useState(0)
    const [location, setLocation] = useState(``)

    // let zip = "29223"; 
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${location},US&appid=0f694359e25ccf590bb71af57cb9504d&units=imperial`


    const searchLocation = (event) => {
        if(event.key === "Enter"){
            axios.get(url).then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            setLocation(``)

        //     let icon; 
        //     switch(data.weather[0].main){
        //       case "Clouds": 
        //         icon ="clouds"
        //         break;
        //       case "Haze":
        //         icon = "haze2"
        //         break;
        //       case "Clear":
        //         icon = "brightness-high"
        //         break;
        //       case "Rain":
        //         icon = "cloud-drizzle"
        //         break;
        //       case "Snow":
        //         icon = "snow"
        //         break;
        //         default: 
        // }
    }
}
    

    return(
        <div className="container">
            <div className="card">
            <div className="search-bar input-group">
                <input 
                    type="text"
                    className="search-input form-control"
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder = "Enter A Zip Code"
                />
                {/* <button type="button" className="location-button btn btn-danger">
                    <i class="bi bi-geo-alt"></i>
                </button>
                <button type="button" className="search-button btn btn-light">
                    <i class="bi bi-search"></i>
                </button> */}
            </div>
            <div className="weather">
                    <h3 className="city">
                        {data.name? data.name: null}
                    </h3>
                    <div className="time">
                        {new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric", time:"long"})} {new Date().toLocaleTimeString([], {hour: "numeric", minute:"numeric"})}
                    </div>
                    <div className="temps">
                        <div className="low">
                            {data? Math.round(data.main.temp_min)+"°F" : null}
                        </div>
                        <div className="temp">
                            {data? Math.round(data.main.temp)+"°F" : null}

                        </div>
                        <div className="high">
                            {data? Math.round(data.main.temp_max)+"°F" : null}

                        </div>
                    </div>
                    {/* <div>
                        {data? <i id="icon" className=`bi-${icon}`></i> }
                        

                    </div> */}
                    <div className="description">
                        {data? data.weather[0].description : null}
                    </div>
                    <div className="feels-like">
                        {data? "Feels like: " + Math.round(data.main.feels_like)+"°F" : null}
                    </div>
                    <div className="humidity">
                      {data? "Humidity: " + data.main.humidity+"%" : null}
                    </div>
                    <div className="wind">
                       {data? "Wind Speed: " + data.wind.speed+"MPH" : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;