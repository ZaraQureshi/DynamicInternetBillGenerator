import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Bill from './Bill.tsx';
import Form from './Form.tsx';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Form/>
        <Bill/>
      </div>
      {/* <Routes>
        <Route path="/" element={<Bill/>}></Route>
        <Route path="/form" element={<Form/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
