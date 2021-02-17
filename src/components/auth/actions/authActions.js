import { types } from "../../../types/types"

export const loginWithEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(loginAction(123, 'Yo'))
        }, 3500);
    }
}

export const loginAction = (uid, displayName) => (
    {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
)
