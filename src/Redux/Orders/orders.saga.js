import orderTypes from "./orders.types";
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { handleSaveOrderHistory, handleGetOrderHistory, handleGetOrderDetail, handleGetSellerOrderHistory, handleOrderUpdate } from './orders.helper';
import { clearCart } from '../../Redux/Cart/cart.actions'
import { auth } from "../../Firebase/utils";
import { setUserOrderHistory, setOrderDetail, setSellerOrderHistory, getUserOrderHistory} from "./orders.actions";


export function* getOrderHistory({ payload }) {
    try {
        const history = yield handleGetOrderHistory(payload);
        yield put(setUserOrderHistory(history));
    } catch (err) {
        console.log(err);
    }
}

export function* onGetUserOrderHistoryStart() {
    yield takeLatest(orderTypes.GET_USER_ORDER_HISTORY_START, getOrderHistory);
}

export function* getSellerOrderHistory({ payload }) {
    try {
        const history = yield handleGetSellerOrderHistory(payload);
        yield put(setSellerOrderHistory(history));
    } catch (err) {
        console.log(err);
    }
}

export function* onGetSellerOrderHistory() {
    yield takeLatest(orderTypes.GET_SELLER_ORDER_HISTORY, getSellerOrderHistory);
}

export function* saveOrderHistory({ payload }) {
    try {
        const timestamps = new Date();
        yield handleSaveOrderHistory({
            ...payload,
            orderUserId: auth.currentUser.uid,
            orderCreatedDate: timestamps
        })
        yield put(clearCart())
    } catch (err) {

        console.log(err);
    }
}

export function* onSaveOrderHistory() {
    yield takeLatest(orderTypes.SAVE_ORDER_HISTORY_START, saveOrderHistory);
}

export function* getOrderDetail({ payload }) {
    try {
        const order = yield handleGetOrderDetail(payload);
        yield put(setOrderDetail(order));
    } catch (err) {
        // console.log(err);
    }
}

export function* onGetOrderDetailStart() {
    yield takeLatest(orderTypes.GET_ORDER_DETAIL_START, getOrderDetail);
}



//added now
export function* updateOrder({ payload }) {
    try {
      yield handleOrderUpdate(payload);
    const history =  yield handleGetOrderHistory(auth.currentUser.uid);
    yield put(setUserOrderHistory(history));
    } catch (err) {
        console.log(err);
    }
}

//added now
export function* onHandleOrderUpdate (){
    yield takeLatest(orderTypes.UPDATE_ORDER, updateOrder);
}




export default function* orderSaga() {
    yield all([
        call(onSaveOrderHistory),
        call(onGetUserOrderHistoryStart),
        call(onGetOrderDetailStart),
        call(onGetSellerOrderHistory),
        call(onHandleOrderUpdate),//added now
    ])
}