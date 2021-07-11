import React from 'react'
import UpperNav from '../../UpperNav/UpperNav'
import Breadcrumb from '../../Breadcrumb/Breadcrumb'
const SignLayout=(props) =>{
    return (
        <div>
            <UpperNav {...props}/>
            <Breadcrumb/>
            <div>
                {props.children}
            </div>
            
        </div>
    )
}

export default SignLayout;
