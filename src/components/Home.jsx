import React from 'react'
// import Navbar from './pages/Nabar/Navbar';
import Header from './pages/Header/Header';
import Deliveryprocess from './pages/Deliveryprocess/Deliveryprocess';
import Latestinformation from './pages/Latestinformation';
import Homeabout from './pages/HomeAbout/Homeabout';

const Home = () => {
  return (
    <>
        <Header />
        <Deliveryprocess />


        <div className='mt-96'>
        </div>


        <Homeabout />
        <Latestinformation />
    </>
  )
}

export default Home