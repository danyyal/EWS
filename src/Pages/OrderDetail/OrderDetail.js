import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { auth } from '../../Firebase/utils'

import { getOrderDetailStart } from '../../Redux/Orders/orders.actions'
import Order from '../../Components/Order/Order';
import './OrderDetail.css';
const mapState = ({ orderData }) => ({
    orderDetail: orderData.orderDetail
})

const OrderDetail = () => {
    const userId = auth.currentUser?.uid
    const { orderID,seller } = useParams();
    const dispatch = useDispatch();
    const { orderDetail } = useSelector(mapState);
    const { orderTotal } = orderDetail;
    useEffect(() => {
        dispatch(getOrderDetailStart(orderID));
    }, []);

    return (
        <div className="orderHistoryDetail">
            <h1 className="orderHistoryDetailHeading">Order ID:#{orderID} </h1>
            <Order 
                order={orderDetail}
                seller={seller}
                userId={userId}
             />
            <h3 className="orderHistoryDetailTotal">Order Total:{orderTotal}</h3>
        </div>
    )
}

export default OrderDetail
