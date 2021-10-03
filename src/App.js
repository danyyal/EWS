import React, { useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { checkUserSession } from './Redux/User/user.actions';
import { useDispatch } from 'react-redux';

// hoc
import WithAuth from './hoc/WithAuth';
import WithSellerAuth from './hoc/WithSellerAuth';
import WithAdminAuth from "./hoc/WithAdminAuth";
// pages
import Search from './Pages/Search/Search';
import SignIn from './Pages/SignIn/SignIn';
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from './Pages/AboutUs/AboutUs';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Dashboard from './Pages/Dashborad/Dashboard';
import CancelledOrders from './Pages/Dashborad/CancelledOrders/CancelledOrders';
import SellerOrder from './Pages/Seller/SellerOrder/SellerOrder';
import ProductDescription from './Pages/ProductDescription/ProductDescription';
import Cart from './Pages/Cart/Cart';
import Wishlist from "./Pages/Wishlist/Wishlist";
import OrderDetail from './Pages/OrderDetail/OrderDetail';
import Products from './Pages/Seller/Products/Products';
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import ReturnOrders from './Pages/ReturnOrders/ReturnOrders'
import Admin from "./Pages/Admin/Admin";
import Sellers from './Pages/Admin/Sellers/Sellers';
import Buyers from "./Pages/Admin/Buyers/Buyers";
import ReportGenerator from './Pages/ReportGenerator/ReportGenerator';
// Layouts
import MainLayout from './Components/Layouts/MainLayout/MainLayout';
import HomeLayout from './Components/Layouts/HomeLayout/HomeLayout';
import SignLayout from './Components/Layouts/SignLayout/SignLayout';
import SellerLayout from './Components/Layouts/SellerLayout/SellerLayout';
import DashBoardLayout from "./Components/Layouts/DashboardLayout/DashboardLayout";
import Checkout from "./Components/Checkout/Checkout";
import AdminLayout from './Components/Layouts/AdminLayout/AdminLayout';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';


const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());

  }, []);

  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => (
          <HomeLayout >
            <Home />
          </HomeLayout>
        )} />
        <Route exact path='/SignIn' render={() => (
          <SignLayout >
            <SignIn />
          </SignLayout>

        )} />
        <Route exact path='/SignUp' render={() => (
          <SignLayout>
            <SignUp />
          </SignLayout>

        )} />
        <Route exact path='/Products' render={() => (
          <MainLayout >
            <Search />
          </MainLayout>
        )} />
        <Route exact path='/Products/:filterType' render={() => (
          <MainLayout >
            <Search />
          </MainLayout>
        )} />
        <Route exact path='/Product/:productID' render={() => (
          <MainLayout >
            <ProductDescription />
          </MainLayout>
        )} />
        <Route exact path='/Cart' render={() => (
          <WithAuth>
            <MainLayout >
              <Cart />
            </MainLayout>
          </WithAuth>
        )} />
        <Route path='/Checkout' render={() => (
          <WithAuth>
            <MainLayout >
              <Checkout />
            </MainLayout>
          </WithAuth>
        )} />

        <Route path='/Order/:orderID/:seller' render={() => (
          <WithAuth>
            <DashBoardLayout >
              <OrderDetail />
            </DashBoardLayout>
          </WithAuth>
        )} />
        <Route path='/Wishlist' render={() => (
          <WithAuth>
            <MainLayout >
              <Wishlist />
            </MainLayout>
          </WithAuth>
        )} />
        <Route exact path='/Contact Us' render={() => (
          <SignLayout>
            <ContactUs />
          </SignLayout>
        )} />

        <Route path='/About Us' render={() => (
          <MainLayout >
            <AboutUs />
          </MainLayout>
        )} />

        <Route path='/ForgotPassword' render={() => (
          <SignLayout >
            <ForgotPassword />
          </SignLayout>
        )} />

        <Route exact path='/Seller' render={() => (
          <WithSellerAuth>
            <SellerLayout>
              <SellerOrder />
            </SellerLayout>
          </WithSellerAuth>
        )} />



        <Route exact path='/Admin' component={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        )} />


        <Route exact path='/Admin/manageSeller' render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Sellers />
            </AdminLayout>
          </WithAdminAuth>
        )} />


        <Route exact path='/Admin/manageBuyer' render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Buyers />
            </AdminLayout>
          </WithAdminAuth>
        )} />


        <Route exact path='/Admin/ReportGenerator' render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <ReportGenerator />
            </AdminLayout>
          </WithAdminAuth>
        )} />


    ````<Route path='/Seller/Products' render={() => (
          <WithSellerAuth>
            <SellerLayout>
              <Products />
            </SellerLayout>
          </WithSellerAuth>
        )} />



        <Route path='/Dashboard' render={() => (
          <WithAuth>
            <DashBoardLayout>
              <Dashboard />
            </DashBoardLayout>
          </WithAuth>
        )} />

        <Route path='/CancelledOrders' render={() => (
          <WithAuth>
            <DashBoardLayout>
              <CancelledOrders />
            </DashBoardLayout>
          </WithAuth>
        )} />
        

        <Route path='/ReturnOrder' render={() => (
          <WithAuth>
            <SignLayout>
              <ReturnOrders />
            </SignLayout>
          </WithAuth>
        )} />
      </Switch>
      <ToastsContainer store={ToastsStore} timer={4000} position={ToastsContainerPosition.BOTTOM_CENTER} />
    </div>
  );
}

export default App;
