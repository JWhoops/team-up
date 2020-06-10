import React, { useEffect, useState } from 'react';
import './NewTeamPage.css';
import { Button } from 'react-bootstrap';
import JobTab from './components/JobTab';
import MemberTab from './components/MemberTab';
import AddBtn from './components/AddBtn';

function NewTeamPage() {

    const [teamname, setTeamname] = useState("");
    const [description, setDescription] = useState("");

    const publishClicked = () => {
        console.log(teamname);
        console.log(description);
    }

    return <div id="new-team-container">
        <div className="new-team-blocks">
            <div id="new-team-name">
                <div className="new-team-titles">组名：</div>
                <input
                    type="text"
                    placeholder="小组名称"
                    value={teamname}
                    onChange={e => setTeamname(e.target.value)} //?
                />
            </div>
            <div id="new-team-location">
                <div className="new-team-titles">选择地区：</div>
                <Button variant="outline-dark" id="new-team-select-location">地区</Button>
            </div>
        </div>
        <div className="new-team-blocks">
            <div id="new-team-description-title" className="new-team-titles">描述:</div>
            <div id="new-team-description-content">
                <textarea
                    type="text"
                    placeholder="项目描述"
                    value={description}
                    onChange={e => setDescription(e.target.value)} //?
                ></textarea>
            </div>
        </div>
        <div className="new-team-row-blocks">
            <div id="new-team-jobs-title" className="new-team-titles">仍需：</div>
            <div id="new-team-jobs-list">
                <li>
                    <ul>
                        <JobTab job="1x导演"/>
                    </ul>
                    <ul>
                        <JobTab job="2x男演员"/>
                    </ul>
                    <ul>
                        <JobTab job="3x摄像"/>
                    </ul>
                </li>
                <AddBtn/>
            </div>
        </div>
        <div className="new-team-row-blocks">
            <div id="new-team-members-title" className="new-team-titles">邀请成员：</div>
            <div id="new-team-members-list">
                <li>
                    <ul>
                        <MemberTab name="熊大"/>
                    </ul>
                    <ul>
                        <MemberTab name="光头强"/>
                    </ul>
                </li>
                <AddBtn/>
            </div>
        </div>
        <div className="new-team-btns-block">
            <Button className="new-team-btns">取消</Button>
            <Button className="new-team-btns">发布</Button>
        </div>
    </div>
}

export default NewTeamPage;