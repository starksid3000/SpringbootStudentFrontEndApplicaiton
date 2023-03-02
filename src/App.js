import React, { Component }  from 'react';
import './App.css';
import Appbar from './Component/Appbar';
import Student from './Component/Student';
function App() {
  return (
    <div className='App'>
      <Appbar />
      <Student />
    </div>
  );
}

export default App;
