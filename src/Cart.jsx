import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import axios from 'axios';
import "./Cart.css"
export default function ActionAreaCard(props) {


  return (
    <Card sx={{ width:200,height:250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
         sx={{
          height: 200,
        
         }}
          image={props.movie['image'] != 'NaN'? props.movie['image']:'https://cdn.noitatnemucod.net/thumbnail/300x400/100/ccbc20fd8ddf9b2000bf23894a787436.jpg'}

          alt={props.movie['title']}
        />
        <CardContent>
          <Typography gutterBottom  component="div" sx={{margin:"0",padding:"0",height:50,backgroundColor:"white",color:"black",textAlign:"center"}}>
          {props.movie['title']}
          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
  );
}