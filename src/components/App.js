import './App.css';
import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import AllHuts from './AllHuts';
import History from './History';
import HutForm from './HutForm';


function App() {
  return (
    <div>
        <Header />
        <NavBar />
        <AllHuts />
        {/* <History /> */}
        {/* <HutForm /> */}
    </div>
  );
}

export default App;
