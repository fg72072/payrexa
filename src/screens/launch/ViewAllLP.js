import { useState } from "react";
import { Container,Row,Col,Form,Dropdown,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import LeagueImage from "../../assets/images/league.png";
import Logo from "../../assets/images/logo.png"



function ViewAllLP(props){

    
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
                    <Link to={'/viewall/lpd'} className="custom-btn primary-btn">Launchpad</Link>
                    </div>
                
                </div>
                </div>
               
            </div>
            <div className=" dashboard-main support-padding">
               <div className="dashboard-margin">
                <div className="d-flex justify-content-between align-items-center">
                <h3>Launchpool</h3>
                <button className="custom-btn secondary-btn">Pending Harvest (0)</button>
                </div>
                <div className="launchpad-section">
                <Row>
                    <Col lg={4} md={6}>
                    <div className="custom-box">
                    <div className="farming">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        <span>FARMING</span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <img src={Logo} width={50}/>
                        <h4 className="purple ml-1">HIGH</h4>
                    </div>
                    <div className="mt-3">
                    <span className="normal-text">Highstreet, A Play-to-Earn MMORPG Game on PayRexa Smart Chain</span>
                    </div>
                    <div className="pad-flex">
                            <span>Total Rewards:</span>
                            <span className="f-bold">25,000,000</span>
                        </div>
                        <div className="pad-flex">
                            <span>Farming Period:</span>
                            <span className="f-bold">30 day/s</span>
                        </div>
                        <div className="mt-3">
                            <div className="mt-1 mb-1">
                            <span>Time Left Until subscription start</span>
                            </div>
                            <div className="d-flex">
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
                    </Col>
                    <Col lg={4} md={6}>
                    <div className="pool-box">
                    <div className="d-flex align-items-center justify-content-center mt-4">
                        <img src={Logo} width={50}/>
                        <h4 className="purple ml-1">BUSD Pool</h4>
                    </div>
                    <div className="text-center mt-1">
                    <span className="normal-text ">Stake BUSD, Earn HIGH</span>
                    <div className="mt-3">
                    <img src={Logo} width={70}/>
                    </div>
                    <div className="mt-4">
                    <Link to={'/launchpool/ANC_BUSD'} className="custom-btn primary-btn m-0">Stake</Link>
                    </div>
                    <div>
                    <div className="pad-flex">
                            <span>APY:</span>
                            <span className="f-bold">2.20%</span>
                        </div>
                        <div className="pad-flex">
                            <span>Total Staked:</span>
                            <span className="f-bold">234,234,342 BUSD</span>
                        </div>
                    </div>
                    </div>
                    
                    </div>
                    </Col>
                    <Col lg={4} md={6}>
                    <div className="pool-box">
                    <div className="d-flex align-items-center justify-content-center mt-4">
                        <img src={Logo} width={50}/>
                        <h4 className="purple ml-1">BNB Pool</h4>
                    </div>
                    <div className="text-center mt-1">
                    <span className="normal-text ">Stake BNB, Earn HIGH</span>
                    <div className="mt-3">
                    <img src={Logo} width={70}/>
                    </div>
                    <div className="mt-4">
                    <Link to={'/launchpool/ANC_BUSD'} className="custom-btn primary-btn m-0">Stake</Link>

                    </div>
                    <div>
                    <div className="pad-flex">
                            <span>APY:</span>
                            <span className="f-bold">2.20%</span>
                        </div>
                        <div className="pad-flex">
                            <span>Total Staked:</span>
                            <span className="f-bold">234,234,342 BUSD</span>
                        </div>
                    </div>
                    </div>
                    
                    </div>
                    </Col>
                </Row>
                </div>
                <div className="launchpad-section">
                <Row>
                    <Col lg={4} md={6}>
                    <div className="custom-box">
                    <div className="farming">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        <span>FARMING</span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <img src={Logo} width={50}/>
                        <h4 className="purple ml-1">ANC</h4>
                    </div>
                    <div className="mt-3">
                    <span className="normal-text">Highstreet, A Play-to-Earn MMORPG Game on PayRexa Smart Chain</span>
                    </div>
                    <div className="pad-flex">
                            <span>Total Rewards:</span>
                            <span className="f-bold">25,000,000</span>
                        </div>
                        <div className="pad-flex">
                            <span>Farming Period:</span>
                            <span className="f-bold">30 day/s</span>
                        </div>
                        <div className="mt-3">
                            <div className="mt-1 mb-1">
                            <span>Time Left Until subscription start</span>
                            </div>
                            <div className="d-flex">
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
                    </Col>
                    <Col lg={4} md={6}>
                    <div className="pool-box">
                    <div className="d-flex align-items-center justify-content-center mt-4">
                        <img src={Logo} width={50}/>
                        <h4 className="purple ml-1">BUSD Pool</h4>
                    </div>
                    <div className="text-center mt-1">
                    <span className="normal-text ">Stake BUSD, Earn HIGH</span>
                    <div className="mt-3">
                    <img src={Logo} width={70}/>
                    </div>
                    <div className="mt-4">
                    <Link to={'/launchpool/ANC_BUSD'} className="custom-btn primary-btn m-0">Stake</Link>
                    </div>
                    <div>
                    <div className="pad-flex">
                            <span>APY:</span>
                            <span className="f-bold">2.20%</span>
                        </div>
                        <div className="pad-flex">
                            <span>Total Staked:</span>
                            <span className="f-bold">234,234,342 BUSD</span>
                        </div>
                    </div>
                    </div>
                    
                    </div>
                    </Col>
                    <Col lg={4} md={6}>
                    <div className="pool-box">
                    <div className="d-flex align-items-center justify-content-center mt-4">
                        <img src={Logo} width={50}/>
                        <h4 className="purple ml-1">BNB Pool</h4>
                    </div>
                    <div className="text-center mt-1">
                    <span className="normal-text ">Stake BNB, Earn HIGH</span>
                    <div className="mt-3">
                    <img src={Logo} width={70}/>
                    </div>
                    <div className="mt-4">
                    <Link to={'/launchpool/ANC_BNB'} className="custom-btn primary-btn m-0">Stake</Link>
                    </div>
                    <div>
                    <div className="pad-flex">
                            <span>APY:</span>
                            <span className="f-bold">2.20%</span>
                        </div>
                        <div className="pad-flex">
                            <span>Total Staked:</span>
                            <span className="f-bold">234,234,342 BUSD</span>
                        </div>
                    </div>
                    </div>
                    
                    </div>
                    </Col>
                </Row>
                </div>
                    <div className="text-center mt-3">
                    <Link to={'#'} className="anchor text-center">View More</Link>
                    </div>
                </div>
            </div>
            {props.footer}

        </>
    )

}
export default ViewAllLP;