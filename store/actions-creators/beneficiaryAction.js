import { API } from "../../constant/Api";
export const ADD_BENEFICIARY = "ADD_BENEFICIARY";

export const addBenf = (name, numAccount) => {
  return async (dispatch) => {
    const response = await fetch(`${API}/beneficiaries.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        numAccount: numAccount,
      }),
    });

    const resData = await response.json();
    console.log("beneficiary response : " + resData);
    dispatch({
      type: ADD_BENEFICIARY,
      payload: {
        id: resData.name,
        name: name,
        numAccount: numAccount,
      },
    });
  };
};
