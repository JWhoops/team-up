import React, { useEffect, useState } from 'react';
import './RecruitPage.css';
import { Container, Button, Row, Col } from "react-bootstrap";
import RecruitCard from "./components/RecruitCard";
import PlusButton from "../../PlusButton";
import { useSelector, useDispatch } from 'react-redux';
import { showReqcruitingTeams } from '../../../actions/teamActions';
import { Redirect } from 'react-router';//
import { render } from '@testing-library/react';

// location selection
import ReactDom from 'react-dom';
import 'react-area-linkage/dist/index.css';
import { AreaSelect, AreaCascader } from 'react-area-linkage'; // https://github.com/dwqs/react-area-linkage
import { pca } from 'area-data';

// jobs selection
import { Multiselect } from "multiselect-react-dropdown"; // https://www.npmjs.com/package/multiselect-react-dropdown

function RecruitPage() {
    const options = [
        { label: "男优", value: "actor" },
        { label: "女优", value: "actress" },
        { label: "导演", value: "director" },
        { label: "编剧", value: "screenwriter" },
        { label: "摄影", value: "cinematographer" },
        { label: "后期", value: "editor" },
        { label: "制片", value: "producer" },
        { label: "顾问", value: "advisor" },
        { label: "其他", value: "others" },
    ];

    const job_style = {
        chips: {
          background: "black",
          "border-radius": ".2rem",
          "margin-bottom": ".75%",
          "paddingLeft": ".3rem",
          "paddingRight": ".2rem",
          height: "1.5rem"
        },
        searchBox: {
            // "width": "60%",
        //   border: "none",
        //   "border-bottom": "1px solid blue",
        //   background: "#eee",
          "border-radius": ".25rem",
          padding: ".75%",
          "padding-bottom": "0"
        },
        inputField: {
            margin: 0,
            "margin-bottom": ".75%",
            "font-size": ".9rem"
        },
        multiselectContainer: {
          color: "red"
        },
        option: {
            color: "black",
        }
    };

    const [location_selected, setLocationSelected] = useState([]); // location selection
    const [shown, setShown] = useState(false);

    const [jobs_selected, setJobsSelected] = useState([]); // jobs selection

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
                <Col lg={3.5}>
                    <AreaSelect size="small" data={pca} placeholders={shown?location_selected:['选择省','选择市']} onChange={val=>{setLocationSelected(val)}}/>
                </Col>
                <Col>
                    <Multiselect 
                        options={options}
                        selectedValues={jobs_selected}
                        onSelect={(item)=>{
                            jobs_selected.push(item);
                        }}
                        onRemove={(item)=>{
                            for(let i=0; i<jobs_selected.length; i++){
                                if(item===jobs_selected[i]){
                                    jobs_selected.splice(i,1);
                                }
                            }
                        }}
                        displayValue="label"
                        closeIcon="cancel"
                        style={job_style}
                    />
                </Col>
                {/* <Col lg={1}>
                    <Button id="recruit-btn" style={{ marginLeft: "10px" }} variant="outline-dark">职位</Button>
                </Col> */}
                <Col>
    <p className="option-lbl">目前为您展示xxx范围导演项目</p>
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