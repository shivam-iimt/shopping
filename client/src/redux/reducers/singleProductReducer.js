import {
  SINGLE_PRODUCT_FAILS,
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
} from "../constants/singleProductConstant";

export const singleProductReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case SINGLE_PRODUCT_REQUEST:
      return {
        loading: true,
        ...state,
      };
      break;
    case SINGLE_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
      break;
    case SINGLE_PRODUCT_FAILS:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
