import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Contact from "./components/pages/Contact/Contact";
import Ourcompany from "./components/pages/Ourcompany/Ourcompany";
import Navbar from './components/pages/Nabar/Navbar';
import Footer from './components/pages/Footer/Footer';
import Signin from "./components/pages/Signin/Signin";
import Signup from "./components/pages/Signup/Signup";
import Privacypolicy from "./components/pages/Footer/Privacypolicy";
import Customer from "./components/pages/Footer/Customer";
import Refunds from "./components/pages/Footer/Refunds";
import { useEffect } from "react";
import Terms from "./components/pages/Footer/Terms";

function ScrollToTopOnMount() {
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  }, [pathname]);

  return null;
}


function App() {
  return (
    <>
      {/* <Home /> */}
      <Router>
      <ScrollToTopOnMount />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourcompany" element={<Ourcompany />} />
          <Route path="/privacy" element={<Privacypolicy />} />
          <Route path="/customer-service" element={<Customer />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="/terms" element={<Terms />} />


        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
