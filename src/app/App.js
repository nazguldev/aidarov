import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainContainers from './MainContainers';
import Terapii from '../containers/dental/Terapii'
import Vinery from '../containers/dental/dentalAppbar/Vinery'
import Brekety from '../containers/dental/dentalAppbar/Brekety'
import Otbali from '../containers/dental/dentalAppbar/Otbali'
import Iplant from '../containers/dental/dentalAppbar/Iplant'
import CollSenter from '../components/collSenter/CollSenter'
import './App.scss'
import Orp from '../containers/dental/dentalAppbar/Orp'
import Footer from './Footer';
import AboutXirurg from '../containers/xirurg/AboutXirurg';
import Adoctors from '../containers/xirurg/Adoctors';
import Price from '../containers/xirurg/Price';
import AboutTerapiya from '../containers/terapiya/AboutTerapiya';
import AdoctorsTerapiya from '../containers/terapiya/AdoctorsTerapiya';
import PriceTerapiya from '../containers/terapiya/PriceTerapiya';
import StuffContainer from './../containers/dental/dentalAppbar/StuffContainer'
import AboutClinic from './nav/AboutClinic';
import MainDental from '../containers/dental/MainDental'
import AboutLaboratory from '../containers/laboratory/AboutLaboratory';
import AboutGynecology from '../containers/gynecology/AboutGynecology';
import AboutUrologi from '../containers/urology/AboutUrologi';

function App(props) {
  const [show, setShow] = useState(false)
  return (
    <>
   
    <Routes>
        <Route path={'/'} element={<MainContainers setShow={setShow}/>}  />
        <Route path={'/AboutClinic'} element={<AboutClinic/>}/>
        <Route path={'/aboutDental'} element={<MainDental setShow={setShow}/>}/>
        <Route path={'Terapii'} element={<Terapii/>} />
        <Route path={"/Vinery"} element={<Vinery setShow={setShow}/>} />
        <Route path={'/Brekety'} element={<Brekety setShow={setShow} />} />
        <Route path={'/whiting'} element={<Otbali setShow={setShow}/>} />
        <Route path={'/Iplant'} element={<Iplant setShow={setShow}/>} />
        <Route path={'/AboutXirurg'} element={<AboutXirurg setShow={setShow}/>}/>
        <Route path={'/Adoctors'} element={<Adoctors setShow={setShow}/>}/>
        <Route path={'/Price'} element={<Price/>}/>
        <Route path={'/Orp'} element={<Orp/>}/>
        <Route path={'/AboutTerapiya'} element={<AboutTerapiya setShow={setShow}/>}/>
        <Route path={'/AdoctorsTerapiya'} element={<AdoctorsTerapiya setShow={setShow}/>}/>
        <Route path={'/PriceTerapiya'} element={<PriceTerapiya setShow={setShow}/>}/>
        <Route path={'/AboutLaboratory'} element={<AboutLaboratory setShow={setShow}/>}/>
        <Route path={'/AboutGynecology'} element={<AboutGynecology setShow={setShow}/>}/>
        <Route path={'/stuff'} element={<StuffContainer setShow={setShow}/>}/>
        <Route path={'/AboutUrologi'} element={<AboutUrologi setShow={setShow}/>}/>

      </Routes>
      
      <CollSenter show={show} setShow={setShow}/>
      <Footer/>
   
    </>
  );
}

export default App;