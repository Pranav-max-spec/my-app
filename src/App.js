// import { useState } from 'react';
import './App.css';
import About from './Componenets/About';
import Alert from './Componenets/alerts';
import Navbar from './Componenets/Navbar';
import TextForms from './Componenets/TextForms';
// import Rating from './Components/Rating';
// import prism.js from './Componenets/prism';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {

  
  return (
    <>
<Router>
<Navbar tittle='LearnHTML' />
<Alert />
<div className="container my-3">
<Switch>
          <Route exact path="/learn">
            <About tittle='LearnHTML - learn'/>
            {/* <prism /> */}
          </Route>
          <Route exact path="/home">
          <TextForms heading='Enter the text to analize'/>
          </Route>
          {/* <Rating /> */}
</Switch>
</div>
</Router>
    </>
  );
}

export default App;
