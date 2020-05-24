import { RECRUIT_TEAMS_REQUEST, RECRUIT_TEAMS_SUCCESS, RECRUIT_TEAMS_FAIL } from '../constants/teamConstant';

function recruitingTeamsReducer(state = { recruiting_teams: [] }, action) {
    switch (action.type) {
        case RECRUIT_TEAMS_REQUEST:
            return { loading: true, recruiting_teams: [] };
        case RECRUIT_TEAMS_SUCCESS:
            return { loading: false, recruiting_teams: action.payload };
        case RECRUIT_TEAMS_FAIL:
            return { loding: false, error: action.payload };
        default:
            return state;
    }
}

export { recruitingTeamsReducer }