import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@mui/material/CircularProgress';

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Loading = () => {
  return (
    <Page>
      <CircularProgress />
    </Page>
  )
}

export default Loading