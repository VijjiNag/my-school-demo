import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About';
import Programs from './Components/Programs';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/programs' element={<Programs />} />
        </Routes>
      </Fragment>
    </Router>
  )
}

export default App;
