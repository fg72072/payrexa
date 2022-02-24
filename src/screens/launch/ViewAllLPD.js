import { useState } from "react";
import { Container,Row,Col,Form,Dropdown,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import LeagueImage from "../../assets/images/league.png";
import VoxiesImage from "../../assets/images/voxies.jpg";
import Logo from "../../assets/images/logo.png"



function ViewAllLPD(props){

    
    return (
        <>
        {props.header}

            {props.sidebar}
            <div className="dashboard-main">
                <div className="normal-box big-bg">
                <div class=" d-flex justify-content-between align-items-center">
                    <div className="back-link m-0">
                    <Link to={'/'}><i class="fa-solid fa-angle-left"></i> HomePage</Link>
                    </div>
                    <div>
                    <Link to={'/launch/pad'} className="custom-btn primary-btn">Launchpool</Link>
                    </div>
                
                </div>
                </div>
               
            </div>
               
            <div className=" dashboard-main support-padding">
               <div className="dashboard-margin">
               <h3>PayRexa Launchpad</h3>
                <Row className="gy-4">
                    <Col lg={12}>
                   <Link to={'/subscription/league'} className="normal-anchor">
                   <Row>
                        <Col lg={4} md={4}>
                    <img src={LeagueImage} className="pad-img"/>
                    </Col>
                    <Col lg={8} md={8}>
                        <Row>
                            <Col lg={6}>
                            <h4>League of Kindoms</h4>
                        <p>A Blockchain MMO Strategy Game.</p>
                        <div className="pad-flex">
                            <span>Tokens Offered</span>
                            <span className="f-bold">25,000,000.0000 LOKA</span>
                        </div>
                        <div className="pad-flex">
                            <span>Sale Price</span>
                            <span className="f-bold">1 LOKA = 0.00033971 BNB</span>
                        </div>
                            </Col>
                            <Col lg={12}>
                            <div className="pad-flex align-items-center">
                            <span>Time Left Until subscription start</span>
                            <div className="pad-flex">
                            <div className="pad-time">
                            <span className="f-bold">08 </span><span>Days</span>
                            </div>
                            <div className="pad-time">
                            <span className="f-bold">08 </span><span>Hours</span>
                            </div>
                            <div className="pad-time">
                            <span className="f-bold">08 </span><span>Minutes</span>
                            </div>
                          
                            </div>
                        </div>
                            </Col>
                        </Row>
                        
                    </Col>
                        </Row>
                   </Link>
                    </Col>
                    <Col lg={12}>
                   <Link to={'/subscription/voxies'} className="normal-anchor">
                   <Row>
                        <Col lg={4} md={4}>
                    <img src={VoxiesImage} className="pad-img"/>
                    </Col>
                    <Col lg={8} md={8}>
                        <Row>
                            <Col lg={6}>
                            <h4>Voxies</h4>
                        <p>A Blockchain MMO Strategy Game.</p>
                        <div className="pad-flex">
                            <span>Tokens Offered</span>
                            <span className="f-bold">25,000,000.0000 LOKA</span>
                        </div>
                        <div className="pad-flex">
                            <span>Sale Price</span>
                            <span className="f-bold">1 LOKA = 0.00033971 BNB</span>
                        </div>
                            </Col>
                            <Col lg={12}>
                            <div className="pad-flex align-items-center">
                            <span>Time Left Until subscription start</span>
                            <div className="pad-flex">
                            <div className="pad-time">
                            <span className="f-bold">08 </span><span>Days</span>
                            </div>
                            <div className="pad-time">
                            <span className="f-bold">08 </span><span>Hours</span>
                            </div>
                            <div className="pad-time">
                            <span className="f-bold">08 </span><span>Minutes</span>
                            </div>
                          
                            </div>
                        </div>
                            </Col>
                        </Row>
                        
                    </Col>
                        </Row>
                   </Link>
                    </Col>
                </Row>
               </div>
            </div>
            {props.footer}

        </>
    )

}
export default ViewAllLPD;