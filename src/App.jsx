import React, { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Bannar from './Component/Bannar/Bannar';
import Both from './Component/BothComponent/Both';

const App = () => {

  const [coin, setCoin] = useState(5000)

  return (
    <div>
        <Navbar coin={coin}></Navbar>
        <div className='max-w-[90%] mx-auto'>
          <Bannar></Bannar>
          <Both coin={coin} setCoin={setCoin}></Both>
      </div>
    </div>
  );
};

export default App;