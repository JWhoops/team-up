import {
    RECRUIT_TEAMS_REQUEST, RECRUIT_TEAMS_SUCCESS, RECRUIT_TEAMS_FAIL,
    PROGRESS_TEAMS_REQUEST, PROGRESS_TEAMS_SUCCESS, PROGRESS_TEAMS_FAIL,
    FINISH_TEAMS_REQUEST, FINISH_TEAMS_SUCCESS, FINISH_TEAMS_FAIL,
    RECRUIT_DETAIL_REQUEST, RECRUIT_DETAIL_SUCCESS, RECRUIT_DETAIL_FAIL,
} from "../constants/teamConstant"

const showReqcruitingTeams = (location = '') => async (dispatch) => {
    try {
        dispatch({ type: RECRUIT_TEAMS_REQUEST });
        // mock API
        var res = require("../API/recruitingTeams.json")
        dispatch({ type: RECRUIT_TEAMS_SUCCESS, payload: res.teams });
    } catch (error) {
        dispatch({ type: RECRUIT_TEAMS_FAIL, payload: error.message });
    }
}

const showProgressTeams = (location = '') => async (dispatch) => {
    try {
        dispatch({ type: PROGRESS_TEAMS_REQUEST });
        // mock API
        var res = require("../API/progressTeams.json")
        dispatch({ type: PROGRESS_TEAMS_SUCCESS, payload: res.teams });
    } catch (error) {
        dispatch({ type: PROGRESS_TEAMS_FAIL, payload: error.message });
    }
}

const showFinishTeams = (location = '') => async (dispatch) => {
    try {
        dispatch({ type: FINISH_TEAMS_REQUEST });
        // mock API
        var res = require("../API/finishTeams.json")
        dispatch({ type: FINISH_TEAMS_SUCCESS, payload: res.teams });
    } catch (error) {
        dispatch({ type: FINISH_TEAMS_FAIL, payload: error.message });
    }
}

const showRecruitDetail = (id = '') => async (dispatch) => {
    try {
        dispatch({ type: RECRUIT_DETAIL_REQUEST });
        // mock API
        var res = require("../API/recruitDetail.json")
        dispatch({ type: RECRUIT_DETAIL_SUCCESS, payload:res.detail });
    } catch (error) {
        dispatch({ type: RECRUIT_DETAIL_FAIL, payload: error.message });
    }
}

export { showReqcruitingTeams, showProgressTeams, showFinishTeams, showRecruitDetail };