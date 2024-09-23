import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs'; // Corrected path
import Innovation from './components/pages/Innovation';
import Certification from './components/pages/Certification';
import OurProducts from './components/pages/OurProducts';
import SisterConcerns from './components/pages/SisterConcern';
import FutureOfSustainability from './components/pages/Sustainability';
import ContactUs from './components/pages/ContactUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={AboutUs} /> {/* Corrected Route */}
          <Route path='/innovation' component={Innovation} />
          <Route path='/certification' component={Certification} />
          <Route path='/products' component={OurProducts} />
          <Route path='/sister-concerns' component={SisterConcerns} />
          <Route path='/future-of-sustainability' component={FutureOfSustainability} />
          <Route path='/contact-us' component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
