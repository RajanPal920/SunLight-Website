import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout — wraps all pages with the shared Header and Footer.
 * Adds top padding to account for the fixed header height.
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1" tabIndex="-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
