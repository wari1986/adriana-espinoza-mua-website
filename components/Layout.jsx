import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Head>
        <title>Adriana Espinoza MUA</title>
      </Head>
      {/* <div className="w-1/6 flex flex-col justify-between py-12 text-right"> */}
      <div className="w-full lg:flex">
        <div className="lg:hidden">
          <Navbar />
        </div>
        <main className="w-full lg:w-5/6">{children}</main>
        <div className="lg:hidden">
          <Footer />
        </div>
        <div className="hidden lg:flex flex-col w-1/6 justify-between">
          <header className="flex justify-end"  >
            <Navbar />
          </header>
          <footer className="">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Layout
