import styled from 'styled-components'
import { styled as styledMui } from '@mui/material/styles';
import { Slider } from '@mui/material'; 

export const TempInfo = styled.div`
  color: white;
  font-size: 6rem;
  
  ::after {
    content: '°C';
    color: #995aca;
  }

`

export const TempDesc = styled.div`
  font-size: 1.8rem;
`

export const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CondWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const Precipitation = styled.div`
  font-size: 1.3rem;
  margin: 10px 0 10px 0;
`

export const Wind = styled.div`
  font-size: 1.3rem;
  margin: 10px 0 10px 0;
`

export const Humidition = styled.div`
  font-size: 1.3rem;
  margin: 10px 0 10px 0;

`

export const Sliderr = styledMui(Slider)({
  color: '#4bc1e9',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    backgroundColor: '#995aca',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#4bc1e9',
    border: '0px solid #4bc1e9',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:hover': {
      boxShadow: '0px 0px 0px 17px rgba(255, 255, 255, 0.3)'
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#474ab2',
    height: 0,
    width: 0,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: '#474ab2',
    },
  },
  '& .MuiSlider-markLabel': {
    color: 'white',
    fontSize: '1.15rem',
    marginTop: '20px',
    fontFamily: 'quicksand',
    '&[data-index="0"]': {
      transform: 'translateX(10%)',
    },
    '&[data-index="5"]': {
      transform: 'translateX(-115%)',
    }
  },
});

export const UpSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const MidSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const BotSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Icon = styled.img`
  position: absolute;
  right: 5%;
  margin: 40px 0 0 0;
`

export const AstroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`

export const Sunrise = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  font-weight: 500;
  font-size: 1.2rem;
`

export const Sunset = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  font-weight: 500;
  font-size: 1.2rem;
`