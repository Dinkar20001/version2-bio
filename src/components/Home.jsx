import React from 'react'
// import Navbar from './pages/Nabar/Navbar';
import Header from './pages/Header/Header';
import Deliveryprocess from './pages/Deliveryprocess/Deliveryprocess';
import Latestinformation from './pages/Latestinformation';
import Homeabout from './pages/HomeAbout/Homeabout';
import Indexproductlist from './pages/Indexproductlist/Indexproductlist';

const Home = () => {
  return (
    <>
        <Header />
        <Deliveryprocess />

          <Indexproductlist/>
        <div className='mt-96'>
        </div>


        <Homeabout />
        <Latestinformation />
    </>
  )
}

export default Home