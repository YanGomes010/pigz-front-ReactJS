import React from 'react';
import './App.css';

import Form from './Components/MainComps/Form';
import Marketing from './Components/MainComps/Marketing';
import NavBar from './Components/MainComps/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <div className='sectionOne'>
     <Marketing/>
     <Form/>
     </div>
    </div>
  );
}

export default App;
