import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';


const Layout = () => {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const scrollCallback = () => {
      const scrolledFromTop = window.scrollY;
      setShown(() => scrolledFromTop > 100);
    };
    window.addEventListener('scroll', scrollCallback);
    scrollCallback();
    // clean-up function
    return () => {
      window.removeEventListener('scroll', scrollCallback);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <>
        <button
      aria-label='scroll to top'
      onClick={scrollToTop}
      className={`${
        shown ? 'scale-100' : 'scale-0'
      } w-12 h-12 transition-transform duration-200 flex fixed z-[999999999999999999999999] right-10 bottom-10 bg-primary rounded-full shadow-lg shadow-gray-900 justify-center items-center`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
      </svg>
    </button>

          <main className="flex flex-col justify-between min-h-screen text-white bg-[#1A1A1A]">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
</>
  );
};

export default Layout;
