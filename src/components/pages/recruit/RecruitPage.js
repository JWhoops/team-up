import React, { useEffect, useState } from 'react';
import './RecruitPage.css';
import { Container, Button, Row, Col } from "react-bootstrap";
import RecruitCard from "./components/RecruitCard";
import PlusButton from "../../PlusButton";
import { useSelector, useDispatch } from 'react-redux';
import { showReqcruitingTeams } from '../../../actions/teamActions';
import { Redirect } from 'react-router';//
import { render } from '@testing-library/react';

import ReactDom from 'react-dom';
import 'react-area-linkage/dist/index.css';
import { AreaSelect, AreaCascader } from 'react-area-linkage';
import { pca } from 'area-data';

function RecruitPage() {
    const [selected, setSelected] = useState([]); //location selection
    const [shown, setShown] = useState(false);

    const recruitingTeams = useSelector(state => state.recruitingTeams);
    const { loading, recruiting_teams, error } = recruitingTeams;
    const dispatch = useDispatch();

    // componentDidMount???
    useEffect(() => {
        dispatch(showReqcruitingTeams());
    }, [])

    // const { placeholders } = this.props; //?

    return (
        <div id="recruit-container">
            <Row className="option-container">
                <Col lg={4}>
                    <AreaSelect data={pca} placeholders={shown?selected:['选择省','选择市']} onChange={val=>{setSelected(val)}}/>
                </Col>
                <Col lg={2}>
                    <Button id="recruit-btn" style={{ marginLeft: "10px" }} variant="outline-dark">职位</Button>
                </Col>
                <Col>
                    <p className="option-lbl">目前为您展示XXX范围导演项目</p>
                </Col>
            </Row>
            <Row className="card-row">
                {recruiting_teams.map(rt => (
                    < Col key={rt._id} lg={4} md={6} sm={6} xs={12}>
                        <RecruitCard team={rt} />
                    </Col>
                ))}
            </Row>
            <PlusButton />
        </div>
    )
}

export default RecruitPage;