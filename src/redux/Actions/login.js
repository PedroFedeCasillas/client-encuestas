import axios from "axios";

export const LOGIN = 'LOGIN';

export const login = (user) => {
    return async function (dispatch) {
      try {
       const response = await axios.post("http://localhost:3001/login", user);
      //const response = await axios.post("https://server-greydive-production.up.railway.app/login", user);
      
        return  dispatch({type: LOGIN, payload: response.data});
      } catch (error) {
        console.log("estoy en login",error);
        // throw error;
      }
      
    };
};