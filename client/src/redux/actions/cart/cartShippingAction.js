import {CART_SAVE_SHIPPING_ADDRESS} from '../../constants/cartConstant'
const saveShippingAddress=(data)=>dispatch=>{
    dispatch({
        type:CART_SAVE_SHIPPING_ADDRESS,
        payload:data
        
    });

    localStorage.setItem("shippingAddress",JSON.stringify(data)); 
}
export default saveShippingAddress;