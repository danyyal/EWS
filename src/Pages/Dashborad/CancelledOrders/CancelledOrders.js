import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrderHistory } from '../../../Redux/Orders/orders.actions';
import OrderHistory from '../../../Components/OrderHistory/OrderHistory';
import DashboardDesign from '../DashboardDesign/DashboardDesign'
import '../Dashboard.css';

const mapState = ({ user, orderData }) => ({
  currentUser: user.currentUser,
  orderHistory: orderData.orderHistory.data
})

const CancelledOrders = () => {
  const dispatch = useDispatch();
  const { currentUser, orderHistory } = useSelector(mapState)
  useEffect(() => {
    dispatch(getUserOrderHistory(currentUser.id))
  }, [])
  return (
    <div className="dashboardSetting">
      <DashboardDesign/>
      <h1 className="historyHeading">Returned Orders History</h1>
      <div>
        <div className='all'>
          <OrderHistory cancelledOrders={true} order={orderHistory}/>
        </div>
      </div>
    </div>
  )
}

export default CancelledOrders;
