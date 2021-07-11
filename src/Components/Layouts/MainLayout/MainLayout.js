import React from 'react'
import UpperNav from '../../UpperNav/UpperNav'
import Footer from '../../Footer/Footer'
import Breadcrumb from '../../Breadcrumb/Breadcrumb'
const MainLayout=(props) =>{
    return (
        <div>
            <UpperNav {...props}/>
            <Breadcrumb/>
            <div>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout;
