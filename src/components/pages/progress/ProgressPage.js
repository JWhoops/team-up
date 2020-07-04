import React, { useEffect, useState } from 'react';
import './ProgressPage.css';
import { Button, Row, Col } from "react-bootstrap";
import ProgressCard from "./components/ProgressCard";
import PlusButton from "../../PlusButton";
import { useSelector, useDispatch } from 'react-redux';
import { showProgressTeams } from '../../../actions/teamActions'

import ReactDom from 'react-dom';
import 'react-area-linkage/dist/index.css';
import { AreaSelect, AreaCascader } from 'react-area-linkage'; //https://github.com/dwqs/react-area-linkage
import { pca } from 'area-data';

function ProgressPage() {
    const [selected, setSelected] = useState([]); //location selection
    const [shown, setShown] = useState(false);

    const progressTeams = useSelector(state => state.progressTeams);
    const { loading, progress_teams, error } = progressTeams;
    const dispatch = useDispatch();

    // componentDidMount???
    useEffect(() => {
        dispatch(showProgressTeams());
    }, [])

    return (
        <div id="progress-container">
            <Row className="progress-option-container">
                <Col lg={3.5}>
                    <AreaSelect size="small" data={pca} placeholders={shown?selected:['选择省','选择市']} onChange={val=>{setSelected(val)}}/>
                </Col>
                <Col>
                    <p className="progress-option-lbl">目前为您展示XXX范围导演项目</p>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                {progress_teams.map(rt => (
                    < Col key={rt._id} lg={4} md={6} sm={6} xs={12}>
                        <ProgressCard team={rt} />
                    </Col>
                ))}
            </Row>
            <PlusButton />
        </div>
    )
}

export default ProgressPage;