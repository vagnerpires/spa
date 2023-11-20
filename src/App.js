import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Products } from "./pages/Products";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
  return (
    <Router basename = {process.env.PUBLIC_URL} >
    <Navbar />
       <Routes>
           <Route path="/spa" element = {<Home />} />
           <Route path="/spa/products" element = {<Products />} />
           <Route path="/spa/contact" element = {<Contact />} />
           <Route path="*" element = { <PageNotFound /> } />
       </Routes>
    <Footer />
   </Router>
  );
}	
export default App;