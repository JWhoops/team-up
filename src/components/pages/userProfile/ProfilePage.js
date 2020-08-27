import React, { useEffect } from 'react';
import './ProfilePage.css';
import Project from './components/Project';
import { useSelector, useDispatch } from 'react-redux';
import { showUserProfile } from '../../../actions/userActions';

function ProfilePage() {
    const userProfile = useSelector(state => state.userProfile);
    const { loading, user_profile, error } = userProfile;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(showUserProfile());
        // console.log(user_profile);
    }, [])

    var abilities = []
    if(user_profile.abilities) {
        for(let i = 0; i < user_profile.abilities.length; i++) {
            abilities.push(<div className="ability">{user_profile.abilities[i]}</div>)
        }
    }

    return (
        <div className="profile-page-container">
            <div className="profile-page-general-info">
                <div id="profile-page-avatar"></div>
                <div id="profile-page-username">{user_profile.username}</div>
                {/* <div id="profile-page-abilities">
                    <div className="ability">导演</div>
                    <div className="ability">编剧</div>
                    <div className="ability">摄影</div>
                </div> */}
                {/* {console.log(user_profile.abilities.length)} */}
                <div id="profile-page-abilities">{abilities}</div>
            </div>
            <div id="profile-page-rating">
                评分：
            </div>
            <div id="profile-page-message">
                发送信息
            </div>
            <div id="profile-page-message-border"></div>
            <div id="profile-page-projects-created">
                <h3>创建的项目:</h3>
                <div className="profile-page-projects-list">
                    <Project teamId="1" projectName="英语口语入门"/>
                    <Project teamId="2" projectName="四六级教程"/>
                    <Project teamId="3" projectName="英语在吃鸡中的应用"/>
                </div>
            </div>
            <div id="profile-page-projects-joined">
                <h3>加入的项目:</h3>
                <div className="profile-page-projects-list">
                    <Project teamId="4" projectName="次语言设计"/>
                </div>
            </div>
            <div id="profile-page-projects-watching">
                <h3>关注的项目:</h3>
                <div className="profile-page-projects-list">
                    <Project teamId="5" projectName="现代语言设计"/>
                    <Project teamId="6" projectName="郭语言"/>
                    <Project teamId="7" projectName="Giao语言简史"/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;