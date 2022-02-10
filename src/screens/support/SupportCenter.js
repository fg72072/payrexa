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
                        <Link to={"/support/search"} className="form-search-btn custom-btn-sm">Search</Link>
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
                    <h4><Link to={'/faq'} className="custom-anchor">FAQ</Link></h4>
                    <ul className="self-faq-ul">
                        <li>
                            <Link to={'/faq/23'}><i class="fa-solid fa-user"></i><span>Account Functions</span></Link>
                        </li>
                        <li>
                            <Link to={'/faq/23'}><i class="fa-solid fa-graduation-cap"></i><span>Tutorial</span></Link>
                        </li>
                        <li>
                            <Link to={'/faq/23'}><i class="fa-solid fa-coins"></i><span>PayRexa Fan Token</span></Link>
                        </li>
                        <li>
                            <Link to={'/faq/23'}><i class="fa-regular fa-heart"></i><span>Other Topics</span></Link>
                        </li>
                        <li>
                            <Link to={'/faq/23'}><i class="fa-solid fa-rotate"></i><span>Crypto Deposit/Withdrawal</span></Link>
                        </li>
                        <li>
                            <Link to={'/faq/23'}><i class="fa-solid fa-circle-dollar-to-slot"></i><span>Buy Crypto (P2P)</span></Link>
                        </li>
                        <li>
                            <Link to={'/faq/23'}><i class="fa-solid fa-wallet"></i><span>Spot Trading</span></Link>
                        </li>
                        <li>
                            <Link to={'/faq/23'}><i class="fa-solid fa-user-shield"></i><span>Security</span></Link>
                        </li>
                  
                  
                    </ul>
                    </div>
                    </Col>
                    <Col lg={12}>
                    <div className="mt-5">
                    <h4><Link to={'/announcement'} className="custom-anchor">Announcement</Link></h4>
                    <ul className="self-faq-ul">
                        <li>
                            <Link to={'/announcement/2'}><i class="fa-brands fa-bitcoin first-icon"></i><span>New Cryptocurrency Listing</span></Link>
                        </li>
                        <li>
                            <Link to={'/announcement/2'}><i class="fa-solid fa-bell first-icon"></i><span>Latest PayRexa News</span></Link>
                        </li>
                        <li>
                            <Link to={'/announcement/2'}><i class="fa-solid fa-gift first-icon"></i><span>Latest Activities</span></Link>
                        </li>
                    </ul>
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className="mt-5">
                    <h4>Latest Articles</h4>
                    <ul className="self-aticle-ul">
                        <li>
                            <Link to={'/announcement/2'}>Every Wednesday Is WinBUSDday - Trade BUSD-Margined Futures to Win BUSD</Link><span className="span">2022-01-09</span>
                        </li>
                        <li>
                            <Link to={'/announcement/2'}>PayRexa Will List Alchemy Pay (ACH) and Immutable X (I MX)</Link><span className="span">2022-01-09</span>
                        </li>
                        <li>
                            <Link to={'/announcement/2'}>PayRexa Adds CTXC, DUSK, GXS, HOT, LINA, SFP on Cross Margin and AUTO, CTXC, CVP, CVX, LSK, VIDT on Isolated Margin</Link><span className="span">2022-01-09</span>
                        </li>
                        <li>
                            <Link to={'/announcement/2'}>PayRexa Loans Adds Collateral Assets AVAX & SOL, Launches Tiered Interest Rates</Link><span className="span">2022-01-09</span>
                        </li>
                        <li>
                            <Link to={'/announcement/2'}>Wallet Maintenance for Multiple Networks</Link><span className="span">2022-01-09</span>
                        </li>
                    </ul>
                    </div>
                    </Col>
                    <Col lg={6}>
                    <div className="mt-5">
                    <h4>Top Articles</h4>
                    <ul className="self-aticle-ul">
                        <li>
                            <Link to={'/announcement/2'}>Get Started on Binance Lite to Buy and Sell Your Crypto </Link>
                        </li>
                        <li>
                            <Link to={'/announcement/2'}>Important Changes About Binance Identity Verification</Link>
                        </li>
                        <li>
                            <Link to={'/announcement/2'}>How to Complete Identity Verification </Link>
                        </li>
                        <li>
                            <Link to={'/announcement/2'}>Upcoming Qtum (QTUM) Network Upgrade Supported on Binance</Link>
                        </li>
                        <li>
                            <Link to={'/announcement/2'}> How to Deposit and Withdraw Cryptocurrency on PayRexa</Link>
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