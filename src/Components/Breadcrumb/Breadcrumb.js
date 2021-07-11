import React from 'react';
import {Breadcrumbs ,Link, Typography} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import './Breadcrumb.css';


 const Breadcrumb=(props)=> {
   const {history,location:{pathname} }=props
   
  //  split pathname
  const pathnames=pathname.split('/').filter(x=>x);
  return (
    
    <Breadcrumbs className='alignBread'  >

      {pathnames.length>0 ?
       <Link onClick={()=>history.push('/')  } className='breadLink' >Home</Link>:
       <Typography>Home</Typography>
      }
       {
        pathnames.map((name,index)=>{
          const RoutTo='/${pathnames.slice(0,index+1).join('/')}';
         const isLast=index===pathnames.length-1;
         const secondLast=index===pathnames.length-2;
          if(pathnames[secondLast] === "Product"){
            return  secondLast ? (<Typography key={name}>Product Details</Typography>):
            (<Link   key={name} onClick={()=>history.push(RoutTo)} className='breadLink' >
              {name}
              </Link>);
          }
          return  isLast ? (<Typography key={name}>{name}</Typography>):
          (<Link   key={name} onClick={()=>history.push(RoutTo)} className='breadLink' >
            {name}
            </Link>);
          
        })
      }
    </Breadcrumbs>
    
  );
}
export default withRouter(Breadcrumb);