import { types } from "../../../types/types";

export const setErrorAction = (error) => ({
    type: types.uiSetError,
    payload: error
})
export const unsetErrorAction = (error) => ({
    type: types.uiUnsetError
})