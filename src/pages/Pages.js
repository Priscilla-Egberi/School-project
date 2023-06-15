
import Home from './Home'
import Login from "./Login"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {Routes, Route} from "react-router-dom"
import RoutableHomeSide from '../components/RoutableHomeSide'
// import Stock from "../components/Stock"
import Electronics from "../components/Electronics"
import Clothings from "../components/Clothings"
import Tutorial from "../components/Tutorial"
import Product from "../components/product/Product"


export default function pages() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  element={<Home />}>
          <Route path="/" element={<RoutableHomeSide />}/>
          <Route path="/electronics" element={<Electronics />}/>
          <Route path="/clothings" element={<Clothings />}/>
          <Route path="/tutorial" element={<Tutorial />}/>
          <Route path="/product" element={<Product />}/>
        </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/account" element={<Account />}/>
      </Routes>
      <Footer />
    </>
  );
}