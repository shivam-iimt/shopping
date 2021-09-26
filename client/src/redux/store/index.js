import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "../reducers/Productreducer";
import { singleProductReducer } from "../reducers/singleProductReducer";
import { cartReducer } from "../reducers/cartReducer";
import {userLoginReducer} from '../reducers/userReducer'

const userInfoFromStorage=localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null; 
const cartItemsFromStorage=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: singleProductReducer,
  cart: cartReducer,
  userLogin:userLoginReducer, 
});
const initialState = {
  cart:{cartItems:cartItemsFromStorage},
  userLogin:{userInfo:userInfoFromStorage}
};
const middleware = [thunk]  ; 
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
