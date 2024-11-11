import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import BookingDetail from './components/BookingDetail/BookingDetail';
import OrderConform from './components/OrderConform/OrderConform';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/bookingdetail" element={<BookingDetail/>}/>
        <Route path="/orderconform" element={<OrderConform/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
