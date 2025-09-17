import { Paper, TableCell, TableContainer, TableHead, TableRow, Table, TableBody } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Tables = () => {
    var [user, setuser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=> {
            console.log(response.data)
            setuser(response.data)
     })
  return (
      <div>
          <TableContainer>
              <Table border="4">
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Age</TableCell>
                          <TableCell>City</TableCell>
                          <TableCell>email</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((value) => {
                          return (
                              <TableRow>
                                  <TableCell>{value.name}</TableCell>
                                      <TableCell>{value.username}</TableCell>
                                      <TableCell>{value.address.city} </TableCell>
                                      <TableCell>{value.email}</TableCell>
                              </TableRow>)
                      })}
                  </TableBody>
                  
              </Table>
          </TableContainer>
    </div>
  )
}

export default Tables