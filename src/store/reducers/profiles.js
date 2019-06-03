import { SAVE_PROFILE } from '../actions/profiles-actions';

const initialState = {
    profiles: []
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_PROFILE:
            console.log(action);
            return {
                ...state,
                profiles: action.payload.profile
            }
        default:
            return state;
    }
};