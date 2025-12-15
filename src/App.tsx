import React, { useRef } from 'react';
import './global.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Bill from '@/Bill';
import Form from '@/Form';
import Header from './Header';
import Main from './Main';
import { Card } from './components/ui/card';
import BillContainer from './BillContainer';
import { AnimatePresence } from 'framer-motion';

function App() {
  const billRef = useRef<HTMLDivElement>(null)

  const scrollToBill = () => {
    billRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  return (
    <div className="App ">
      <Header onCreate={scrollToBill}/>
       <Main onCreate={scrollToBill} />

      {/* Spacer so it feels intentional */}
      <div className="h-14" />

      <div ref={billRef}>
        <BillContainer />
      </div>
      

      {/* <Routes>
        <Route path="/" element={<Bill/>}></Route>
        <Route path="/form" element={<Form/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
