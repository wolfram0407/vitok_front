import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppLayout from '../components/Layout';
import Home from '../pages/common/Home';
import About from '../pages/common/About';
import Contact from '../pages/common/Contact';

const AppRouter = () => (
  <Router>
    <AppLayout>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </AppLayout>
  </Router>
);

export default AppRouter;
