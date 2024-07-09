import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from '../components/layouts/Layout';
import Home from '../pages/common/Home';
import About from '../pages/common/About';
import Contact from '../pages/common/Contact';

const LoggedInRouter = () => (
  <Router>
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AppLayout>
  </Router>
);

export default LoggedInRouter;
