import React from 'react';
import './RecruitDetailPage.css';

function RecruitDetailPage() {
    return (
        <div id="recruit-detail-container">
            <div id="recruit-detail-general-info">
                <div>
                    <div id="general-info-head">
                        <h4 id="recruit-detail-movie-title">大头儿子</h4>
                        <h4 id="recruit-detail-expiration-time">(剩余7天)</h4>
                        <h4 id="recruit-detail-follower">2关注</h4>
                    </div>
                    <div id="detail-leader-info-container">
                        <div id="recruit-detail-location">北京</div>
                        <div id="recruit-detail-leader">Fucking Idiot</div>
                    </div>
                </div>
                <div id="general-info-head-right">
                    <div id="recruit-detail-favorite-btn">Star</div>
                    <div id="recruit-detail-join-btn">申请加入</div>
                </div>

            </div>
        </div>
    )
}

export default RecruitDetailPage;