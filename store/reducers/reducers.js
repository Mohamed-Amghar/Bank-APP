import { combineReducers } from "redux";
import beneficiariesReducer from "./beneficiaryReducer";

const reducers = combineReducers({
  benf: beneficiariesReducer,
});

export default reducers;
