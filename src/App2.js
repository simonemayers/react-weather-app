import { React, useState, useEffect } from "react";
// import useFetch from "react-fetch-hook"

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';

// function useFetch(url){
//   const [data, setData] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)
  
//   useEffect(() => {
//   setLoading(true)

//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       setData(data)
//     })
//     .catch((err) => {
//       setError(err)
//     })
//     .finally(() => {
//       setLoading(false)
//     })
//   }, [url])

//   return {data, loading, error}
// }

function Icon({ icon }){
  let iconName = `bi bi-${icon}`
  return(
    <i id='icon' className={iconName}></i>
  )
}

function Wind({ speed }){
  return(
    <div className='wind'>Wind Speed: {speed} mph</div>
  )
}

function Humidity({ percentage }){
  return(
    <div className='humidity'>Humidity: {percentage}%</div>
  )
}

function FeelsLike({ temp, degree }){
  return(
    <div className='feels-like'>Feels Like: {temp}°{degree}</div>
  )
}

function Description({ name }){
  return(
    <div className='description'>{name}</div>
  )
}

function High({ temp, degree }){
  return(
    <div className='high'>{temp}°{degree}</div>

  )
}

function Temp({  temp, degree }){
  return(
    <div className='temp'>{temp}°{degree}</div>

  )
}

function Low({ temp, degree }){
  return(
    <div className='low'>{temp}°{degree}</div>
  )
}

function Temps({ degree, data }){
  return(
    <div className='temps'>
      <Low temp={Math.round(data.main.temp_min)}  degree={degree}/>
      <Temp temp={Math.round(data.main.temp)} degree={degree}/>
      <High temp={Math.round(data.main.temp_max)} degree={degree} />
    </div>
  )
}

function Time(){
  return(
    <div className='time'>{new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric", time:"long"})} {new Date().toLocaleTimeString([], {hour: "numeric", minute:"numeric"})} </div>
  )
}

function City({ name }){
  return(
    <h3 className='city'>Weather in {name}</h3>
  )
}

function Weather({ data }){
  let icon; 
  switch(data.weather[0].main){
    case "Clouds": 
      icon ="clouds"
      break;
    case "Haze":
      icon = "haze2"
      break;
    case "Clear":
      icon = "brightness-high"
      break;
    case "Rain":
      icon = "cloud-drizzle"
      break;
    case "Snow":
      icon = "snow"
      break;
      default: 
  }

  return(
    <div className='weather'>
      <City name={data.name} />
      <Time />
      <Temps data={data} degree="F" />
      <Icon icon={icon}/>
      <Description name = {data.weather[0].description}/>
      <FeelsLike temp={Math.round(data.main.feels_like)} degree="F"/>
      <Humidity percentage={data.main.humidity} />
      <Wind speed={data.wind.speed}/>

  </div>
  )
}

function Button({ name, classes }){
  return(
    <button type='button' className={classes}>{name}</button>
  )
}

function Input(){
  let [inputValue, setInputValue] = useState(null)

  return(
    <input type="text" className="search-input form-control" placeholder="Enter A Zip Code" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
  )
}

function InputGroup(){
  return(
    <div className='search-bar input-group'>
      <form>
        <Input />
        <Button name={<Icon icon ="geo-alt"/>} classes="location-button btn btn-danger"/>
        <Button name={<Icon icon="search" />} classes="search-button btn btn-light"/>
      </form>
    </div>
  )
}

function Card(){
  
  let searchButton = document.querySelector(".search-button")
  let city = document.querySelector(".city")
  let temp = document.querySelector(".temp")
  let searchBar = document.querySelector(".search-bar")
  let weatherDescription = document.querySelector(".description")
  let humidity = document.querySelector(".humidity")
  let wind = document.querySelector(".wind")
  let icon = document.querySelector("#icon")
  
  // let zip; 
  // searchButton.addEventListener("click", () => {
  //   zip = searchBar.querySelector("input").value
  // })
  
  
  // let data = null; 
  let zip = "29223"
  let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},US&appid=0f694359e25ccf590bb71af57cb9504d&units=imperial`
  // console.log(url)
  // const { isLoading, data, error } = useFetch(url);
  // const { data, loading, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?zip=29223,US&appid=0f694359e25ccf590bb71af57cb9504d&units=imperial`);
  // console.log(isLoading)
  // console.log(data)
  // console.log(error)
  // console.log(isLoading)

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  useEffect(() => {
  setLoading(true)

    fetch(url)
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
    .catch((err) => {
      setError(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [url])
  


    // let zip = "29223"
    // let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},US&appid=0f694359e25ccf590bb71af57cb9504d&units=imperial`

// function useFetch(url){
//   const [data, setData] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)
  
//   useEffect(() => {
//   setLoading(true)

//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       setData(data)
//     })
//     .catch((err) => {
//       setError(err)
//     })
//     .finally(() => {
//       setLoading(false)
//     })
//   }, [url])

//   return {data, loading, error}
// }


  return(
    <div id='card' className='card'>
      <InputGroup data={data} />
      <Weather data={data}/>
    </div>
  )
}

function Container(){


  return(
    <div className='container'><Card /></div>
  )
}

function App() {
  return(
    <>
    <Container />
    </>

  )
}



// fetch(`https://api.openweathermap.org/data/2.5/weather?zip=29223,US&appid=0f694359e25ccf590bb71af57cb9504d&units=imperial`)
// .then(res => res.json())
// .then(data => {
//   console.log(data.name)
// })
export default App;










