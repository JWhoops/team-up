import { RECRUIT_TEAMS_REQUEST, RECRUIT_TEAMS_SUCCESS, RECRUIT_TEAMS_FAIL } from "../constants/teamConstant"


const reqcruitingTeams = (location = '') => async (dispatch) => {
    try {
        dispatch({ type: RECRUIT_TEAMS_REQUEST });
        const { teams } = "";
        dispatch({ type: RECRUIT_TEAMS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: RECRUIT_TEAMS_FAIL, payload: error.message });
    }
}

export { reqcruitingTeams };