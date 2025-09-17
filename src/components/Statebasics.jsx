import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
  
         
          var[a,seta]=useState("frina")
          const Acceptname=(w)=>{
              seta(w.target.value)

          }
    
    var [b, setb] = useState("frina")
    const Acceptplace = (n) => {
        console.log(n.target.value)
        setb(n.target.value)
    }
    var [c, setc] = useState()
    const Display = (n) => {
        setc(b)
    }

    return(
    <div>
            <h1>welcome {a} <br/> ICT ACADEMY {c}</h1>
            Name:&nbsp; <TextField variant='outlined' onChange={Acceptname} /><br /><br/>
            Place:&nbsp; <TextField variant='outlined' onChange={Acceptplace} /><br /><br/>
            <Button sx={{ background: '#BA9CA9' }} variant='contained' onClick={Display}>Submit</Button>
    </div>
  )
}

export default Statebasics