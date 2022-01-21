import React from 'react';
import { CajaDeBusqueda } from '../components/CajaDeBusqueda';
import { ResultadosBusqueda } from '../components/ResultadosBusqueda';

export const Home = () => {
  return <div className='home'>
      <CajaDeBusqueda />
      <ResultadosBusqueda />
  </div>;
};
