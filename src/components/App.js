import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import AllHuts from './AllHuts';
import History from './History';
import HutForm from './HutForm';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';


function App() {
  const [huts, setHuts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/huts")
        .then(r => r.json())
        .then(huts => setHuts(huts));
  }, huts);

  console.log(huts);

  return (
    <div className='App'>
        <Header />
        <NavBar />
        <Outlet context={[huts, setHuts]} />
        <Footer />
    </div>
  );
}

export default App;
