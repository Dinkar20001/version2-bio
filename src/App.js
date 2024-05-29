import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact/Contact";
import Ourcompany from "./components/pages/Ourcompany/Ourcompany";
import Navbar from './components/pages/Nabar/Navbar';
import Footer from './components/pages/Footer/Footer';
import Signin from "./components/pages/Signin/Signin";
import Signup from "./components/pages/Signup/Signup";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/ourcompany" element={<Ourcompany />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
