import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrderHistory } from '../../../Redux/Orders/orders.actions';
import OrderHistory from '../../../Components/OrderHistory/OrderHistory';

import '../Dashboard.css';

const mapState = ({ user, orderData }) => ({
  currentUser: user.currentUser,
  orderHistory: orderData.orderHistory.data
})

const Orders = () => {
  const dispatch = useDispatch();
  const { currentUser, orderHistory } = useSelector(mapState)
  useEffect(() => {
    dispatch(getUserOrderHistory(currentUser.id))
  }, [])
  return (
    <div>
      <h1 className="historyHeading">Order History</h1>
      <div className='all'>
      <OrderHistory cancelledOrders={false} order={orderHistory}/>
      </div>
    </div>
  )
}

export default Orders;
