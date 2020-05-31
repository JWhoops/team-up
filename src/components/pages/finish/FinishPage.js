import React, {useEffect} from 'react';
import { Button, Row, Col } from "react-bootstrap";
import FinishCard from "./components/FinishCard";
import PlusButton from "../../PlusButton";
import { useSelector, useDispatch } from 'react-redux';
import { showFinishTeams } from '../../../actions/teamActions'
import './FinishPage.css';

function FinishPage() {
    const finishTeams = useSelector(state => state.finishTeams);
    const { loading, finish_teams, error } = finishTeams;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showFinishTeams());
    }, [])

    return (
        <div id="finish-container">
            <Row className="finish-option-container">
                <Col lg={4}>
                    <Button className="finish-btn" variant="outline-dark">地点</Button>
                    <p className="finish-option-lbl">目前为您展示XXX范围完成项目</p>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                {finish_teams.map(rt => (
                    < Col className="finish-Col" key={rt._id} lg={3} md={6} sm={6} xs={12}>
                        <FinishCard team={rt} />
                    </Col>
                ))}
            </Row>
            <PlusButton />
        </div>
    )
}

export default FinishPage;