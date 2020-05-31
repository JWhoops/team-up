import React from 'react';
import './ProfilePage.css';
import Project from './components/Project';

function ProfilePage() {
    return (
        <div className="profile-page-container">
            <div className="profile-page-general-info">
                <div id="profile-page-avatar"></div>
                <div id="profile-page-username">英语太次郎</div>
                <div id="profile-page-abilities">
                    <div className="ability">导演</div>
                    <div className="ability">编剧</div>
                    <div className="ability">摄影</div>
                </div>
            </div>
            
            
            <div id="profile-page-rating">
                评分：3.5
            </div>
            <div id="profile-page-message">
                发送信息
            </div>
            <div id="profile-page-projects-created">
                <h3>创建的项目:</h3>
                <div className="profile-page-projects-list">
                    <Project projectName="英语口语入门"/>
                    <Project projectName="四六级教程"/>
                    <Project projectName="英语在吃鸡中的应用"/>
                </div>
            </div>
            <div id="profile-page-projects-joined">
                <h3>加入的项目:</h3>
                <div className="profile-page-projects-list">
                    <Project projectName="次语言设计"/>
                </div>
            </div>
            <div id="profile-page-projects-watching">
                <h3>关注的项目:</h3>
                <div className="profile-page-projects-list">
                    <Project projectName="现代语言设计"/>
                    <Project projectName="郭语言"/>
                    <Project projectName="Giao语言简史"/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;