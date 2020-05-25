import {
    RECRUIT_TEAMS_REQUEST, RECRUIT_TEAMS_SUCCESS, RECRUIT_TEAMS_FAIL,
    PROGRESS_TEAMS_REQUEST, PROGRESS_TEAMS_SUCCESS, PROGRESS_TEAMS_FAIL
} from '../constants/teamConstant';

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

function progressTeamsReducer(state = { progress_teams: [] }, action) {
    switch (action.type) {
        case PROGRESS_TEAMS_REQUEST:
            return { loading: true, progress_teams: [] };
        case PROGRESS_TEAMS_SUCCESS:
            return { loading: false, progress_teams: action.payload };
        case PROGRESS_TEAMS_FAIL:
            return { loding: false, error: action.payload };
        default:
            return state;
    }
}

export { recruitingTeamsReducer, progressTeamsReducer }