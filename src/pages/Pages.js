
import Home from './Home'
import Login from "./Login"
import Account from "./Account"
import {Routes, Route} from "react-router-dom"
import RoutableHomeSide from '../components/RoutableHomeSide'
// import Stock from "../components/Stock"
import Electronics from "../components/Electronics"
import Clothings from "../components/Clothings"
import Tutorial from "../components/Tutorial"
import Product from "../components/product/Product"
import Body from "../components/account/BodyAccount"
import AddItem from "../components/account/AddNewItem"
import VerficationNot from '../components/account/VerficationNot'
import Verified from '../components/account/Verified'
import Goods from '../components/account/Goods'
import Services from '../components/account/Servicess'


export default function pages() {
  return (
    <>
      
      <Routes>
        <Route  element={<Home />}>
          <Route path="/" element={<RoutableHomeSide />}/>
          <Route path="/electronics" element={<Electronics />}/>
          <Route path="/clothings" element={<Clothings />}/>
          <Route path="/tutorial" element={<Tutorial />}/>
          <Route path="/product" element={<Product />}/>
        </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/account" element={<Account />}>
                <Route path="/account" element={<Body />}/>
                <Route path="/account/additems" element={<AddItem />}/>
                <Route path="/account/verification" element={<VerficationNot />}/>
                <Route path="/account/verified" element={<Verified />}/>
                <Route path="/account/goods" element={<Goods />}/>
                <Route path="/account/services" element={<Services />}/>
        </Route>
      </Routes>
      
    </>
  );
}