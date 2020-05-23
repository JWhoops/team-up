import { RECRUIT_TEAMS_REQUEST, RECRUIT_TEAMS_SUCCESS, RECRUIT_TEAMS_FAIL } from "../constants/teamConstant"


const showReqcruitingTeams = (location = '') => async (dispatch) => {
    try {
        dispatch({ type: RECRUIT_TEAMS_REQUEST });
        const teams = "jiji";
        dispatch({ type: RECRUIT_TEAMS_SUCCESS, payload: teams });
    } catch (error) {
        dispatch({ type: RECRUIT_TEAMS_FAIL, payload: error.message });
    }
}

export { showReqcruitingTeams };