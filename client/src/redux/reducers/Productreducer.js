import {PRODUCT_LIST_FAILS,PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS} from '../constants/productConstant'
 
export const productListReducer=(state={products:[]},action)=>{
switch (action.type){
    case PRODUCT_LIST_REQUEST:
        return {
            loading:true,
            products:[]
        }
        break;
    case PRODUCT_LIST_SUCCESS:
            return {
                loading:false,
            products:action.payload
                }
                break;
    case PRODUCT_LIST_FAILS :
        return {
            loading:false,
            error:action.payload
        }
    default:
        return state
}
}