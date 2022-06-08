import React, { useState } from 'react'
import { ReactComponent as CloudIcon } from '../assets/cloud.svg'
import { ReactComponent as WindIcon } from '../assets/wind.svg'
import { ReactComponent as DropIcon } from '../assets/drop.svg'
import { TempWrapper, TempDesc, TempInfo, CondWrapper, Precipitation, Wind, Humidition, Sliderr, UpSection, MidSection, BotSection, Icon, AstroWrapper, Sunrise, Sunset } from '../styles/ForecastStyles'
import { marks } from '../marks'
import { ReactComponent as SunsetIcon } from '../assets/sunset.svg'
import { ReactComponent as SunriseIcon } from '../assets/sunrise.svg'


const Forecast = ({data, current}) => {

  const [ dayPart, setDayPart ] = useState(0)
  const [ display, setDisplay ] = useState(false)

  const currentFilteredData = [
    {
      temperature: Math.round(current.current.temp_c),
      last_updated: current.current.last_updated.slice(11),
      condition: current.current.condition.text,
      precipitation: current.current.cloud,
      wind: current.current.wind_kph,
      humidity: current.current.humidity,
      icon: current.current.condition.code,
      sunrise: current.forecast.forecastday[0].astro.sunrise,
      sunset: current.forecast.forecastday[0].astro.sunset,
    }
  ]

  const filteredData = [
    {
        temperature: Math.round(data.hour[8].temp_c),
        last_updated: '8.00',
        condition: data.hour[8].condition.text,
        precipitation: data.hour[8].cloud,
        wind: data.hour[8].wind_kph,
        humidity: data.hour[8].humidity,
        icon: data.hour[8].condition.code,
        sunrise: data.astro.sunrise,
        sunset: data.astro.sunset,
      },
      {
        temperature: Math.round(data.hour[11].temp_c),
        last_updated: '11.00',
        condition: data.hour[11].condition.text,
        precipitation: data.hour[11].cloud,
        wind: data.hour[11].wind_kph,
        humidity: data.hour[11].humidity,
        icon: data.hour[11].condition.code,
        sunrise: data.astro.sunrise,
        sunset: data.astro.sunset,
      },
      {
        temperature: Math.round(data.hour[14].temp_c),
        last_updated: '14.00',
        condition: data.hour[14].condition.text,
        precipitation: data.hour[14].cloud,
        wind: data.hour[14].wind_kph,
        humidity: data.hour[14].humidity,
        icon: data.hour[14].condition.code,
        sunrise: data.astro.sunrise,
        sunset: data.astro.sunset,
      },
      {
        temperature: Math.round(data.hour[17].temp_c),
        last_updated: '17.00',
        condition: data.hour[17].condition.text,
        precipitation: data.hour[17].cloud,
        wind: data.hour[17].wind_kph,
        humidity: data.hour[17].humidity,
        icon: data.hour[17].condition.code,
        sunrise: data.astro.sunrise,
        sunset: data.astro.sunset,
      },
      {
        temperature: Math.round(data.hour[20].temp_c),
        last_updated: '20.00',
        condition: data.hour[20].condition.text,
        precipitation: data.hour[20].cloud,
        wind: data.hour[20].wind_kph,
        humidity: data.hour[20].humidity,
        icon: data.hour[20].condition.code,
        sunrise: data.astro.sunrise,
        sunset: data.astro.sunset,
      },
      {
        temperature: Math.round(data.hour[23].temp_c),
        last_updated: '23.00',
        condition: data.hour[23].condition.text,
        precipitation: data.hour[23].cloud,
        wind: data.hour[23].wind_kph,
        humidity: data.hour[23].humidity,
        icon: data.hour[23].condition.code,
        sunrise: data.astro.sunrise,
        sunset: data.astro.sunset,
      }
  ]

  const onDragFunction = (_, v) => {

    setDisplay(true)
    
    if (v === 10) setDayPart(0)  
    if (v === 25) setDayPart(1)  
    if (v === 40) setDayPart(2)  
    if (v === 55) setDayPart(3)  
    if (v === 70) setDayPart(4)  
    if (v === 85) setDayPart(5)  

  }

  if(display === false) {
    return (
      <>
      <UpSection>
        <TempWrapper>
          <TempInfo>{currentFilteredData[dayPart].temperature}</TempInfo>
          <TempDesc>{currentFilteredData[dayPart].last_updated}, {currentFilteredData[dayPart].condition}</TempDesc>
        </TempWrapper>
        <Icon alt='Icon' src={require(`../assets/icons/day/${currentFilteredData[dayPart].icon}.png`)} />
      </UpSection>
      <MidSection>
        <CondWrapper>
          <Precipitation> <CloudIcon style={{height: '30px', width: '30px', marginRight: '10px', transform: 'translateY(10px)'}} /> {currentFilteredData[dayPart].precipitation}% Precipitation</Precipitation>
          <Wind> <WindIcon style={{height: '30px', width: '30px', marginRight: '10px', transform: 'translateY(10px)'}} /> {currentFilteredData[dayPart].wind} km/h Wind</Wind>
          <Humidition> <DropIcon style={{height: '28px', width: '28px', marginRight: '10px', transform: 'translateY(6px)'}} /> {currentFilteredData[dayPart].humidity}% Humidity</Humidition>
        </CondWrapper>
        <AstroWrapper>
          <Sunrise>
            Sunrise
            <SunriseIcon style={{height: '35px', width: '35px'}} />
            {currentFilteredData[dayPart].sunrise}
          </Sunrise>
          <Sunset>
            Sunset
            <SunsetIcon style={{height: '35px', width: '35px'}} />
            {currentFilteredData[dayPart].sunset}
          </Sunset>
        </AstroWrapper>
      </MidSection>
      <BotSection>
        <Sliderr onChangeCommitted={onDragFunction}  min={10} marks={marks} step={15} max={85} ></Sliderr>
      </BotSection>
    </>
    )
  } 
  
  if(display === true) {
    {
      return (
        <>
      <UpSection>
        <TempWrapper>
          <TempInfo>{filteredData[dayPart].temperature}</TempInfo>
          <TempDesc>{filteredData[dayPart].last_updated}, {filteredData[dayPart].condition}</TempDesc>
        </TempWrapper>
        <Icon alt='Icon' src={require(`../assets/icons/day/${filteredData[dayPart].icon}.png`)} />
      </UpSection>
      <MidSection>
        <CondWrapper>
          <Precipitation> <CloudIcon style={{height: '30px', width: '30px', marginRight: '10px', transform: 'translateY(10px)'}} /> {filteredData[dayPart].precipitation}% Precipitation</Precipitation>
          <Wind> <WindIcon style={{height: '30px', width: '30px', marginRight: '10px', transform: 'translateY(10px)'}} /> {filteredData[dayPart].wind} km/h Wind</Wind>
          <Humidition> <DropIcon style={{height: '28px', width: '28px', marginRight: '10px', transform: 'translateY(6px)'}} /> {filteredData[dayPart].humidity}% Humidity </Humidition>
        </CondWrapper>
        <AstroWrapper>
          <Sunrise>
            Sunrise
            <SunriseIcon style={{height: '35px', width: '35px'}} />
            {filteredData[dayPart].sunrise}
          </Sunrise>
          <Sunset>
            Sunset
            <SunsetIcon style={{height: '35px', width: '35px'}} />
            {filteredData[dayPart].sunset}
          </Sunset>
        </AstroWrapper>
      </MidSection>
      <BotSection>
        <Sliderr onChangeCommitted={onDragFunction}  min={10} marks={marks} step={15} max={85} ></Sliderr>
      </BotSection>
    </>
      )
    }
  }
}

export default Forecast


