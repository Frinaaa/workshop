import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'


const Naming = () => {
    var [n, set] = useState()
    useEffect(()=>{b()},[])

    const a=()=>set("Angular")
    const b = () => set("React")
    const c = () => set("Vue.js")


  return (
      <div>
          <h1>Welcome {n}</h1>
          <Button sx={{ background: '#BA9CA9' }} variant='contained' onClick={a}>Angular</Button>&nbsp;
          <Button sx={{ background: '#BA9CA9' }} variant='contained' onClick={b}>React</Button>&nbsp;
          <Button sx={{ background: '#BA9CA9' }} variant='contained' onClick={c}>Vue.js</Button>

    </div>
  )
}

export default Naming