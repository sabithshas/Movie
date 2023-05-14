import { Card, CardActionArea, CardContent, CardMedia, Tab, Typography } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
function Reduxbook() {
    const {items} = useSelector((state) => state.datas)
    console.log(items);
  return (
    <>
    

        <div className='muicards'>
        {items.map((i)=>{
          return (
          <Card className='cardpart'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={i.image}
                alt="green iguana"
              />
              <CardContent className='card2'>
                <Typography gutterBottom variant="p" component="div">
                {i.moviename}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                {i.language}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                {i.genre}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                {i.theater}
                </Typography>
               
              </CardContent>
            </CardActionArea>
          </Card>
          )
          })}
        </div>

    </>
  )
}

export default Reduxbook