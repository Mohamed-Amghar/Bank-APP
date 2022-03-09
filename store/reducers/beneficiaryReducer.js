import { ADD_BENEFICIARY } from "../actions-creators/beneficiaryAction";
import Beneficiare from "../../models/beneficaireModule";
const initialState = {
  availableBeneficiaries: [],
};

const beneficiariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BENEFICIARY:
      const id = action.payload.id;
      const name = action.payload.name;
      const numAccount = action.payload.numAccount;
      const newBenf = new Beneficiare(id, name, numAccount);
      console.log("benf reducer : " + JSON.stringify(newBenf));
      return {
        ...state,
        availableBeneficiaries: state.availableBeneficiaries.concat(newBenf),
      };

    default:
      return state;
  }
};

export default beneficiariesReducer;
