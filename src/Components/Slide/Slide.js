import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slide.css';

const Slide = () => {
  return (
    <> 
      <Carousel autoPlay={true} dynamicHeight={true} infiniteLoop={true} interval={3000} showThumbs={false}>
        <div className="flexingslider">
          <div className='sliderText'>
            <div className="sliderTextInner">
              <h2>Beautify the World</h2>
              <p>All garden accessories are Available </p>
              <Button><Link to='/Products/homeandgarden' className='btn'>View Now</Link></Button>
            </div>
          </div>
          <div className='sliderImg'>
            <img alt="" src="/images/garden.jpg" />
          </div>
        </div>

        <div className="flexingslider">
          <div className='sliderText'>
            <div className="sliderTextInner">
              <h2>Electroics Accessories</h2>
              <p>Welcome Auto lovers Shop With Confidence</p>
              <Button><Link to='/Products/phonesandcommunicationdevices' className='btn'>View Now</Link></Button>
            </div>
          </div>
          <div className='sliderImg'>
            <img alt="" src="/images/electronic.jpg" />
          </div>
        </div>

        <div className="flexingslider">
          <div className='sliderText'>
            <div className="sliderTextInner">
              <h2>Revamp Your Wardrob</h2>
              <p>Beautiful Branded Dresses with best Fabric is Here</p>
              <Button><Link to='/Products/womencloth' className='btn'>View Now</Link></Button>
            </div>
          </div>
          <div className='sliderImg'>
            <img alt="" src="/images/dress.jpg" />
          </div>
        </div>


        <div className="flexingslider">
          <div className='sliderText'>
            <div className="sliderTextInner">
              <h2>Decore Your Home</h2>
              <p>All accessories required to decore home are Available</p>
              <Button><Link to='/Products/homeimprovements' className='btn'>View Now</Link></Button>
            </div>
          </div>
          <div className='sliderImg'>
            <img alt="" src="/images/decor.jpg" />
          </div>
        </div>

        <div className="flexingslider">
          <div className='sliderText'>
            <div className="sliderTextInner">
              <h2>Sports & Entertainment</h2>
              <p>All Sports and Fun Game Accessories are Here</p>
              <Button><Link to='/Products/sportsandentertainment' className='btn'>View Now</Link></Button>
            </div>
          </div>
          <div className='sliderImg'>
            <img alt="" src="/images/sport.jpg" />
          </div>
        </div>


        <div className="flexingslider">
          <div className='sliderText'>
            <div className="sliderTextInner">
              <h2>AutoMobile and Motor Cycle </h2>
              <p>Welcome Auto Lovers shop with confedence</p>
              <Button><Link to='/Products/automobilesandmotorcycle' className='btn'>View Now</Link></Button>
            </div>
          </div>
          <div className='sliderImg'>
            <img alt="" src="/images/car.jpg" />
          </div>
        </div>
      </Carousel>
    </>
  );
}
export default Slide;