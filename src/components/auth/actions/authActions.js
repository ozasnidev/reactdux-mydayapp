import { types } from "../../../types/types"
import { firebase, googleAuthProvider } from '../../../firebase/firebaseConfig'

export const loginWithEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(loginAction(123, 'Yo'))
        }, 3500);
    }
}

export const loginWithGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) =>{
                dispatch(loginAction(user.uid, user.displayName))
            })
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
