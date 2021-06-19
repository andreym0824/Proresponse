import {
    UPDATE_USER,
} from "./types";

const init = () => ({
    user: {
        authenticated: false,
    }, 
});

export const AuthReducer = (state = init(), action) => {
    switch (action.type) {
        // case ACCEPT_COOKIE:
        //   return { ...state, cookieAccepted: true };
        case UPDATE_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                },
            };
        default:
            return state;
    }
};

export default AuthReducer;
