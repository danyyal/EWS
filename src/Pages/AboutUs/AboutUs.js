import { Button, Grid } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import StoreIcon from '@material-ui/icons/Store';
import CategoryIcon from '@material-ui/icons/Category';
import BarChartIcon from '@material-ui/icons/BarChart';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ReceiptIcon from '@material-ui/icons/Receipt';
import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="AlignAbout" >
      <Grid container className='aboutHead'>
        <Grid item xs={12}>
          <h1>Welcome to Know More About Our Team <br /><span className='textStyle'>and Their Experiences</span> </h1>
        </Grid>
      </Grid>
      <div className='container'>
        <div className='planingHead'>
          <h2 >OUR JOURNEY TO START</h2>
        </div>
        <div className='flexRow'>
          <div className='planBody'>
            <p> Before starting this project we both have no enough experience in development .Firstly we decide frameworks and tools according to market demands.
            Then we learn frameworks and start collecting requirements .We collected requirements about our project. Our supervisor guides us how to gather requirements
            they told us to study previous working in this field and try to find their bugs and drawbacks .Then
            we started to study and find other ecommerce site's drawnbacks and features and write down our main requirements
            Then we started to build conceptual view of our project which defines flow of every function. We both spent 2 to 4 hours
            daily in disscussion then we get feedback from Sir Atif and corrects our mistakes according to Sir Atif. After
            finalize conceptual view we start working on implementation (coding) with react js and firebase .We both have learned
            new skills after building this project.
              </p>
          </div>
          <div className='planImg'>
            <img src='/images/plan.jpg' />
          </div>
        </div>
        <div className='services'>
          <h1>OUR SERVICES & FEATURES</h1>
          <div class='serviceRows'>
            <div className='serviceRow'>
              <ul className='serviceDetail'>
                <li> <LockOpenIcon className='icon' /> </li>
                <li><h5>Google Sign In</h5></li>
                <li><p>If anyone dont want to create an account then they can continue with google account </p></li>
              </ul>
              <ul className='serviceDetail'>
                <li> < DoneOutlineIcon className='icon' /> </li>
                <li><h5>Products with Valid prices</h5></li>
                <li><p>All prices will be verified and no seller can sell product on increased prices</p></li>
              </ul>
              <ul className='serviceDetail'>
                <li> < BarChartIcon className='icon' /> </li>
                <li><h5>Reports</h5></li>
                <li><p>Admin has Report about all sellers, buyers and their orders</p></li>
              </ul>
            </div>
            <div className='serviceRow'>
              <ul className='serviceDetail'>
                <li> <CategoryIcon className='icon' /> </li>
                <li><h5>Almost All Category</h5></li>
                <li><p>Almost all categories are available according to customer need</p></li>
              </ul>
              <ul className='serviceDetail'>
                <li> <ReceiptIcon className='icon' /> </li>
                <li><h5>Reciept Of Order</h5></li>
                <li><p>During Checkout a recipt will also be shown so that customer can confirm order</p></li>
              </ul>
              <ul className='serviceDetail'>
                <li> < StoreIcon className='icon' /> </li>
                <li><h5>Flexible Interface</h5></li>
                <li><p>Overall interface is easy to use for every user</p></li>
              </ul>
            </div>
          </div>


          <div className='serviceRow lastRow'>
            <ul className='serviceDetail'>
              <li> <ShoppingCartIcon className='icon' /> </li>
              <li><h5>A flexible cart</h5></li>
              <li><p>To place items for shop now or later and checkout easily</p></li>
            </ul>

            <ul className='serviceDetail d-none'>
              <li> <DashboardIcon className='icon' /> </li>
              <li><h5>Dashboard for seller&buyer</h5></li>
              <li><p>Every Seller has own dashboard to manage their data</p></li>
            </ul>

            <ul className='serviceDetail'>
              <li> < AccessTimeIcon className='icon' /> </li>
              <li><h5>24 hours Availability</h5></li>
              <li><p>Customer can contact and send feedback to us anytime </p></li>
            </ul>
          </div>
        </div>

        <div className='mission-value'>
          <h1>OUR MISSION AND VALUES</h1>
          <div className='mission'>
            <div className='planImg'>  <img src='/images/mission.jpg' /></div>
            <p>Our mission is to facilitate people with an efficient and elegant site for
            shopping without any fraud. Now a days due to covid-19 almost all businesses
            are getting online that's why it is essential to make business more pure .Main
            feature which makes us different from other sites is that onn our platform sellers
            cannot do fraud to their customers by giving discount on higher prices. So we planned to
            changge this phenomenon so that people can buy things without any hesitation.
                   </p>
          </div>
          <div className='mission missionLast'>
            <p>Values are more important factor for every growing business . Because every employee
            or customer wants a desired value . We give respect to both sellers and buyers .In
            case of any complain customer or buyer can go to contact us page and give message .
            These messages will be recieved to admin. For our regular customers we provide some
            discount on products and appreciate their feedbacks.
                </p>
            <div className='planImg'> <img src='/images/value.jpg' /></div>
          </div>
        </div>
        <div className="Featured">
          <h1 className="ourTeamHeader">OUR TEAM</h1>
          <div className="feature">
            <div className="feature__image w1">
              <div className="feature__div1 a1"></div>
              <div className="name"><h1>Danyyal Ali</h1></div>
              <img src="/images/Danyyal.JPEG" className="image" />
            </div>
            <div className="feature__image w2">
              <div className="feature__div2 a2"></div>
              <div className="name"><h1>Atif Ishaq Khan</h1></div>
              <img src="/images/Atif-Ishaq.JPEG" alt="" className="image" />
            </div>
            <div className="feature__image w3">
              <div className="feature__div3 a3"></div>
              <div className="name"><h1>Amna Waheed</h1></div>
              <img src="/images/Amna.JPEG" alt="" className="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
