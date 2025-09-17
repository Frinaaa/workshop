import { Button, TextField } from '@mui/material'
import {React,useState} from 'react'

const Counter = () => {
     const [a,set]=useState(0)
    const increment = () => set(a + 1)
    const decrement = () => set(a - 1)

  return (
      <div>
          <h1>Counter :{a}</h1>
         
          <Button sx={{ background: '#BA9CA9' }} variant='contained' onClick={increment}>+</Button>&nbsp;
          <Button sx={{ background: '#BA9CA9' }} variant='contained' onClick={decrement}>-</Button>
    </div>
  )
}

export default Counter