import React from 'react';
import './App.css';
import NavBar from './Componenets/NavBar';
import TextParrallaxContentMain from './Componenets/TextParrallaxContentMain';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='main'>
      <NavBar />
      <TextParrallaxContentMain />
    </div>
  );
}

export default App;
