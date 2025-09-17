import { AppBar, Button, IconButton, Stack, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      
      <AppBar sx={{ background:'#B46A89'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <h3 style={{marginRight:'55%'}}>Snap</h3>&nbsp;
          <Link to="/login">
            <Button sx={{ background: '#BA9CA9' }} variant='contained'>Login</Button> </Link>&nbsp;
          <Link to="/">
            <Button sx={{ background: '#BA9CA9' }} variant='contained'>Signup</Button></Link>&nbsp;
          <Link to="/table">
            <Button sx={{ background: '#BA9CA9' }} variant='contained'>Table</Button></Link>&nbsp;
          <Link to="/Statebasics">
            <Button sx={{ background: '#BA9CA9' }} variant='contained'>State</Button></Link>&nbsp;
          <Link to="/Counter">
            <Button sx={{ background: '#BA9CA9' }} variant='contained'>Counter</Button></Link>&nbsp;
          <Link to="/Name">
            <Button sx={{ background: '#BA9CA9' }} variant='contained'>Name</Button></Link>&nbsp;
          <Link to="/product">
            <Button sx={{ background: '#BA9CA9' }} variant='contained'>Product</Button></Link>&nbsp;
        </Toolbar>
      </AppBar>
      <br /><br /><br /><br />
    
    </div>
  )
}

export default Navbar