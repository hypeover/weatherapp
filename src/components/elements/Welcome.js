import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Page = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const Header = styled.div`
    color: #100148;
    font-size: 4rem;
    font-weight: 600;
    margin: 0 0 40px 0;
`

const Input = styled.input`
    font-size: 2rem;
    font-weight: 500;
    outline: none;
    border: none;
    border-bottom: solid 2px #100148;
    box-sizing: border-box;
    padding: 20px;
`


const Welcome = () => {
    
    const [ city, setCity ] = useState(null)
    const navigate = useNavigate()

    const setMainCity = () => {
        localStorage.setItem("city",city)
        navigate('/')
    }

  return (
    <Page>
        <Header>Set your main city</Header>
        <Input placeholder='City.. ' onChange={(e) => setCity(e.target.value)} onKeyPress={(e) => {if(e.code === 'Enter'){
            if(city === '') {

            } else {
                setMainCity()
            }
        }}} />
    </Page>
  )
}

export default Welcome