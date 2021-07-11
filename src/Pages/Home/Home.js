import React,{useEffect} from 'react'
import Slide from '../../Components/Slide/Slide';
import Product from '../../Components/ProductsResult/Product/Product';
import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import Card from '../../Components/Card/Card';
import { fetchProductsStart } from '../../Redux/Products/Products.actions';
import './Home.css';


const mapState = ({productsData})=>({
    products:productsData.products
})


const Home=()=>{
    const {products} = useSelector(mapState);
    const {data} = products;
   const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchProductsStart());
       
    
    },[]);
    

    return (
        <div>
            
           <Slide/>
           <Link className='linkStyle'  to='/Products'><h1 className='head'>OUR PRODUCTS</h1></Link> 
           <div className='products'>
               
                { data && data.length>0 ? data.map((product, index) => {
                    const { productThumbnail, productName, productPrice, stock } = product;
                    if (!productThumbnail || !productName || typeof productPrice === 'undefined') return null;
                    const configProduct = { ...product };
                    
                    return (
                        
                        <Product {...configProduct} />
                    );
                }) : 'Loading...'
                
                }
            </div>

      <Button className='showBtn'><Link className='linkStyle' to='/Products'>Show More</Link></Button>
         <Grid container className='homeAbout'>
         
     <Grid item xs={12}>
     <Link className='linkStyle'  to='/Products'><h1 className='head'>KNOW ABOUT US</h1></Link>
         </Grid>       
         <Grid container justify="center" spacing={3} alignItems='center' >
           
              <Grid item >
                <Card
                 img='/images/sellerComm.png'
                 heading='Seller&Buyer Relationship'
                 detail='We take care of our both buyer and seller.Seller will has good relations
                 with their customers otherwise buyer can complain us by going to....'
                  />
                </Grid>
                <Grid item >
                  <Card
                 img='/images/howWork.png'
                 heading='What makes us unique'
                 detail='There is a unique point which makes us different from our competitors that is
                  approved posts of seller which means no seller....'
                  />
                  </Grid>
                  <Grid item>
                  <Card
                 img='/images/buyerNeed.png'
                 heading='Requirements for buyer or Seller'
                 detail='Anyone can become a buyer or seller just by doing some simplem steps
                 Go to signUp and register yourself.... '
                  />
              </Grid>
          </Grid>
          </Grid>



        </div>
    )
}

export default Home
