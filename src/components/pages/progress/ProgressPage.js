import React, { useEffect } from 'react';
import './ProgressPage.css';
import { Button, Row, Col } from "react-bootstrap";
import ProgressCard from "./components/ProgressCard";
import PlusButton from "../../PlusButton";
import { useSelector, useDispatch } from 'react-redux';
import { showProgressTeams } from '../../../actions/teamActions'

function ProgressPage() {
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
                <Col lg={4}>
                    <Button variant="outline-dark">地点</Button>
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