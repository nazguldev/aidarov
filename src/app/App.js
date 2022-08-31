import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainContainers from './MainContainers';
import AboutClinicContainer from '../containers/dental/AboutClinicContainer'
import Chec_Up from '../containers/dental/dentalAppbar/Chec_Up'
import Vinery from '../containers/dental/dentalAppbar/Vinery'
import Brekety from '../containers/dental/dentalAppbar/Brekety'
import Otbali from '../containers/dental/dentalAppbar/Otbali'
import Iplant from '../containers/dental/dentalAppbar/Iplant'
import CollSenter from '../components/collSenter/CollSenter'
import './App.scss'
import Footer from './Footer';
import AboutXirurg from '../containers/xirurg/AboutXirurg';
import Adoctors from '../containers/xirurg/Adoctors';
import Price from '../containers/xirurg/Price';
import AboutTerapiya from '../containers/terapiya/AboutTerapiya';
import AdoctorsTerapiya from '../containers/terapiya/AdoctorsTerapiya';
import PriceTerapiya from '../containers/terapiya/PriceTerapiya';

function App(props) {
  const [show, setShow] = useState(false)
  return (
    <>
   
    <Routes>
        <Route path={'/'} element={<MainContainers />}  />
        <Route path={'/aboutDental'} element={<AboutClinicContainer setShow={setShow}/>}/>
        <Route path={'/chec_up'} element={<Chec_Up setShow={setShow} />} />
        <Route path={"/Vinery"} element={<Vinery setShow={setShow}/>} />
        <Route path={'/Brekety'} element={<Brekety setShow={setShow} />} />
        <Route path={'/whiting'} element={<Otbali setShow={setShow}/>} />
        <Route path={'/Iplant'} element={<Iplant setShow={setShow}/>} />
        <Route path={'/AboutXirurg'} element={<AboutXirurg/>}/>
        <Route path={'/Adoctors'} element={<Adoctors/>}/>
        <Route path={'/Price'} element={<Price/>}/>
        <Route path={'/AboutTerapiya'} element={<AboutTerapiya/>}/>
        <Route path={'/AdoctorsTerapiya'} element={<AdoctorsTerapiya/>}/>
        <Route path={'/PriceTerapiya'} element={<PriceTerapiya/>}/>

      </Routes>
      
      <CollSenter show={show} setShow={setShow}/>
      <Footer/>
   
    </>
  );
}

export default App;