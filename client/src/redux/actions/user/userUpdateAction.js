import {USER_UPDATE_PROFILE_FAIL,USER_UPDATE_PROFILE_SUCCESS,USER_UPDATE_PROFILE_REQUEST,USER_LOGIN_SUCCESS} from '../../constants/userConstant'
import axios from 'axios';

export const userUpdateProfile=(user)=> async(dispatch,getState)=>{
    try {
        dispatch({type:USER_UPDATE_PROFILE_REQUEST});
        const {
            userLogin: { userInfo },
          } = getState();
          const config = {
            headers: {
              "Contnet-Type": "application/json",
              Authorization: `Bearer ${userInfo.token}`,
            },
          };
        const {data}= await axios.put('/api/user/update',user,config)

        dispatch({type:USER_UPDATE_PROFILE_SUCCESS,
        payload:data})

    
  
    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
    }
    
}