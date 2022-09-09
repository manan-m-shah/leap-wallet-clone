import Head from 'next/head';
import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-600 text-white">
        <Head>
          <title>Leap Wallet Clone</title>
          <link rel="icon" href="https://softr-prod.imgix.net/applications/95bf8384-8d1e-46c0-9e2f-d2d8ee183230/assets/5ca7adce-5526-4745-95e6-fa5743c82f25.svg" />
        </Head>
        <div className="flex w-full flex-1 items-center justify-center">
          <div className='flex flex-col max-w-sm w-[350px] h-[600px] bg-darkBlueBg rounded-2xl'>
            <Navbar />
            <main className="h-full">{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout