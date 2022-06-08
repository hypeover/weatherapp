import React, { useEffect, useState } from 'react'
import Info from './Info'
import Loading from '../Loading'
import Forecast from './Forecast'
import { Page, Place, InfoDiv, DaysDiv, ForecastDiv } from '../styles/MainStyles'
import Days from './Days'

const Main = () => {

  const [ currentData, setCurrentData ] = useState(null)
  const [ locationData, setLocationData ] = useState(null)
  const [ data, setData ] = useState(null)

  useEffect(() => {

    const localCity = localStorage.getItem("city")

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=f2ea1d7579c3407c801173338221905&q=${localCity}&days=4&aqi=yes&alerts=yes`)
    .then(res => res.json())
    .then(data => {
      setCurrentData(data)
      setLocationData(data)
      setData(data.forecast.forecastday[0])
    })

  }, []);

  const getWeather = (day) => {
    setData(currentData.forecast.forecastday[day])
  }

  if (data == null) {
    return <Loading />
  }

  return (
    <Page>
      <Place />
      <InfoDiv>
        <Info locationData={locationData} />
      </InfoDiv>
      <DaysDiv>
        <Days getDay={getWeather} />
      </DaysDiv>
      <ForecastDiv>
        <Forecast data={data} current={currentData} />
      </ForecastDiv>
    </Page>
  )
}

export default Main