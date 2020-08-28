import React, { useEffect } from 'react';
import './ProfilePage.css';
import Project from './components/Project';
import { useSelector, useDispatch } from 'react-redux';
import { showUserProfile } from '../../../actions/userActions';
import { USER_PROFILE_FAIL } from '../../../constants/userConstant';

function ProfilePage() {
    const userProfile = useSelector(state => state.userProfile);
    const { loading, user_profile, error } = userProfile;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(showUserProfile());
        // console.log(user_profile);
    }, [])

    const abilities = [];
    if(user_profile.abilities) {
        for(let i = 0; i < user_profile.abilities.length; i++) {
            abilities.push(<div className="ability">{user_profile.abilities[i]}</div>)
        }
    }

    const projects_created = [];
    if(user_profile.projects_created) {
        for(let i = 0; i < user_profile.projects_created.length; i++) {
            let proj = user_profile.projects_created[i];
            projects_created.push(<Project teamId={proj.id} projectName={proj.ProjectName}/>)
        }
    }

    const projects_joined = [];
    if(user_profile.projects_joined) {
        for(let i = 0; i < user_profile.projects_joined.length; i++) {
            let proj = user_profile.projects_joined[i];
            projects_joined.push(<Project teamId={proj.id} projectName={proj.ProjectName}/>)
        }
    }

    const projects_watching = [];
    if(user_profile.projects_watching) {
        for(let i = 0; i < user_profile.projects_watching.length; i++) {
            let proj = user_profile.projects_watching[i];
            projects_watching.push(<Project teamId={proj.id} projectName={proj.ProjectName}/>)
        }
    }

    return (
        <div className="profile-page-container">
            <div className="profile-page-general-info">
                <div id="profile-page-avatar"></div>
                <div id="profile-page-username">{user_profile.username}</div>
                <div id="profile-page-abilities">{abilities}</div>
            </div>
            <div id="profile-page-rating">
                评分：{user_profile.rating}
            </div>
            <div id="profile-page-message">
                发送信息
            </div>
            <div id="profile-page-message-border"></div>
            <div id="profile-page-projects-created">
                <h3>创建的项目:</h3>
                <div className="profile-page-projects-list">
                    {projects_created}
                </div>
            </div>
            <div id="profile-page-projects-joined">
                <h3>加入的项目:</h3>
                <div className="profile-page-projects-list">
                    {projects_joined}
                </div>
            </div>
            <div id="profile-page-projects-watching">
                <h3>关注的项目:</h3>
                <div className="profile-page-projects-list">
                    {projects_watching}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;