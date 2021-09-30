import {USER_DETAILS_FAIL,USER_DETAILS_REQUEST,USER_DETAILS_SUCCESS} from '../../constants/userConstant'
export const userDetailsReducer=(state={user:{}},action)=>{
    switch(action.type){
        case USER_DETAILS_REQUEST:
            return {
                ...state,
                loading:true,

            }
            break;
        case USER_DETAILS_SUCCESS:
                return {
                    loading:false,
                user :action.payload
                    }
                    break;
        case USER_DETAILS_FAIL :
            return {
                loading:false,
                error:action.payload
            }
        
        default:
            return state
    }
        
    }
