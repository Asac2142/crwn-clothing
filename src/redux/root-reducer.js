import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //es el localStorage del Browser pero lo maneja redux-persist

import CartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage, //storage: storage
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer
});

export default persistReducer(persistConfig, rootReducer);
