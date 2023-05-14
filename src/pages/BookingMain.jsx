import { Card, CardActionArea, CardContent, CardMedia, Tab, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Tabs } from 'react-bootstrap'
import './Bookingmain.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function BookingMain() {
  const[languagee,setlanguage]=useState([])
  const[alldata,setall]=useState([])
  const[data,setdata]=useState([
    {
      id:"1",
      moviename:"Kamuki",
      language:"Malayalam",
      genre:"comedy",
      image:"./assets/Kamuki.jpg",
      theater:"Crown"

    },
    {
      id:"2",
      moviename:"Kurup",
      language:"Tamil",
      genre:"Thriller",
      image:"./assets/Kurup.jpg",
      theater:"Apsara"

    },
    {
      id:"3",
      moviename:"Spiderman",
      language:"English",
      genre:"Action",
      image:"./assets/spiderman.jpg",
      theater:"Emax"

    },
    {
      id:"4",
      moviename:"Pathaan",
      language:"Hindi",
      genre:"Action",
      image:"./assets/pathan.webp",
      theater:"Emax"

    },
    {
      id:"5",
      moviename:"Pathaan",
      language:"Tamil",
      genre:"Action",
      image:"./assets/spiderman.jpg",
      theater:"Emax"

    }
  ]
  
)
console.log(data);

const clear=()=>{  

   window.location.reload()

}
console.log(data);
const lang = (datas)=>{
  const fldata = data.filter((movie)=>{
return movie.language==datas
  })
  console.log(fldata);
  setlanguage(fldata)
  
}




return (
    <>

      <div className='complete'>
        <div className='title'>
          <Typography variant='h4' className='titletn'>MOVIES</Typography>
        </div>
        {languagee[0]?
        <div className='muicards'>
        {languagee.map((i)=>{
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
:
        <div className='muicards'>
        {data.map((i)=>{
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
}
      </div>

      <div className='sidebars'>
        <div className='sidebartitle'>
          <h4 className='filter'>Filter by</h4>
          <a className='clear' onClick={clear} >clear</a>
        </div>
        <div className='checkboxname mt-3'>
          <h5 className='ms-3'>Languages</h5>
          <FormGroup className='checkboxes'>
            <FormControlLabel control={<Checkbox />} label="English" onClick={()=>{lang("English")}} className='checkboxlabel' />
            <FormControlLabel control={<Checkbox />} label="Malayalam" onClick={()=>{lang("Malayalam")}} className='checkboxlabel' />
            <FormControlLabel control={<Checkbox />} label="Tamil" onClick={()=>{lang("Tamil")}} className='checkboxlabel' />
            <FormControlLabel control={<Checkbox />} label="Hindi" onClick={()=>{lang("Hindi")}} className='checkboxlabel' />
          </FormGroup>
        </div>
        <div className='checkboxname mt-4'>
          <h5 className='ms-3'>Genres</h5>
          <FormGroup className='checkboxes'>
            <FormControlLabel control={<Checkbox />} label="Disabled" className='checkboxlabel' />
            <FormControlLabel control={<Checkbox />} label="Disabled" className='checkboxlabel' />
            <FormControlLabel control={<Checkbox />} label="Disabled" className='checkboxlabel' />
            <FormControlLabel control={<Checkbox />} label="Disabled" className='checkboxlabel' />
            <FormControlLabel control={<Checkbox />} label="Disabled" className='checkboxlabel' />
            <FormControlLabel control={<Checkbox />} label="Disabled" className='checkboxlabel' />
            <FormControlLabel control={<Checkbox />} label="Disabled" className='checkboxlabel' />
          </FormGroup>
        </div>
      </div>
    </>
    
  )
  
}

export default BookingMain