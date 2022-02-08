import { useState } from "react";
import { Container,Row,Col,Form,Dropdown,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import LeagueImage from "../../assets/images/league.png";
import Logo from "../../assets/images/logo.png"
import LaunchProjectIcon from "../../assets/images/launch_project.png"
import ExposureIcon from "../../assets/images/exposure_icon.png"
import FutureIcon from "../../assets/images/future_icon.png"
import DestributionIcon from "../../assets/images/destirbution_icon.png"
import LiquidityIcon from "../../assets/images/liquidity_icon.png"




function Pad(props){

    
    return (
        <>
        {props.header}

            {props.sidebar}
            <div className="dashboard-main">
                <div className="normal-box big-bg">
                <div class="back-link  align-items-center">
                    <h3>PayRexa Token Launch Platform</h3>
                    <h5>Buy or earn new tokens directly on PayRexa</h5>
                    <Row className="pt-2">
                        <Col lg={3}>
                            <h4>$ 5,014,859,453,343</h4>
                            <h6>Current Funds Locked</h6>
                        </Col>
                        <Col lg={3}>
                            <h4>$ 5,014,859,453</h4>
                            <h6>Total Funds Raised</h6>
                        </Col>
                        <Col lg={3}>
                            <h4>6</h4>
                            <h6>Projects Launchpad</h6>
                        </Col>
                        <Col lg={3}>
                            <h4>$ 5,014,859,453,343</h4>
                            <h6>All-time Unique Participants</h6>
                        </Col>
                    </Row>
                </div>
                </div>
               
            </div>
            <div className=" dashboard-main support-padding">
               <div className="dashboard-margin">
               <h3>Launchpad</h3>
                <Link to={"/subscription/league"} className="normal-anchor">
                <Row>
                    <Col lg={4}>
                    <img src={LeagueImage}/>
                    </Col>
                    <Col lg={8}>
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
                   <div className="text-center">
                   <Link to={'/viewall/lpd'} className="anchor">View More</Link>
                   </div>
               </div>
               <div className="dashboard-margin">
                <div className="d-flex justify-content-between align-items-center">
                <h3>Launchpool</h3>
                <button className="custom-btn secondary-btn">Pending Harvest (0)</button>
                </div>
                <div className="launchpad-section">
                <Row>
                    <Col lg={4}>
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
                    <Col lg={4}>
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
                    <Link to={'/launchpool/HIGH_BUSD'} className="custom-btn primary-btn m-0">Stake</Link>
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
                    <Col lg={4}>
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
                    <Link to={'/launchpool/HIGH_BNB'} className="custom-btn primary-btn m-0">Stake</Link>
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
                    <Link to={'/viewall/lp'} className="anchor text-center">View More</Link>
                    </div>
                </div>
                <div className="dashboard-margin">
                    <Row>
                        <Col lg={5}>
                            <h3>Launch a project on<br/> PayRexa now!</h3>
                            <span>
                            PayRexa Launchpad and Launchpool are platforms that help and advise project teams on how to best issue and launch their token. We provide a full service offering starting from advisory services... 
                            </span>
                            <div className="mt-3">
                            <Link to={'#'} className="anchor text-center">View More</Link>
                            </div>
                            <div className="mt-4">
                                <button className="custom-btn primary-btn">Apply to Launch</button>
                            </div>
                        </Col>
                        <Col lg={7}>
                        <div className="apply_flex">
                        <img src={LaunchProjectIcon} className="apply_img"/>
                        </div>
                        </Col>
                    </Row>
                </div>
                <div className="dashboard-margin">
                    <h3>Why choose us?</h3>
                    <Row>
                        <Col lg={3}>
                            <img src={ExposureIcon} className="choose_icon"/>
                            <h4>Exposure</h4>
                            <span>
                            Get exposure to the millions of Binance users around the world.
                            </span>
                        </Col>
                        <Col lg={3}>
                            <img src={LiquidityIcon} className="choose_icon"/>
                            <h4>Liquidity</h4>
                            <span>
                            Projects that are launched on Launchpad or Launchpool will be listed and have world-class liquidity in multiple trading pairs.
                            </span>
                        </Col>
                        <Col lg={3}>
                            <img src={DestributionIcon} className="choose_icon"/>
                            <h4>Token Distribution</h4>
                            <span>
                            Your token will immediately be distributed to a large user base that hold your token.
                            </span>
                        </Col>
                        <Col lg={3}>
                            <img src={FutureIcon} className="choose_icon"/>
                            <h4>Future Synergy</h4>
                            <span>
                            Project will receive extensive support and advice even after listing, having access to all areas of the Binance ecosystem.
                            </span>
                        </Col>
                    </Row>
                </div>
            </div>
            {props.footer}

        </>
    )

}
export default Pad;