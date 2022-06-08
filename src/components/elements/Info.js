import React from 'react'
import styled from 'styled-components' 
import { format } from 'date-fns'

const Location = styled.div`
  color: #100148;
  font-size: 2rem;
  font-weight: 800;
`

const DateInfo = styled.div`
  color: #9698B5;
  font-weight: 500;
`

const date = new Date()

const Info = ({locationData}) => {
  return (
    <>
      <Location>{locationData.location.name}, {locationData.location.country}</Location>
      <DateInfo>{format(date, 'PPP')}</DateInfo>
    </>
  )
}

export default Info