import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "../reducers/product/Productreducer";
import { singleProductReducer } from "../reducers/product/singleProductReducer";
import { cartReducer } from "../reducers/cart/cartReducer";
import {userLoginReducer} from '../reducers/user/userLoginReducer'
import {userRegisterReducer} from '../reducers/user/userRegisterReducer'
import {userDetailsReducer} from '../reducers/user/userDetailsReducer'
import {userUpdateProfileReducer} from '../reducers/user/userUpdateProfile'
import {orderCreateReducer} from '../reducers/order/orderReducer'
import {orderDetailsReducer} from '../reducers/order/orderDetailsReducer'
import {orderPayReducer} from '../reducers/order/orderPayReducer'

const shippingAddressFromStorage=localStorage.getItem('shippingAddress')?JSON.parse(localStorage.getItem('shippingAddress')):{}
const userInfoFromStorage=localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null; 
const cartItemsFromStorage=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: singleProductReducer,
  cart: cartReducer,
  userLogin:userLoginReducer,
  userRegister:userRegisterReducer,
  userDetails:userDetailsReducer,
  userUpdateProfile:userUpdateProfileReducer,
  orderCreate:orderCreateReducer,
  orderDetails:orderDetailsReducer,
  orderPay:orderPayReducer,
  
});
const initialState = {
  cart:{cartItems:cartItemsFromStorage,
  shippingAddress:shippingAddressFromStorage},
  userLogin:{userInfo:userInfoFromStorage} 
};
const middleware = [thunk]  ; 
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
