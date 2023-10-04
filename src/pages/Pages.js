import Landing from './Landing'
import Home from './Home'
import Login from "./Login"
import Account from "./Account"
import Goods from "./Goods"
import Services from "./Services"
import {Routes, Route} from "react-router-dom"
import SignUp from '../login/SignUp'
import LoginMain from "../login/Login"
import RoutableLanding from '../components/landing/RoutableLanding'
import RoutableHome from '../components/home/RoutableHome'
import Cart from '../components/home/Cart'
import Electronics from "../components/sidebarPages/Electronics"
import OthersGoods from '../components/sidebarPages/OthersGoods'
import OthersService from "../components/sidebarPages/OthersService"
import SchoolMaterial from "../components/sidebarPages/SchoolMaterial"
import Tailoring from "../components/sidebarPages/Tailoring"
import TechJob from "../components/sidebarPages/TechJob"
import Catering from "../components/sidebarPages/Catering"
import Tutoring from "../components/sidebarPages/Tutoring"
import HomeUtensils from "../components/sidebarPages/HomeUtensils"
import HealthBeauty from "../components/sidebarPages/HealthBeauty"
import HairDressing from "../components/sidebarPages/HairDressing"
import ClothingsJewelries from "../components/sidebarPages/ClothingsJewelries"
import HousePainting from "../components/sidebarPages/HousePainting"
import LaptopRepairs from "../components/sidebarPages/LaptopRepairs"
import Product from "../components/product/Product"
import Work from "../components/product/Work"
import Body from "../components/account/BodyAccount"
import AddItem from "../components/account/AddNewItem"
import VerficationNot from '../components/account/VerficationNot'
import Verified from '../components/account/Verified'
import AccountGoods from '../components/account/Goods'
import Available from '../components/account/GoodsAvailable'
import NotAvailable from '../components/account/GoodsNotAvailable'
import AccountServices from '../components/account/Services'
import AddGoods from '../components/account/AddGoods'
import AddServices from '../components/account/AddServices'
import AddNewItemOptions from '../components/account/AddNewItemOptions'
import {CheckProvider} from "../components/account/CheckContext"
import {CheckHomProvider} from "../components/context/CheckHomContext"
import { UserProvider } from '../login/UserContext';
import {ServiceProvider} from "../components/context/ServiceContext"
import {ProductProvider} from "../components/context/ProductContext"
import {CartProvider} from "../components/context/CartContext"



export default function pages() {
  return (
    <CheckProvider>
    <CheckHomProvider>
    <UserProvider>
    <ServiceProvider>
    <ProductProvider>
    <CartProvider>
      
      <Routes>
        <Route  element={<Landing />}>
          <Route path="/" element={<RoutableLanding />}/>
          <Route path="/electronics" element={<Electronics />}/>
          <Route path="/clothings" element={<ClothingsJewelries />}/>
          <Route path="/tutorial" element={<Tutoring />}/>
          <Route path="/schoolmaterial" element={<SchoolMaterial />}/>
          <Route path="/homeUtensils" element={<HomeUtensils />}/>
          <Route path="/healthBeauty" element={<HealthBeauty />}/>
          <Route path="/othersGoods" element={<OthersGoods />}/>
          <Route path="/othersService" element={<OthersService />}/>
          <Route path="/housePainting" element={<HousePainting />}/>
          <Route path="/hairDressing" element={<HairDressing />}/>
          <Route path="/laptopRepairs" element={<LaptopRepairs />}/>
          <Route path="/catering" element={<Catering />}/>
          <Route path="/techJob" element={<TechJob />}/>
          <Route path="/tailoring" element={<Tailoring />}/>
          <Route path="/goods/:cardId" element={<Product />}/>
          <Route path="/services/:cardId" element={<Work />}/>
          <Route path="/goods" element={<Goods />} />
          <Route path="/services" element={<Services />}/>          
        </Route>

        <Route path="/login" element={<Login />}>
          <Route path="/login" element={<LoginMain />} />
          <Route path="/login/signup" element={<SignUp />} />
        </Route>

        {/* ------------------- Home */}
        <Route  path ="/home" element={<Home />}>
          <Route path="/home" element={<RoutableHome />}/>
          <Route path="/home/cart" element={<Cart />}/>
          <Route path="/home/electronics" element={<Electronics />}/>
          <Route path="/home/clothings" element={<ClothingsJewelries />}/>
          <Route path="/home/tutorial" element={<Tutoring />}/>
          <Route path="/home/schoolmaterial" element={<SchoolMaterial />}/>
          <Route path="/home/homeUtensils" element={<HomeUtensils />}/>
          <Route path="/home/healthBeauty" element={<HealthBeauty />}/>
          <Route path="/home/othersGoods" element={<OthersGoods />}/>
          <Route path="/home/othersService" element={<OthersService />}/>
          <Route path="/home/housePainting" element={<HousePainting />}/>
          <Route path="/home/hairDressing" element={<HairDressing />}/>
          <Route path="/home/laptopRepairs" element={<LaptopRepairs />}/>
          <Route path="/home/catering" element={<Catering />}/>
          <Route path="/home/techJob" element={<TechJob />}/>
          <Route path="/home/tailoring" element={<Tailoring />}/>
          <Route path="/home/goods/:cardId" element={<Product />}/>
          <Route path="/home/services/:cardId" element={<Work />}/>
          <Route path="/home/goods" element={<Goods />} />
          <Route path="/home/services" element={<Services />}/>          
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
                <Route path="/account/goods" element={<AccountGoods />}>
                    <Route path="/account/goods" element={<Available />}/>
                    <Route path="/account/goods/notavailable" element={<NotAvailable />}/>                
                </Route>
                <Route path="/account/services" element={<AccountServices />}/>
        </Route>
      </Routes>

     </CartProvider> 
     </ProductProvider> 
     </ServiceProvider> 
     </UserProvider> 
    </CheckHomProvider>
    </CheckProvider>
  );
}