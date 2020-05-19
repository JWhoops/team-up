import React from 'react';
import './RecruitPage.css'
import { Container, Button, Row, Col } from "react-bootstrap"

function RecruitPage() {
    return (
        <Container>
            <Row className="option-container">
                <Col lg={3}>
                    <Button variant="outline-dark">地点</Button>
                    <Button style={{ marginLeft: "10px" }} variant="outline-dark">职位</Button>
                </Col>
                <Col>
                    <p className="option-lbl">目前为您展示XXX范围导演项目</p>
                </Col>
            </Row>
            <Row className="card-row">
                <Col lg={3} md={4} sm={6}>
                    <div className="card"></div>
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <div className="card"></div>
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <div className="card"></div>
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <div className="card"></div>
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <div className="card"></div>
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <div className="card"></div>
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <div className="card"></div>
                </Col>
            </Row>
        </Container>
    )
}

export default RecruitPage;