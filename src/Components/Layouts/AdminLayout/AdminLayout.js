import React from 'react';
import UpperNav from '../../UpperNav/UpperNav';
import VerticalNav from '../../VerticalNav/VerticalNav';
import Footer from '../../Footer/Footer';
import AdminLinks from './AdminLinks'
import './AdminLayout.css'


const SellerLayout = props => {

  return (
    <div className="sellerLayout">
      <UpperNav {...props} />
      <div className="sellercontrolPanel">
        <div className="sellersidebar">
          <VerticalNav>
            <AdminLinks />
          </VerticalNav>
        </div>
        <div className="sellerContent">
          <div className="sellermobileSideBar">
            <AdminLinks displayer={"mobile"}/>
          </div>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellerLayout;