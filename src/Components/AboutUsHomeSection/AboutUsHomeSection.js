import React from 'react'
import Card from '../Card/Card'
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './AboutUsHomeSection.css'


export default function AboutUsHomeSection () {

  return (
    <div className="aboutBackground">
      <Grid container>
        <Grid item xs={12}>
          <Link className='linkStyle' to='/About Us'><h1 className='head'>KNOW ABOUT US</h1></Link>
        </Grid>

        <Grid container justify="center" alignItems='center' >
          <div className="aboutsectionDivMain">
            <div className="aboutsectionDivInner">
              <div className="aboutsectionImage">
                  <img src="/images/sellerComm.png"/>
              </div>
              <div className="aboutsectionContent">
                <h1>Seller&Buyer Relationship</h1>
                <span>We take care of our both buyer and seller.Seller will has good relations
                    with their customers otherwise buyer can complain us by going to</span>
              </div>
            </div>

            <div className="aboutsectionDivInner flexReverse">
              <div className="aboutsectionContent">
                <h1>What makes us unique</h1>
                <span>There is a unique point which makes us different from our competitors that is 
                  approved posts of seller which means no seller</span>
              </div>
              <div className="aboutsectionImage">
                <img src="/images/howWork.png"/>
              </div>  
            </div>

            <div className="aboutsectionDivInner ">
              <div className="aboutsectionImage">
                  <img src="/images/buyerNeed.png"/>
              </div>
              <div className="aboutsectionContent">
                <h1>Requirements for buyer or Seller</h1>
                <span>Anyone can become a buyer or seller just by doing some simpler steps
                    Go to signUp and register yourself</span>
              </div>
            </div>

            <div className="aboutsectionDivInner flexReverse">
              <div className="aboutsectionContent">
                <h1>Our Aims for future</h1>
                <span>What we plan is to make a platform where people can buy anything they want
                    without any hesitation or being afraid of getting looted</span>
              </div>
              <div className="aboutsectionImage">
                  <img src="/images/aims.png"/>
              </div>

            </div>
          </div>
        </Grid>
        <Grid item xs={6} className="moreMargin">
          <Link className='linkStyle' to='/About Us'><h1 className='head'>Click to Know More About us</h1></Link>
        </Grid>
      </Grid>
    </div>
  )
} 