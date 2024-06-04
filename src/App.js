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
import Peptideinfo from "./components/pages/Peptideinfo/Peptideinfo";
import Intropeptide from "./components/pages/Peptideinfo/Intropeptide";
import Reconstitution from "./components/pages/Peptideinfo/Reconstitution";
import Pepstorage from "./components/pages/Peptideinfo/Pepstorage";
import Indiampeptide from "./components/pages/Peptideinfo/Indiampeptide";
import Peptidebond from "./components/pages/Peptideinfo/Peptidebond";
import Intropurity from "./components/pages/Peptideinfo/Intropurity";
import Peptpurification from "./components/pages/Peptideinfo/Peptpurification";
import Peptidesolubility from "./components/pages/Peptideinfo/Peptidesolubility";
import Peptidesynthesis from "./components/pages/Peptideinfo/Peptidesynthesis";
import Peptideprotiens from "./components/pages/Peptideinfo/Peptideprotiens";
import Peptideresearch from "./components/pages/Peptideinfo/Peptideresearch";
import Blog from "./components/pages/Blogs/Blog";
import Notfound from "./components/Notfound";

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

          {/* peptide information */}
          <Route path="/pepdite-information" element={<Peptideinfo />} />
          <Route path="/pepdite-information/peptide" element={<Intropeptide />} />
          <Route path="/pepdite-information/peptide-reconstitution" element={<Reconstitution />} />
          <Route path="/pepdite-information/peptide-storage" element={<Pepstorage />} />
          <Route path="/pepdite-information/indian-made-peptide" element={<Indiampeptide />} />
          <Route path="/pepdite-information/Peptide-bond" element={<Peptidebond />} />
          <Route path="/pepdite-information/Peptide-purity" element={<Intropurity />} />
          <Route path="/pepdite-information/peptide-purification" element={<Peptpurification />} />
          <Route path="/pepdite-information/peptide-solubility" element={<Peptidesolubility />} />
          <Route path="/pepdite-information/peptide-synthesis" element={<Peptidesynthesis />} />
          <Route path="/pepdite-information/peptide-vs-protiens" element={<Peptideprotiens />} />
          <Route path="/pepdite-information/peptide-research" element={<Peptideresearch />} />

          {/* Blogs connection */}
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Notfound />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
