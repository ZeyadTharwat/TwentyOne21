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
import Services from './components/Home/Services';
import TrendReports from './pages/TrendReports';
import Awards from './pages/Awards';
import Press from './pages/Press';
import BlogDetails from './pages/BlogDetails';
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
        <Route path='/projects' element={<Projects />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/project-details/:id' element={<ProjectDetails />} />
        <Route path='/trend-reports/:id' element={<TrendReports />} />
        <Route path='/blog-details/:id' element={<BlogDetails />} />
        <Route path='/awards/:id' element={<Awards />} />
        <Route path='/press/:id' element={<Press />} />
        <Route path='/*' element={<Error />} />
      </Route>
    </Routes>
  </Router>

  )
}

export default App
