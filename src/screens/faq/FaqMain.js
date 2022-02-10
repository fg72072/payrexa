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



function FaqMain(props){

    
    return (
        <>
        {props.header}

            {props.sidebar}
            <div className="dashboard-main">
                <div className="normal-box big-bg">
                    <h3 className="">FAQ</h3>
                </div>
               
            </div>
            <div className="dashboard-main support-padding">
                <Row>
                    <Col lg={6}>
                    <div className="mt-3">
                    
                    <Form.Group className="mb-3 " controlId="search">
                        <Form.Label><h4>How can we help you?</h4></Form.Label>
                        <div className="position-relative">
                        <Form.Control type="text" placeholder="Search help articles" />
                        <Link to={"/support/search"} className="form-search-btn custom-btn-sm">Search</Link>
                        </div>
                    </Form.Group>
                    </div>
                    </Col>
                    <Col lg={12}>
                    <div className="mt-5">
                    <h4>Popular Topics</h4>
                        <Row className="mt-3">
                            <Col lg={4}>
                                <Link to={'/faq/23'} className="normal-anchor">
                                <div className="topic-box">
                                    <h4>Getting Started</h4>
                                    <p>Learn how to start your first trade here on Binance.</p>
                                </div>
                                </Link>
                            </Col>
                            <Col lg={4}>
                            <Link to={'/faq/23'} className="normal-anchor">
                                <div className="topic-box">
                                    <h4>Account Functions</h4>
                                    <p>Learn how to register, secure, and verify your Binance account.</p>
                                </div>
                            </Link>
                            </Col>
                            <Col lg={4}>
                            <Link to={'/faq/23'} className="normal-anchor">
                                <div className="topic-box">
                                    <h4>Buy and Sell</h4>
                                    <p>See how to buy, sell and transfer crypto to and from your account.</p>
                                </div>
                            </Link>
                            </Col>
                            <Col lg={4}>
                            <Link to={'/faq/23'} className="normal-anchor">
                                <div className="topic-box">
                                    <h4>Trade</h4>
                                    <p>Check how to trade on Binance, the world-leading exchange.</p>
                                </div>
                            </Link>
                            </Col>
                            <Col lg={4}>
                            <Link to={'/faq/23'} className="normal-anchor">
                                <div className="topic-box">
                                    <h4>Binance Earn</h4>
                                    <p>Learn how to earn passive income on Binance with your idle assets.</p>
                                </div>
                            </Link>
                            </Col>
                            <Col lg={4}>
                            <Link to={'/faq/23'} className="normal-anchor">
                                <div className="topic-box">
                                    <h4>Security Tips</h4>
                                    <p>Follow the security principles to keep your account SAFU.</p>
                                </div>
                            </Link>
                            </Col>
                        </Row>
                    </div>
                    </Col>
                    <Col lg={12}>
                    <div className="mt-5">
                    <h4>All Topics</h4>
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
                    <h4>Popular Topics</h4>
                    <ul className="popular-topics-ul">
                        <li>
                            <Link to={'/faq/23'}>Get Started on Binance Lite to Buy and Sell Your Crypto</Link>
                        </li>
                        <li>
                            <Link to={'/faq/23'}>How to Complete Identity Verification</Link>
                        </li>
                        <li>
                            <Link to={'/faq/23'}>How Do I Deposit/Withdraw Cryptocurrency on Binance</Link>
                        </li>
                        <li>
                            <Link to={'/faq/23'}>How to Buy Crypto with Card on Binance Lite App</Link>
                        </li>
                        <li>
                            <Link to={'/faq/23'}>Frequently Asked Questions on Binance App Funding Wallet Migration</Link>
                        </li>
                        <li>
                            <Link to={'/faq/23'}>Binance Ethereum Mining Tutorial</Link>
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
export default FaqMain;