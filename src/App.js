import './App.css';
import React, { Component } from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <LoadingBar color='#f11946' progress={progress} />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key='home' pageSize={9} country='in' category='general' />} />
          <Route exact path='/business' element={<News setProgress={setProgress} key='business' pageSize={7} country='in' category='business' />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={9} country='in' category='sports' />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={7} country='in' category='entertainment' />} />
          <Route exact path='/general' element={<News setProgress={setProgress} key='general' pageSize={7} country='in' category='general' />} />
          <Route exact path='/health' element={<News setProgress={setProgress} pageSize={7} key='health' country='in' category='health' />} />
          <Route exact path='/science' element={<News setProgress={setProgress} pageSize={7} key='science' country='in' category='science' />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} pageSize={7} key='technology' country='in' category='technology' />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App