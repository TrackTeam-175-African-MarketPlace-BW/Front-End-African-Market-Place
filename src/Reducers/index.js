import { combineReducers } from "redux";
import { itemsReducer as IRS } from "./itemsReducer";
import { ownerReducer as ORS } from "./ownerReducer";

export default combineReducers({
  IRS,
  ORS,
});
