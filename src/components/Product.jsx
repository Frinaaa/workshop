import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';

const Product = () => {
    var [a, seta] = useState([])
        
    axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            console.log(response.data)
            seta(response.data)
        })
  return (
      <div>
          <Grid container spacing={2}> 
          {a.map((value) => {
              return (
                
          <Card sx={{ maxWidth: 345 }}>
             

                      <CardMedia
                          sx={{ height: 140 }}
                          image={value.image}
                          title={value.category}
                         
                      />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      {value.title}
                  </Typography>
                          <Typography variant="body2" sx={{ color: 'black' }}>
                       {value.description}
                  </Typography>
              </CardContent>
              <CardActions>
                          <Button sx={{ background: '#B46A89' }} variant='contained' size="small">Add to cart</Button>
                          <Button sx={{ background: '#B46A89' }} variant='contained' size="small">{value.price} Buy</Button>
              </CardActions>
                      </Card>
                     
          )
          })}
          </Grid> 
    </div>
  )
}

export default Product