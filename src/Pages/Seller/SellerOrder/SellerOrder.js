import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SellerDesign from '../SellerDesign';
import OrderHistory from '../../../Components/OrderHistory/OrderHistory'
import { getSellerOrderHistory } from '../../../Redux/Orders/orders.actions'
import './SellerOrder.css'

const mapState = ({ user, orderData }) => ({
  currentUser: user.currentUser,
  orderHistory: orderData.orderHistory.data
})
const SellerOrder = () => {
  const dispatch = useDispatch();
  const { currentUser, orderHistory } = useSelector(mapState)
  console.log("This is the order history we got from the api hit made to the firebase ", orderHistory)
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
