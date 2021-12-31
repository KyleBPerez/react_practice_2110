import React, { useState, useEffect } from 'react'
import './index.css'
import Country from './Country'
import Search from './Search'
//Make sure to import useState, useEffect

/*
How does my json look like? ༼ つ ◕_◕ ༽つ
^ In other words what is the shape of my JSON? Or what properties are contained within my json?

We will specifically use the name.official, maps.googleMaps, and flags.png properties
so it may look something like this within your code country.flags.png

You can specifically go to the given link on line 28 in your browser to see the whole entire JSON that we will fetch
However, it'll look a little funky so here's a chrome extension to make it easier for you to read
Chrome Extension:
https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US
*/

const App = () => {
  //Create a state variable to contain all of the countries
  const [countries, setCountries] = useState([])
  const [originalCountries, setOriginalCountries] = useState([])
  /*
  This will be our fetching function for the different countries
  usually we'll see this within a different file such as ./api/index.js
  but for simplicity's sake we'll create it here
  use this url for your fetch function => https://restcountries.com/v3.1/all
  */
  const fetchCountries = async () => {
    await fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data))
  }

  const fetchOgCountries = async () => {
    await fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setOriginalCountries(data))
  }

  useEffect(() => {
    fetchCountries()
    fetchOgCountries()
  }, [])

  return (
    <div className='App'>
      <Search
        setCountries={setCountries}
        originalCountries={originalCountries}
      />
      <div className='flag-container'>
        {countries &&
          countries.map((country) => {
            return (
              <Country
                flag={country.flags.png}
                name={country.name.official}
                maps={country.maps.googleMaps}
                setCountries={setCountries}
                countries={countries}
                key={country.name.official}
              />
            )
          })}
      </div>
    </div>
  )
}

export default App
