import orderTypes from './orders.types';

export const saveOrderHistory = order => ({
    type: orderTypes.SAVE_ORDER_HISTORY_START,
    payload: order
});

export const getUserOrderHistory = uid => ({
    type: orderTypes.GET_USER_ORDER_HISTORY_START,
    payload: uid
});

export const setUserOrderHistory = history => ({
    type: orderTypes.SET_USER_ORDER_HISTORY,
    payload: history
});

export const getOrderDetailStart = orderID => ({
    type: orderTypes.GET_ORDER_DETAIL_START,
    payload: orderID
});

export const setOrderDetail = order => ({
    type: orderTypes.SET_ORDER_DETAIL,
    payload: order
});

export const getSellerOrderHistory = (uid) => ({
    type: orderTypes.GET_SELLER_ORDER_HISTORY,
    payload: uid
});

export const setSellerOrderHistory = history => ({
    type: orderTypes.SET_SELLER_ORDER_HISTORY,
    payload: history
})
//added now
export const updateOrder = orderId => ({
    type:orderTypes.UPDATE_ORDER,
    payload: orderId
});
