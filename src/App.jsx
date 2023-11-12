import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
