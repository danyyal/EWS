import { all, call } from 'redux-saga/effects';
import userSagas from './User/users.sagas'
import productSagas from './Products/Products.saga';
import orderSaga from './Orders/orders.saga';
import ContactSagas from './Contact/Contact.saga';
import priceRangeSaga from './PriceRanges/PriceRanges.saga';

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(productSagas),
        call(orderSaga),
        call(ContactSagas),
        call(priceRangeSaga),
    ]
        );
}