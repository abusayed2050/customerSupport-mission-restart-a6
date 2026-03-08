import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import TaskStatus from './components/TaskStatus';
import TicketCards from './components/TicketCards';
import './App.css'

function App() {
  
  return (
    <>
      <div>
       <h1><Navbar /></h1>
      </div>
      <div>
        <h1><Banner /></h1>
      </div>
      <div>
        <h1><TicketCards /></h1>
      </div>
      <div>
        <h1><TaskStatus /></h1>
      </div>
      <div>
        <h1><Footer /></h1>
      </div>
     
    </>
  )
}

export default App
