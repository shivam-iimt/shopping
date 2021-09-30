import {USER_UPDATE_PROFILE_REQUEST,USER_UPDATE_PROFILE_SUCCESS,USER_UPDATE_PROFILE_FAIL,USER_UPDATE_PROFILE_RESET, USER_DETAILS_FAIL} from '../../constants/userConstant'

export const userUpdateProfileReducer=(state=[],action)=>{
    switch(action.type){
        case USER_UPDATE_PROFILE_REQUEST:
         return   {loading:true,
            }
        case USER_UPDATE_PROFILE_SUCCESS:
            return {
                loading:false,
                success:true,
                userInfo:action.payload
            }
        case USER_DETAILS_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        default: return state
    }
}