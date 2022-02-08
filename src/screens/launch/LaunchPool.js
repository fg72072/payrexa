import { useState } from "react";
import { Container,Row,Col,Form,Dropdown,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import LeagueImage from "../../assets/images/league.png";
import VoxiesImage from "../../assets/images/voxies.jpg";
import Logo from "../../assets/images/logo.png"
import HighSecurityIcon from "../../assets/images/high-security-icon.png"



function LaunchPool(props){

    
    return (
        <>
        {props.header}

            {props.sidebar}
            <div className="dashboard-main">
                <div className="normal-box big-bg">
                <div class=" d-flex justify-content-between align-items-center">
                    <div className="back-link m-0">
                    <Link to={'/viewall/lp'}><i class="fa-solid fa-angle-left"></i> Launchpool</Link>
                    </div>
              
                
                </div>
                </div>
               
            </div>
               
            <div className=" dashboard-main support-padding">
               <div className="dashboard-margin">
                <Row>
                    <Col lg={12}>
                   <Row>
                        <Col lg={2}>
                    <img src={LeagueImage} className="pad-img"/>
                    </Col>
                    <Col lg={10}>
                        <Row>
                            <Col lg={12}>
                            <div className="detail-flex-top">
                                <div>
                                <h4>Anchor Protocol</h4>
                                <p>Anchor protocol, a savings protocol offering low-volatile yields on Terra stablecoin deposits.</p>
                                </div>
                                <div className="flex-direction-colum">
                                <span>Time Left Until subscription start</span>
                                <div className="pad-flex mt-0">
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
                            </div>
                            <div className="mt-3">
                                <button className="custom-btn primary-btn">Website</button>
                                <button className="custom-btn primary-btn">Whitepaper</button>
                                <button className="custom-btn primary-btn">View detailed rules</button>
                                <button className="custom-btn primary-btn">ANC Research Report</button>
                                <button className="custom-btn primary-btn">FAQ</button>

                            </div>
                        
                            </Col>
                           
                        </Row>
                        
                    </Col>
                        </Row>
                    </Col>
                    <Col lg={12}>
                    <div className="dashboard-margin mt-5 mb-5">
                   <div className="d-flex justify-content-between align-items-center">
                    <div>
                       <Link to={'/launchpool/ANC_BNB'} className="custom-btn secondary-btn">BNB Pool</Link>
                       <Link to={'/launchpool/ANC_LUNA'} className="custom-btn secondary-btn">LUNA Pool</Link>
                       <Link to={'/launchpool/ANC_BUSD'} className="custom-btn secondary-btn">BUSD Pool</Link>
                    </div>
                   <div>
                   <Link to={'#'} className="anchor">Launchpad History</Link>
                   </div>
                   </div>
                   
                    </div>
                    </Col>
                    <Col lg={12}>
                    <div className="pad-detail-flex">
                        <div className="div">
                            <span>Total BUSD Pool Rewards</span>
                            <span className="f-bold">200,000.0000 ANC</span>
                        </div>
                        <div className="div">
                            <span>Staking Token</span>
                            <span className="f-bold">BUSD</span>
                        </div>
                        <div className="div">
                            <span>Farming Period</span>
                            <span className="f-bold">30 Days</span>
                        </div>
                        <div className="div">
                            <span>Today’s ANC Pool Rewards</span>
                            <span className="f-bold">6,666.6700 ANC</span>
                        </div>
                        <div className="div">
                            <span>Total BUSD Staked</span>
                            <span className="f-bold">768,755,089.3328 BUSD</span>
                        </div>
                    </div>
                    </Col>
                    <Col lg={3}>
                        <div className="mt-5">
                        <img src={HighSecurityIcon}/>
                        <h3>You have not completed identity verification</h3>
                        <Link to={'/kyc'} className="custom-btn primary-btn mt-1">Verify Now</Link>
                        </div>
                    </Col>
                 
                </Row>
               </div>
              
            </div>
            {props.footer}

        </>
    )

}
export default LaunchPool;