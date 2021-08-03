import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SellerDesign from '../SellerDesign';
import OrderHistory from '../../../Components/OrderHistory/OrderHistory'
import { getSellerOrderHistory } from '../../../Redux/Orders/orders.actions'
import './SellerOrder.css'

const mapState = ({ user, orderData }) => ({
  currentUser: user.currentUser,
  orderHistory: orderData.sellerOrderHistory.data
})
const SellerOrder = () => {
  const dispatch = useDispatch();
  const { currentUser, orderHistory } = useSelector(mapState)
  useEffect(() => {
    dispatch(getSellerOrderHistory(currentUser.id))
  }, [])
  return (
    <div className="sellerContentDiv">
      <SellerDesign />
      <OrderHistory order={orderHistory} />
    </div>
  )
}

export default SellerOrder
