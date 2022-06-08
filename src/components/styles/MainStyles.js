import styled from 'styled-components'

export const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 0.25fr 1fr;
  grid-template-rows: 0.22fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

export const Place = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`

export const InfoDiv = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const DaysDiv = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`

export const ForecastDiv = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  background-color: #450190;
  color: white;
  border-top-left-radius: 35px;
  box-sizing: border-box;
  padding: 4% 7% 80px 7%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`