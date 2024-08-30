import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';


const Layout = () => {
  return (
      <main className="flex flex-col justify-between min-h-screen text-white bg-[#1A1A1A]">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
  );
};

export default Layout;
