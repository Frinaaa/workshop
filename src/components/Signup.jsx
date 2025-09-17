import { TextField,Button } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div style={{
          backgroundColor: '#f0f0f0'
      }} >
          <br/>
          <h2>Register</h2>
          <TextField label="Username" variant="standard" type="text"></TextField> <br /><br />
          <TextField label="EmailId" variant="standard"></TextField><br /><br />  
          <TextField label="Password" variant="standard" type="password"></TextField><br /><br />   
          <Button sx={{ background: '#BA9CA9' }} variant='contained' >SignUp</Button>

      </div>
      
  )
}

export default Signup