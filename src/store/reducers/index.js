import { combineReducers } from 'redux';
import {profileReducer} from './profiles';

export const Reducers = combineReducers({
    profilesStore: profileReducer
});