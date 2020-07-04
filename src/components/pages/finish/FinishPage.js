import React, {useEffect, useState} from 'react';
import { Button, Row, Col } from "react-bootstrap";
import FinishCard from "./components/FinishCard";
import PlusButton from "../../PlusButton";
import { useSelector, useDispatch } from 'react-redux';
import { showFinishTeams } from '../../../actions/teamActions'
import './FinishPage.css';

import ReactDom from 'react-dom';
import 'react-area-linkage/dist/index.css';
import { AreaSelect, AreaCascader } from 'react-area-linkage'; //https://github.com/dwqs/react-area-linkage
import { pca } from 'area-data';

function FinishPage() {
    const [selected, setSelected] = useState([]); //location selection
    const [shown, setShown] = useState(false);

    const finishTeams = useSelector(state => state.finishTeams);
    const { loading, finish_teams, error } = finishTeams;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showFinishTeams());
    }, [])

    return (
        <div id="finish-container">
            <Row className="finish-option-container">
                <Col lg={3.5}>
                    <AreaSelect size="small" data={pca} placeholders={shown?selected:['选择省','选择市']} onChange={val=>{setSelected(val)}}/>
                </Col>
                <Col>
                    <p className="finish-option-lbl">目前为您展示XXX范围完成项目</p>
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