import React, { useEffect } from 'react'
import Welcome from './components/elements/Welcome'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Main from './components/elements/Main'
import { GlobalStyle } from './components/styles/GlobalStyle'

const App = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const localCity = localStorage.getItem("city")

    if (localCity === null) {
      navigate('/Welcome')
    } 
    
  }, [])  


  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/Welcome' element={<Welcome />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </>

  )
}

export default App

// fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=d33140bae75ffbe6dc43a526d93c1e7e')
// .then(res => res.json())
// .then(res => console.log(res))

