import React, { useEffect } from 'react';
import './RecruitDetailPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { showRecruitDetail } from '../../../actions/teamActions';

function RecruitDetailPage() {
    const recruitDetail = useSelector(state => state.recruitDetail);
    const { loading, recruit_detail, error } = recruitDetail;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showRecruitDetail());
        console.log(recruit_detail);
    }, [])

    return (
        <div id="recruit-detail-container">
            <div className="recruit-detail-info-boxes" id="recruit-detail-general-info">
                <div>
                    <div id="general-info-head">
                        <h4 id="recruit-detail-movie-title">{recruit_detail.title}</h4>
                        <h4 id="recruit-detail-expiration-time">(剩余{recruit_detail.expiration_time}天)</h4>
                    </div>
                    <div id="detail-leader-info-container">
                        <div id="recruit-detail-location">{recruit_detail.location}</div>
                        <div id="recruit-detail-leader">{recruit_detail.leader}</div>
                        <h4 id="recruit-detail-follower">{recruit_detail.follower}关注</h4>
                    </div>
                </div>
                <div id="general-info-head-right">
                    <div id="recruit-detail-favorite-btn">Star</div>
                    <div id="recruit-detail-join-btn">申请加入</div>
                </div>
            </div>
            <div className="recruit-detail-info-boxes">
                <p className="recruit-detail-sub-box">描述: <span>{recruit_detail.description}</span></p>
            </div>
            <div className="recruit-detail-info-boxes">
                <p className="recruit-detail-sub-box">仍需:
                {
                    recruit_detail.jobs_needs.map(jn=>(<span>{jn.number}x{jn.job}</span>))
                }
                </p>
            </div>
            <div className="recruit-detail-info-boxes ">
                <p className="recruit-detail-sub-box ">组员:</p>
                <div className="recruit-detail-member-container" >
                    {
                        recruit_detail.members.map((member=>(
                            <div className="recruit-detail-member-card">
                                <div className="recruit-detail-member-avatar"></div>
                                <div className="recruit-detail-member-role">{member.name}: {member.job}</div>
                            </div>
                        )))
                    }
                </div>
            </div>
            <div className="recruit-detail-info-boxes ">
                <h5 id="recruit-detail-comment-title">评论:</h5>
                {
                    recruit_detail.comments.map(comment=>(
                    <p className="recruit-detail-comment" ><span className="recruit-detail-comment-username">{comment.username}:</span> {comment.comment}</p>
                    ))
                }
                <div id="recruit-detail-comment-btn">添加评论</div>
            </div>
        </div >
    )
}

export default RecruitDetailPage;