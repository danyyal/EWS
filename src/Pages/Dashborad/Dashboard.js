import React from 'react';
import { Grid, Typography} from '@material-ui/core';
import './Dashboard.css';
import DashboardDesign from './DashboardDesign/DashboardDesign';
import Orders from './Orders/Orders';



const Dashboard = () => {
  return (
    <div>
    
        <DashboardDesign/>
        <h1 className="historyHeading">Order History</h1>
        <Orders/>
        
      </div>
    
  )
}

export default Dashboard;
