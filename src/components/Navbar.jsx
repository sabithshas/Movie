import { AppBar, Grid, IconButton, Tab,Tabs, Toolbar, Typography } from '@mui/material'
import React from 'react'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import './Navbar.css'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));


  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '30%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '2ch',
        },
      },
    },
  }));

function Navbar() {
  return (
    <>
    <div className='mainbar'>
     
    <AppBar position="static" style={{backgroundColor:'black'}}>
  <Toolbar variant="dense">
    <Grid style={{placeItems:'center'}} container>
    <Grid item xs={2}>
    {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}> */}
     {<img src='./assets/movielogo.png' className='movielogo' alt="Logo" />}
     </Grid>
     <Grid item xs={2}>
      <form>
     <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </form>
          </Grid>
          
    <Grid item xs={5} display='flex' >
    <Tabs>
    <Tab label="Home" sx={{color:'white'}} />
    <Tab label="Movie" sx={{color:'white'}} />
    <Tab label="Theaters" sx={{color:'white'}} />
    </Tabs>
    </Grid>
    
    <Grid item xs={3}>  
    
    <Tabs >
    <HowToRegIcon sx={{mt:1}} />
        <Tab label='Log-in/Sign-up' sx={{color:'white'}}  ></Tab>
    </Tabs>
    </Grid>
    </Grid>
  </Toolbar>
</AppBar>
</div>
    </>
  )
}

export default Navbar