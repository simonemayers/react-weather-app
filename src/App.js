import './App.css';

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

function Temps({ degree }){
  return(
    <div className='temps'>
      <Low temp={12}  degree={degree}/>
      <Temp temp={73} degree={degree}/>
      <High temp={90} degree={degree} />
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

function Weather(){
  return(
    <div className='weather'>
      <City name="Charlotte" />
      <Time />
      <Temps degree="F" />
      <Description name = "Cloudy"/>
      <FeelsLike temp={79} degree="F"/>
      <Humidity percentage={60} />
      <Wind speed={6.2}/>

  </div>
  )
}

function Button({ name, classes }){
  return(
    <button type='button' className={classes}>{name}</button>
  )
}

function Input(){
  return(
    <input type="text" className="search-input form-control" placeholder="Enter A Zip Code"></input>
  )
}

function InputGroup(){
  return(
    <div className='search-bar input-group'>
      <Input />
      <Button name='Location' classes="location-button btn btn-danger"/>
      <Button name='Search' classes="search-button btn btn-light"/>
    </div>
  )
}

function Card(){
  return(
    <div className='card'>
      <InputGroup />
      <Weather />
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
    <Container />

  )
}

export default App;
