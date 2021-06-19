import axios from "axios";

// local redux
import {
    UPDATE_USER,

} from "./types";


const loginUser = (user) => async (dispatch, getState) => {
    if(user && user.Email) {
        user.authenticated = true
    }
    dispatch({
        type: UPDATE_USER,
        payload: user,
    });
};


export default {
    loginUser,
};
