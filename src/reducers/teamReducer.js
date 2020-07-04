import {
    RECRUIT_TEAMS_REQUEST, RECRUIT_TEAMS_SUCCESS, RECRUIT_TEAMS_FAIL,
    PROGRESS_TEAMS_REQUEST, PROGRESS_TEAMS_SUCCESS, PROGRESS_TEAMS_FAIL,
    FINISH_TEAMS_REQUEST, FINISH_TEAMS_SUCCESS, FINISH_TEAMS_FAIL,
    RECRUIT_DETAIL_REQUEST, RECRUIT_DETAIL_SUCCESS, RECRUIT_DETAIL_FAIL,
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

function finishTeamsReducer(state = { finish_teams: [] },action) {
    switch (action.type) {
        case FINISH_TEAMS_REQUEST:
            return { loading: true, finish_teams: [] };
        case FINISH_TEAMS_SUCCESS:
            return { loading: false, finish_teams: action.payload };
        case FINISH_TEAMS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function recruitDetailReducer(state = { recruit_detail: {jobs_needs:[], members:[], comments:[]} }, action) {
    switch(action.type) {
        case RECRUIT_DETAIL_REQUEST:
            return { loading: true, recruit_detail: {jobs_needs:[], members:[], comments:[]} };
        case RECRUIT_DETAIL_SUCCESS:
            return { loading: false, recruit_detail: action.payload };
        case RECRUIT_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export { recruitingTeamsReducer, progressTeamsReducer, finishTeamsReducer, recruitDetailReducer }