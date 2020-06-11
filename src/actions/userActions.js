import {
    USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_FAIL,
} from '../constants/userConstant';

const showUserProfile = (id = '') => async (dispatch) => {
    try {
        dispatch({ type: USER_PROFILE_REQUEST });
        // mock API
        var res = require("../API/userProfile.json")
        dispatch({ type: USER_PROFILE_SUCCESS, payload: res.profile });
    } catch (error) {
        dispatch({ type: USER_PROFILE_FAIL, payload: error.message });
    }
}

export {showUserProfile}