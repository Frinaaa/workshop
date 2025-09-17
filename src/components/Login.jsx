import { Button } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <div style={{
            backgroundColor: '#f0f0f0',
            justifyContent: 'center', // Horizontally center the content
            alignItems: 'center', // Vertically center the content
            marginBottom: '10px',

        }}>
        <br/>
         <h2>Login</h2> 
      username: <input type="text" name="" id=""/>
     <br/><br/>
          password: <input type="text" name="" id="" />
        <br/><br />
           <Button sx={{ background: '#BA9CA9' }} variant='contained'> Login</Button>
            <br/><br/>
            <a href="https://t4.ftcdn.net/jpg/01/65/01/77/360_F_165017799_byNziC85xNVTe02EYwwnl9LaAgctQPFr.jpg">forgot password?</a>
            <br/><br/>
      </div>
  )
}

export default Login