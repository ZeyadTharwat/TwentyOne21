import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Logo from "./assets/Logo.svg"
import Home from './pages/Home';
import About from "./pages/About"
import Error from './pages/Error';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Blogs from './pages/Blogs';
import FAQs from './pages/FAQs';
// import Services from './pages/Services';
import TrendReports from './pages/TrendReports';
import Awards from './pages/Awards';
import Press from './pages/Press';
import BlogDetails from './pages/Blogs/BlogDetails';
import ContactUs from './pages/ContactUs';
import ProjectDetails2 from './pages/ProjectDetails2';
import ProjectDetails3 from './pages/ProjectDetails3';
import ProjectDetails4 from './pages/ProjectDetails4';
import BlogDetails2 from './pages/Blogs/BlogDetails2';
import BlogDetails3 from './pages/Blogs/BlogDetails3';
import BlogDetails5 from './pages/Blogs/BlogDetails5';
import BlogDetails7 from './pages/Blogs/BlogDetails7';
import BlogDetails6 from './pages/Blogs/BlogDetails6';
import BlogDetails4 from './pages/Blogs/BlogDetails4';
import ProjectDetails5 from './pages/ProjectDetails5';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  }

  const ScrollToTop = () => {
    const location = useLocation();  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  };  
  useEffect(() => {
    if (document.readyState === "complete") {
      handleLoading();
    } else {
      window.addEventListener('load', handleLoading);
    }

    return () => {
      window.removeEventListener('load', handleLoading);
    };
  }, []);
  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center flex-col bg-primary">
        <img className=" animate-pulse mb-5" src={Logo} alt="Logo" />
        <div className="animate-spin rounded-full sm:size-16 size-10 border-t-2 border-b-2 border-white"></div>
      </div>
    );

  return (
    <Router>
    <ScrollToTop />
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/our-creations' element={<Projects />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        {/* <Route path='/services' element={<Services />} /> */}
        <Route path='/project-details/nama-yoso' element={<ProjectDetails />} />
        <Route path='/project-details/pitfire-pizza' element={<ProjectDetails2 />} />
        <Route path='/project-details/tero' element={<ProjectDetails3 />} />
        <Route path='/project-details/elix-spa' element={<ProjectDetails4 />} />
        <Route path='/project-details/voco-monaco' element={<ProjectDetails5 />} />
        <Route path='/trend-reports' element={<TrendReports />} />
        <Route path='/blog-details/1' element={<BlogDetails />} />
        <Route path='/blog-details/2' element={<BlogDetails2 />} />
        <Route path='/blog-details/3' element={<BlogDetails3 />} />
        <Route path='/blog-details/4' element={<BlogDetails4 />} />
        <Route path='/blog-details/5' element={<BlogDetails5 />} />
        <Route path='/blog-details/6' element={<BlogDetails6 />} />
        <Route path='/blog-details/7' element={<BlogDetails7 />} />
        <Route path='/awards' element={<Awards />} />
        <Route path='/press' element={<Press />} />
        <Route path='/*' element={<Error />} />
      </Route>
    </Routes>
  </Router>

  )
}

export default App
