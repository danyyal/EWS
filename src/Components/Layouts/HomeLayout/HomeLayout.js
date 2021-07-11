import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import UpperNav from '../../UpperNav/UpperNav';
const MainLayout=(props) =>{
    return (
        <div>
            <UpperNav {...props}/>
            <Header />
            <div>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout;
