import React from 'react'
import styled from 'styled-components' 
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Location = styled.div`
  color: #100148;
  font-size: 2rem;
  font-weight: 800;
`

const DateInfo = styled.div`
  color: #9698B5;
  font-weight: 500;
`

const Button = styled.button`
  background-color: #450190;
  color: white;
  font-size: 1.3rem;
  box-sizing: border-box;
  padding: 20px 20px;
  cursor: pointer;
  margin: 0 40px 0 0;
  font-weight: 400;
  border: #450190 solid 3px;
  transition: 0.5s;

  :hover {
    background-color: white;
    color: black;
  }

`

const date = new Date()

const Info = ({locationData}) => {

  const navigate = useNavigate()

  const changeCity = () => {
    localStorage.removeItem("city")
    navigate('/Welcome')
  }

  return (
    <Wrapper>
      <InfoWrapper>
        <Location>{locationData.location.name}, {locationData.location.country}</Location>
        <DateInfo>{format(date, 'PPP')}</DateInfo>
      </InfoWrapper>
      <Button onClick={changeCity} >Change your city</Button>
    </Wrapper>
  )
}

export default Info