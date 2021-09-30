import {USER_DETAILS_REQUEST,USER_LOGIN_SUCCESS,USER_DETAILS_SUCCESS,USER_DETAILS_FAIL, USER_LOGIN_FAIL} from '../../constants/userConstant'
import axios from 'axios'
export const getUserDetails = (id) =>  async (dispatch,getState)=>{
try {
    dispatch({
       type:USER_DETAILS_REQUEST
    });
    const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Contnet-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
    const { data } = await axios.get(`/api/user/${id}`, config);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
