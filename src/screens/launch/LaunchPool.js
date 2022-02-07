import { useState } from "react";
import { Container,Row,Col,Form,Dropdown,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import LeagueImage from "../../assets/images/league.png";
import VoxiesImage from "../../assets/images/voxies.jpg";
import Logo from "../../assets/images/logo.png"



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
                                <h4>League of Kindoms</h4>
                                <p>A Blockchain MMO Strategy Game.</p>
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
                                <button className="custom-btn primary-btn">LOKA Research Report</button>
                                <button className="custom-btn primary-btn">FAQ</button>

                            </div>
                        
                            </Col>
                           
                        </Row>
                        
                    </Col>
                        </Row>
                    </Col>
                    <Col lg={12}>
                    <div className="dashboard-margin mt-5">
                   <div className="d-flex justify-content-between align-items-center">
                    <div>
                       <Link to={'#'} className="">Launchpad History</Link>
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
                            <span>Type</span>
                            <span className="f-bold">Subscription</span>
                        </div>
                        <div className="div">
                            <span>Sale Price</span>
                            <span className="f-bold">1 LOKA = 0.00033971 BNB</span>
                        </div>
                        <div className="div">
                            <span>Tokens Offered</span>
                            <span className="f-bold">25,000,000.0000 LOKA</span>
                        </div>
                        <div className="div">
                            <span>Single Initial Investment</span>
                            <span className="f-bold">Single Initial Investment</span>
                        </div>
                        <div className="div">
                            <span>Hard cap per user</span>
                            <span className="f-bold">93750 LOKA = 31.8478 BNB (≈ 12036 USD)</span>
                        </div>
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