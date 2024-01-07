import './App.css';
import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import AllHuts from './AllHuts';
import History from './History';
import HutForm from './HutForm';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';


function App() {
  return (
    <div className='App'>
        <Header />
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  );
}

export default App;
