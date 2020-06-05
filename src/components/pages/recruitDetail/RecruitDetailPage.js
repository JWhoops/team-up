import React from 'react';
import './RecruitDetailPage.css';

function RecruitDetailPage() {
    return (
        <div id="recruit-detail-container">
            <div className="recruit-detail-info-boxes" id="recruit-detail-general-info">
                <div>
                    <div id="general-info-head">
                        <h4 id="recruit-detail-movie-title">大头儿子</h4>
                        <h4 id="recruit-detail-expiration-time">(剩余7天)</h4>
                    </div>
                    <div id="detail-leader-info-container">
                        <div id="recruit-detail-location">北京</div>
                        <div id="recruit-detail-leader">Fucking Idiot</div>
                        <h4 id="recruit-detail-follower">2关注</h4>
                    </div>
                </div>
                <div id="general-info-head-right">
                    <div id="recruit-detail-favorite-btn">Star</div>
                    <div id="recruit-detail-join-btn">申请加入</div>
                </div>
            </div>
            <div className="recruit-detail-info-boxes">
                <p className="recruit-detail-sub-box">描述: <span>这个剧本超棒</span></p>
            </div>
            <div className="recruit-detail-info-boxes">
                <p className="recruit-detail-sub-box">仍需: <span>1x导演，2x摄像</span></p>
            </div>
            <div className="recruit-detail-info-boxes ">
                <p className="recruit-detail-sub-box ">组员:</p>
                <div className="recruit-detail-member-container" >
                    <div className="recruit-detail-member-card">
                        <div className="recruit-detail-member-avatar"></div>
                        <div className="recruit-detail-member-role">演员</div>
                    </div>
                    <div className="recruit-detail-member-card">
                        <div className="recruit-detail-member-avatar"></div>
                        <div className="recruit-detail-member-role">编剧</div>
                    </div>
                </div>
            </div>
            <div className="recruit-detail-info-boxes ">
                <h5 id="recruit-detail-comment-title">评论:</h5>
                <p className="recruit-detail-comment" ><span className="recruit-detail-comment-username">DDDDD:</span> 拍的很好</p>
                <p className="recruit-detail-comment" > <span className="recruit-detail-comment-username">我是香蕉: </span>666666666</p>
                <p className="recruit-detail-comment" > <span className="recruit-detail-comment-username">水儿: </span>我是水牙</p>
                <div id="recruit-detail-comment-btn">添加评论</div>
            </div>
        </div >
    )
}

export default RecruitDetailPage;