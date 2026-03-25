import React, { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Bannar from './Component/Bannar/Bannar';
import Both from './Component/BothComponent/Both';
import Footer from './Component/Footer/Footer';
import Footer2 from './Component/Footer/Footer2';
import Logobanner from './Component/LogoBanner/Logobanner';
import { ToastContainer } from 'react-toastify';

const App = () => {

  const [coin, setCoin] = useState(5000)

  return (
    <div>
        <Navbar coin={coin}></Navbar>
        <div className='max-w-[90%] mx-auto'>
          <Bannar></Bannar>
          <Both coin={coin} setCoin={setCoin}></Both>
          <Logobanner></Logobanner>
        </div>
        <Footer></Footer>
        <Footer2></Footer2>
        <ToastContainer />
    </div>
  );
};

export default App;