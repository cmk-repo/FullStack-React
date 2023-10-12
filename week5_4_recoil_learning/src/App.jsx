import { useState } from 'react'
import './App.css'

import { Button, Card, Typography } from '@mui/material';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ padding: 20, width: 500 }}></Card>
      <Typography variant="h5"> welcome to counter </Typography>
      <br />
      <Buttons count={count} setCount={setCount} />
      <CountComponent count={count} />
    </div>

  )
}

function Buttons({ count, setCount }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Increase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
    </div>
  )
}

function Increase({ count, setCount }) {
  return <div>
    <Button variant={"countained"} onClick={() => {
      setCount(count + 1)

    }}> Increase count </Button>
  </div>

}

function Decrease({ count, setCount }) {
  return <div>
    <Button variant={"countained"} onClick={() => {
      setCount(count - 1)
    }}> Decrease count </Button>
  </div>

}

function CountComponent({ count }) {
  return <div>
    <Typography variant='h5' textAlign={"center"}>  {count}</Typography>
  </div>

}

export default App
