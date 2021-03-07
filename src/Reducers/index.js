import { combineReducers } from "redux";
import { itemsReducer as IRS } from "./itemsReducer";
import { ownerReducer as ORS } from "./ownerReducer";
import { shoppingCartReducer as SCR } from "./shoppingCartReducer";

export default combineReducers({
  IRS,
  ORS,
  SCR,
});
