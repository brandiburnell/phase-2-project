import './App.css';
import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import AllHuts from './AllHuts';
import History from './History';
import HutForm from './HutForm';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div>
        <Header />
        <NavBar />
        {/* <AllHuts /> */}
        {/* <History /> */}
        {/* <HutForm /> */}
        <Outlet />
    </div>
  );
}

export default App;
