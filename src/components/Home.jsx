import React from 'react'
import Navbar from './pages/Nabar/Navbar';
import Header from './pages/Header/Header';
import Deliveryprocess from './pages/Deliveryprocess/Deliveryprocess';
import Footer from './pages/Footer/Footer';

const Home = () => {
  return (
    <>
        <Navbar />
        <Header />
        <Deliveryprocess />


        <div className='mt-96'>
        </div>
        <Footer/>
    </>
  )
}

export default Home