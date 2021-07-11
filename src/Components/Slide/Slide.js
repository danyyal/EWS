import React,{useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slide.css';
import { Link } from 'react-router-dom';
import  {useSelector,useDispatch} from 'react-redux';
import {fetchProductStart} from '../../Redux/Products/Products.actions';

const mapState =({productsData})=>({
  products:productsData.products
})

const Slide=() =>{
  const dispatch = useDispatch();
const {products} = useSelector(mapState);
const {data} = products;
useEffect(() => {
  dispatch(fetchProductStart());
}, [])

  return (
    <>
     {/* <Carousel autoPlay={true} dynamicHeight={true} infiniteLoop={true} interval={2000} >
          { data && data.length>0 ? data.map((product, index) => {
                    const { productThumbnail, productName, productPrice, productDesc } = product;
                    if (!productThumbnail || !productName || typeof productPrice === 'undefined') return null;
                    return (
                     
                      <div>
                        <img alt="" src={productThumbnail} />
                        <div className='legend'>
                          <h1>{productName}</h1>
                          <p>{productDesc}</p>
                          <h5>Price:{productPrice}</h5>
                          <Link to='/Checkout' className='btn'>BUY NOW</Link>
                        </div>
                
                      </div>
                
                    
                    );
                }) : 'Loading...'
                
                }
                </Carousel>
                  */}
    <Carousel autoPlay={true} dynamicHeight={true} infiniteLoop={true} interval={2000} >
    
      <div>
        <img alt="" src="/images/slide-1.jpg" />
        <div className='legend'>
          <h1>Modern Watch</h1>
          <p>A modern watch that can be used in varoius events or weddings</p>
          <Link to='/Checkout' className='btn'>BUY NOW</Link>
        </div>

      </div>
      <div>
        <img alt="" src="/images/slide-2.jpg" />
        <div className='legend'>
          <h1>WODDEN CHAIR</h1>
          <p>A COMFORTABLE AND EASY TO SIT</p>
          <Link to='/cart-page' className='btn'>BUY NOW</Link>
        </div>

      </div>
      <div>
        <img alt="" src="/images/slide-3.jpg" />
        <div className='legend'>
          <h1>THIRD SLIDE</h1>
          <p>BDFBWF KSNFNQEQHFUH BFEFEHWB BWEHHW</p>
          <Link to='/cart-page' className='btn'>BUY NOW</Link>
        </div>

      </div>
    </Carousel>
    </>
  );
}
export default Slide;