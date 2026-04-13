import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const RootLayout = () => {
  return (
    <div>
        <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="grow">
        <Outlet /> 
      </main>

        <Footer />
     </div>
    </div>
  );
};

export default RootLayout;