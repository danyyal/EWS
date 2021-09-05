import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import RestoreOutlinedIcon from '@material-ui/icons/RestoreOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import EventIcon from '@material-ui/icons/Event';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className='upperFooter' >
        <Grid container spacing={2} className='footerText2'>
          <Grid item xs={6} sm={3} className='align'>
            <span ><NearMeOutlinedIcon className='footerIcone' /></span>
            <span>
              <h4>FAST SHIPPING</h4>
              <p>All over Pakistan</p>
            </span>
          </Grid>
          <Grid item xs={6} sm={3} className='align'>
            <span><RestoreOutlinedIcon className='footerIcone' /></span>
            <span>
              <h4>WARRANTY</h4>
              <p>7 day Replacement</p>
            </span>
          </Grid>
          <Grid item xs={6} sm={3} className='align'>
            <span><MessageOutlinedIcon className='footerIcone' /></span>
            <span>
              <h4>INSTANT SUPPORT</h4>
              <p>watsapp 03114292168</p>
            </span>
          </Grid>
          <Grid item xs={6} sm={3} className='align'>
            <span><EventIcon className='footerIcone' /></span>
            <span>
              <h4>DISCOUNT OFFERS</h4>
              <p>Discount on special events</p>
            </span>
          </Grid>

        </Grid>
      </div>
      {/* ------------------------upper footer end -----------------------------------*/}
      <div className='root'>

        <h4 className='cateHeading'>Top Categories</h4>
        <Grid container spacing={3} className='alignLower'>
          <Grid item xs={12} sm={6} md={3} className='footerText' >
            <ul className='footerlistStyle' >
              <h5>Fashion & Accessories</h5>
              <li><Link className='link_style' to="/Products/menscloth"> Mens Clothes</Link></li>
              <li><Link className='link_style' to="/Products/shoes">Shoe </Link></li>
              <li><Link className='link_style' to="/Products/womenjewellery">Jewllery </Link></li>
              <li><Link className='link_style' to="/Products/bags">Bags</Link></li>
              <li><Link className='link_style' to="/Products/healthandbeauty">Health & Beauty</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} className='footerText'>
            <ul className='footerlistStyle'>
              <h5 >Electronics</h5>
              <li><Link className='link_style' to="/Products/computerandofficeappliances">
                Computer Appliances</Link></li>
              <li><Link className='link_style' to="Products/phonecables">Phone Cables </Link></li>
              <li><Link className='link_style' to="/Products/phonesaccessories">Phone Accessories</Link></li>
              <li><Link className='link_style' to="/Products/phonesandcommunicationdevices">Communication Devices</Link></li>
              <li ><Link className='link_style' to="/Products/automobilesandmotorcycle">
                Auto mobiles and motor Car</Link></li>
            </ul>
          </Grid >
          <Grid item xs={12} sm={6} md={3} className='footerText'>
            <ul className='footerlistStyle' >
              <h5 >Sports & Entertainment </h5>
              <li><Link className='link_style' to="/Products/sportsandentertainment">Sports</Link></li>
              <li><Link className='link_style' to="/Products/toys">Toys</Link></li>
              <li><Link className='link_style' to="/Products/tools">Other Tools</Link></li>
              <li><Link className='link_style' to="/Products/kids">Kids shop</Link></li>
              <li><Link className='link_style' to="/Products/watches">Watches</Link></li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={3} className='footerText'>
            <ul className='footerlistStyle'>
              <h5>Home Decoration</h5>
              <li ><Link className='link_style' to="/Products/plants">Plants</Link></li>
              <li ><Link className='link_style' to="/Products/homeimprovements">Technologies</Link></li>
              <li><Link className='link_style' to="/Products/petproducts">Pets accessories</Link></li>
              <li><Link className='link_style' to="/Products/securityproducts">Home Security</Link></li>
              <li><Link className='link_style' to="/Products/others">Other Accessories </Link></li>
            </ul>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} className='footerText' >
          <div className='center'>
            <h4 className='center'>Follow Us</h4>
            <FacebookIcon className='icons' />
            <AddIcCallIcon className='icons' />
            <TwitterIcon className='icons' />
            <InstagramIcon className='icons' />
          </div>
        </Grid>
        <Grid className='center footerText' item xs={12}>
          <Typography
            variant="subheading"
            component={'span'}
          >
            © {currentYear} Ecommerece With Scrapping
          </Typography>
        </Grid>
      </div>
    </div>
  )
}




export default Footer;