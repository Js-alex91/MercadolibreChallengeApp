import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Items } from '../components/Items';
import { Home } from '../screens/Home';

export const AppRouter = () => {
  return (
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/items/:id' element={<Items />}/>
          
            

      </Routes>
      </BrowserRouter>
  )
};
