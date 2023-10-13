import { createContext, useContext, useState } from 'react'
import './App.css'
import { Button, Card, Typography } from '@mui/material';

// context will reduce prop drilling but does not stop rerendering

const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0)

  return (

    <CountContext.Provider value={{ count: count, setCount: setCount }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ padding: 20, width: 500 }}>
          <Typography variant="h5"> welcome to counter </Typography>
          <br />
          <Buts />
          <CountComponent />
        </Card>
      </div>
    </CountContext.Provider>

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
  const { count, setCount } = useContext(CountContext);
  return <div>
    <Button variant="contained" onClick={() => {
      setCount(count + 1)
    }}> Increase count </Button>
  </div>

}

function Decrease() {
  const { count, setCount } = useContext(CountContext);
  return <div>
    <Button variant={"contained"} onClick={() => {
      setCount(count - 1)
    }}> Decrease count </Button>
  </div>

}

function CountComponent() {
  const { count } = useContext(CountContext);
  return <div>
    <Typography variant='h5' textAlign={"center"}> {count}</Typography>
  </div>

}

export default App