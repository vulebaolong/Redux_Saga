const initialState = {
    userLogin: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SAVE_USER_LOGIN": {
            const copyState = JSON.parse(JSON.stringify(state));
            copyState.userLogin = payload;
            return { ...state, userLogin: copyState.userLogin };
        }

        default:
            return state;
    }
};