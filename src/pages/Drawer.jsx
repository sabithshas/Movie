import React from 'react'
import './Drawer.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Bookingpage from './Bookingpage';
import BookingMain from './BookingMain';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux'

function Drawer() {

  const {items} = useSelector((state) => state.datas)
  console.log(items);
  return (
    <>
        {/* <div className='sidebar'>
            <div className='sidebartitle'>
        <h2 className='nh'>Filter by</h2>
        <p className='pn'>clear</p>
        </div>
        <h5>Languages</h5>
      

        </div> */}
<div className='fullbars'>
<div>
  <Navbar/>
</div>
    <div className='fff'>
        <Bookingpage className='fff' />
        </div>
        <div className='Seconds'>
            <BookingMain/>
            
        </div>
        <div className='futer'>
           <Footer/>
        </div>
        </div>
    </>
  )
}

export default Drawer