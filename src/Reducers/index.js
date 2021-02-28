import { combineReducers } from "redux";
import { itemsReducer as IRS } from "./itemsReducer";
import { ownerReducer as ORS } from "./ownerReducer";
import { singleItemReducer as SIR } from './singleItemReducer';

export default combineReducers({
  IRS,
  ORS,
  SIR,
});
