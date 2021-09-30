import {CART_PAYMENT_METHOD} from '../../constants/cartConstant'
export const paymentMethod = (data)=>(dispatch)=>{
    dispatch({
        type:CART_PAYMENT_METHOD,
        payload:data
    })
    localStorage.setItem("paymentMethod",JSON.stringify(data));
}