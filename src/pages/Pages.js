import Home from './Home'
import Login from "./Login"
import Account from "./Account"
import Goods from "./Goods"
import Services from "./Services"
import Navbar from "../components/Navbar"
import {Routes, Route} from "react-router-dom"
import RoutableHomeSide from '../components/RoutableHomeSide'
import Electronics from "../components/Electronics"
import Clothings from "../components/Clothings"
import Tutorial from "../components/Tutorial"
import Product from "../components/product/Product"
import Body from "../components/account/BodyAccount"
import AddItem from "../components/account/AddNewItem"
import VerficationNot from '../components/account/VerficationNot'
import Verified from '../components/account/Verified'
import AccountGoods from '../components/account/Goods'
import AccountServices from '../components/account/Services'
import AddGoods from '../components/account/AddGoods'
import AddServices from '../components/account/AddServices'
import AddNewItemOptions from '../components/account/AddNewItemOptions'
import {CheckProvider} from "../components/account/CheckContext"



export default function pages() {
  return (
    <CheckProvider>
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
        {/* ------------------- GOODS */}
        <Route path="/goods" element={<Goods />}>

        </Route>
        <Route path="/services" element={<Services />}>

        </Route>
        {/* -------------------ACCOUNT */}
        <Route path="/account" element={<Account />}>
                <Route path="/account" element={<Body />}/>
                <Route path="/account/additems" element={<AddItem />}>
                  <Route path="/account/additems" element={<AddNewItemOptions />} />
                  <Route path="/account/additems/goods" element={<AddGoods />} />
                  <Route path="/account/additems/services" element={<AddServices />} />
                </Route>
                <Route path="/account/verification" element={<VerficationNot />}/>
                <Route path="/account/verified" element={<Verified />}/>
                <Route path="/account/goods" element={<AccountGoods />}/>
                <Route path="/account/services" element={<AccountServices />}/>
        </Route>
      </Routes>
      
    </CheckProvider>
  );
}