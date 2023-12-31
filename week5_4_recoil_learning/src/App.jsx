import { createContext, useContext, useState } from 'react'
import './App.css'
import { Button, Card, Typography } from '@mui/material';
import { useRecoilValue, useSetRecoilState, RecoilRoot, atom } from 'recoil'

function App() {
  return (

    <RecoilRoot>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ padding: 20, width: 500 }}>
          <Typography variant="h5"> welcome to counter </Typography>
          <br />
          <Buts />
          <CountComponent />
        </Card>
      </div>
    </RecoilRoot>

  )
}

function Buts() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Increase />
      <Decrease />
    </div>
  )
}

function Increase() {
  const setCount = useSetRecoilState(countState)
  return <div>
    <Button variant="contained" onClick={() => {
      setCount(existingCount => existingCount + 1)
    }}> Increase count </Button>
  </div>

}

function Decrease() {
  const setCount = useSetRecoilState(countState)
  return <div>
    <Button variant={"contained"} onClick={() => {
      setCount(existingCount => existingCount - 1)
    }}> Decrease count </Button>
  </div>

}

function CountComponent() {
  const count = useRecoilValue(countState)
  return <div>
    <Typography variant='h5' textAlign={"center"}> {count}</Typography>
  </div>

}

export default App


const countState = atom({
  key: 'countState',
  default: 0, // default value arguement to use state similar
})
