import {types} from '../../../types/types';

const defaultState = {
    onLoading: false,
    messageError: null
}

export const uiAuthReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                messageError: action.payload
            }
        case types.uiUnsetError:
            return {
                ...state,
                messageError: null
            }
        default:
            return state;
    }
}