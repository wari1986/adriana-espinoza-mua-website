import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-full pr-8">
      <Head>
        <title>Adriana Espinoza MUA</title>
      </Head>
      <main className="w-5/6">{children}</main>
      <div className="w-1/6 flex flex-col justify-between py-12 text-right">
        <header>
          <Navbar />
        </header>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Layout
