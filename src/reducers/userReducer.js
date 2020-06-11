import {
    USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_FAIL,
} from '../constants/userConstant';

function userProfileReducer(state = { user_profile: [] }, action) { //have to be []?
    switch (action.type) {
        case USER_PROFILE_REQUEST:
            return { loading: true, user_profile: [] };
        case USER_PROFILE_SUCCESS:
            return { loading: false, user_profile: action.payload };
        case USER_PROFILE_FAIL:
            return { loding: false, error: action.payload };
        default:
            return state;
    }
}

export {userProfileReducer}