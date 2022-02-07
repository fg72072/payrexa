import { useState } from "react";
import { Container,Row,Col,Form,Dropdown,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import BtcImage from "../../assets/images/btc.svg";
import ResetImage from "../../assets/images/spt-reset.png"
import UnlockImage from "../../assets/images/spt-unlock.png"
import PhoneImage from "../../assets/images/spt-phone.png"
import EmailImage from "../../assets/images/spt-email.png"
import DepositImage from "../../assets/images/spt-deposit.png"
import MissingImage from "../../assets/images/spt-missing.png"



function SupportCenter(props){

    
    return (
        <>
        {props.header}

            {props.sidebar}
            <div className="dashboard-main">
                <div className="normal-box big-bg">
                    <h3 className="">Support Center</h3>
                </div>
               
            </div>
            <div className="dashboard-main support-padding">
                <Row>
                    <Col lg={6}>
                    <div className="mt-3">
                    
                    <Form.Group className="mb-3 " controlId="search">
                        <Form.Label><h4>Search our FAQ</h4></Form.Label>
                        <div className="position-relative">
                        <Form.Control type="text" placeholder="Search help articles" />
                        <button className="form-search-btn custom-btn-sm">Search</button>
                        </div>
                    </Form.Group>
                    </div>
                    </Col>
                    <Col lg={12}>
                    <div className="mt-3">
                    <h4>Self-Service</h4>
                    <ul className="self-service-ul">
                        <li>
                            <Link to={'/forgot-password'}><div><img src={ResetImage}/><span>Reset Password</span></div><i class="fa-solid fa-chevron-right"></i></Link>
                        </li>
                        <li>
                            <Link to={'/unlock/account'}><div><img src={UnlockImage}/><span>Unlock Account</span></div><i class="fa-solid fa-chevron-right"></i></Link>
                        </li>
                        <li>
                            <Link to={'/reset/verification'}><div><img src={PhoneImage}/><span>Reset Phone Security Verification</span></div><i class="fa-solid fa-chevron-right"></i></Link>
                        </li>
                        <li>
                            <Link to={'/change/email'}><div><img src={EmailImage}/><span>Change Email Address</span></div><i class="fa-solid fa-chevron-right"></i></Link>
                        </li>
                    </ul>
                    </div>
                    </Col>
                    <Col lg={12}>
                    <div className="mt-5">
                    <h4>FAQ</h4>
                    <ul className="self-faq-ul">
                        <li>
                            <Link to={'#'}><span>Account Functions</span></Link>
                        </li>
                        <li>
                            <Link to={'#'}><span>Tutorial</span></Link>
                        </li>
                        <li>
                            <Link to={'#'}><span>PayRexa Fan Token</span></Link>
                        </li>
                        <li>
                            <Link to={'#'}><span>Other Topics</span></Link>
                        </li>
                        <li>
                            <Link to={'#'}><span>Crypto Deposit/Withdrawal</span></Link>
                        </li>
                        <li>
                            <Link to={'#'}><span>Buy Crypto (P2P)</span></Link>
                        </li>
                        <li>
                            <Link to={'#'}><span>Spot Trading</span></Link>
                        </li>
                        <li>
                            <Link to={'#'}><span>Security</span></Link>
                        </li>
                  
                  
                    </ul>
                    </div>
                    </Col>
                    <Col lg={12}>
                    <div className="mt-5">
                    <h4>Announcement</h4>
                    <ul className="self-faq-ul">
                        <li>
                            <Link to={'#'}><span>New Cryptocurrency Listing</span></Link>
                        </li>
                        <li>
                            <Link to={'#'}><span>Latest PayRexa News</span></Link>
                        </li>
                        <li>
                            <Link to={'#'}><span>Latest Activities</span></Link>
                        </li>
                    </ul>
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className="mt-5">
                    <h4>Latest Articles</h4>
                    <ul className="self-aticle-ul">
                        <li>
                            <Link to={'#'}>Every Wednesday Is WinBUSDday - Trade BUSD-Margined Futures to Win BUSD</Link><span className="span">2022-01-09</span>
                        </li>
                        <li>
                            <Link to={'#'}>PayRexa Will List Alchemy Pay (ACH) and Immutable X (I MX)</Link><span className="span">2022-01-09</span>
                        </li>
                        <li>
                            <Link to={'#'}>PayRexa Adds CTXC, DUSK, GXS, HOT, LINA, SFP on Cross Margin and AUTO, CTXC, CVP, CVX, LSK, VIDT on Isolated Margin</Link><span className="span">2022-01-09</span>
                        </li>
                        <li>
                            <Link to={'#'}>PayRexa Loans Adds Collateral Assets AVAX & SOL, Launches Tiered Interest Rates</Link><span className="span">2022-01-09</span>
                        </li>
                        <li>
                            <Link to={'#'}>Wallet Maintenance for Multiple Networks</Link><span className="span">2022-01-09</span>
                        </li>
                    </ul>
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className="mt-5">
                    <h4>Top Articles</h4>
                    <ul className="self-aticle-ul">
                        <li>
                            <Link to={'#'}>Get Started on Binance Lite to Buy and Sell Your Crypto </Link>
                        </li>
                        <li>
                            <Link to={'#'}>Important Changes About Binance Identity Verification</Link>
                        </li>
                        <li>
                            <Link to={'#'}>How to Complete Identity Verification </Link>
                        </li>
                        <li>
                            <Link to={'#'}>Upcoming Qtum (QTUM) Network Upgrade Supported on Binance</Link>
                        </li>
                        <li>
                            <Link to={'#'}> How to Deposit and Withdraw Cryptocurrency on PayRexa</Link>
                        </li>
                    </ul>
                    </div>
                    </Col>
                </Row>
            </div>
            {props.footer}

        </>
    )

}
export default SupportCenter;