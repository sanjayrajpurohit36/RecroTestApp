import axios from "axios";

export const getDefaultData = (start, dispatch) => {
  const limit = 10;
  axios
    .get(
      ` http://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit} `
    )
    .then((response) => {
      debugger;
      console.log("testing api response. ===>", response);
      dispatch({ type: "TEST_ACTION", payload: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
};
