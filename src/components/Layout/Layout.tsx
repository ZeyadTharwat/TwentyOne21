import { Outlet } from 'react-router-dom';
import Footer from './Footer';

  
const Layout = () => {
  return (
    <>
        <main className="flex flex-col justify-between min-h-screen text-white bg-[#1A1A1A]">
          <Outlet />
      <Footer/>
    </main>
</>
  );
};

export default Layout;
