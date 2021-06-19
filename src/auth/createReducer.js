import { combineReducers } from "redux";

// local redux
import auth from "../reducer";

export default  () =>
    combineReducers({
        auth,
    });
