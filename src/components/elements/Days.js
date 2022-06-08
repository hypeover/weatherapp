import React, { useState } from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'

const Day = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #100148;
    background-color: transparent;
    z-index: 100;
    cursor: pointer;
    transition: 0.5s;
    
    &.active {
        transition: 0.5s;
        color: white;
    }

`

const First = styled.div`
    font-weight: 700;
    font-size: 1.4rem;
`

const Second = styled.div`
    font-weight: 500;
    font-size: 1rem;
`

const Card = styled.div`
    background-color: #450190;
    height: 200px;
    width: 20%;
    position: absolute;
    transform:  translateY(${(props) => props.cardHeight}%);
    transition: 0.6s;
    
`

const Days = ({getDay}) => {

    const [ cardHeight, setCardHeight ] = useState(-100)
    const [ firstClass, setFirstClass ] = useState(true)
    const [ secondClass, setSecondClass ] = useState(false)
    const [ thirdClass, setThirdClass ] = useState(false)

    let today = new Date()
    let tomorrow = new Date()
    let yesterday = new Date()

    tomorrow.setDate(today.getDate() + 1)
    yesterday.setDate(today.getDate() + 2)

  return (
    <>
        <Day className={firstClass ? 'active' : 'noactive'} onClick={() => {
            setCardHeight(-100)
            setFirstClass(true)
            setSecondClass(false)
            setThirdClass(false)
            getDay(0)
        }} >
            <First>{format(today, 'MMM').toUpperCase()} {format(today, 'dd')}</First>
            <Second>{format(today, 'iiii').toUpperCase()}</Second>
        </Day>
        <Day className={secondClass ? 'active' : 'noactive'} onClick={() => {
            setCardHeight(0)
            setFirstClass(false)
            setSecondClass(true)
            setThirdClass(false)
            getDay(1)
        }}>
            <First>{format(tomorrow, 'MMM').toUpperCase()} {format(tomorrow, 'dd')}</First>
            <Second>{format(tomorrow, 'iiii').toUpperCase()}</Second>
        </Day>
        <Day className={thirdClass ? 'active' : 'noactive'} onClick={() => {
            setCardHeight(100)
            setFirstClass(false)
            setSecondClass(false)
            setThirdClass(true)
            getDay(2)
        }}>
            <First>{format(yesterday, 'MMM').toUpperCase()} {format(yesterday, 'dd')}</First>
            <Second>{format(yesterday, 'iiii').toUpperCase()}</Second>
        </Day>
        <Card cardHeight={cardHeight} />
    </>
  )
}

export default Days