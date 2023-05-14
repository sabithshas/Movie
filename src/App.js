// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Bookingpage from './pages/Bookingpage';
import Drawer from './pages/Drawer';
import BookingMain from './pages/BookingMain';
import Footer from './components/Footer';
import Reduxbook from './pages/Reduxbook';


function App() {
  return (
    <>
      <Routes>
        <Route path='navbar'  element={<Navbar/>}></Route>
        <Route path='bookingpage'  element={<Bookingpage/>}></Route>
        <Route path='/'  element={<Drawer/>}></Route>
        <Route path='bookingmain'  element={<BookingMain/>}></Route>
        <Route path='footer' element={<Footer/>}></Route>
        <Route path='demo' element={<Reduxbook/>}></Route>
        
      </Routes>
    </>
  );
}

export default App;
