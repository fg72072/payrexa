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



function Announcement(props){

    
    return (
        <>
        {props.header}

            {props.sidebar}
            <div className="dashboard-main">
                <div className="normal-box big-bg">
                    <h3 className="">Announcement</h3>
                </div>
               
            </div>
            <div className="dashboard-main support-padding">
                <Row>
                    <Col lg={6}>
                    <div className="mt-3">
                    
                    <Form.Group className="mb-3 " controlId="search">
                        <Form.Label><h4>What are you looking for?</h4></Form.Label>
                        <div className="position-relative">
                        <Form.Control type="text" placeholder="Search announcement" />
                        <Link to={"/support/search"} className="form-search-btn custom-btn-sm">Search</Link>

                        </div>
                    </Form.Group>
                    </div>
                    </Col>
                    <Col lg={12}>
                    <div className="mt-5">
                    <h4>All Topics</h4>
                        <Row className="mt-3">
                            <Col lg={4} md={4}>
                                <Link to={'/announcement/23'} className="normal-anchor">
                                <div className="topic-box">
                                    <h4>New Cryptocurrency Listing</h4>
                                    <p>Check out the latest coin listings and pairs on Launchpad, Launchpool, Spot, Margin, and Futures markets.</p>
                                </div>
                                </Link>
                            </Col>
                            <Col lg={4} md={4}>
                            <Link to={'/announcement/23'} className="normal-anchor">
                                <div className="topic-box">
                                    <h4>Latest Binance News</h4>
                                    <p>Stay on top of what's new in Binance.</p>
                                </div>
                            </Link>
                            </Col>
                            <Col lg={4} md={4}>
                            <Link to={'/announcement/23'} className="normal-anchor">
                                <div className="topic-box">
                                    <h4>Latest Activities</h4>
                                    <p>Find promotions that interest you.</p>
                                </div>
                            </Link>
                            </Col>
                            <Col lg={4} md={4}>
                            <Link to={'/announcement/23'} className="normal-anchor">
                                <div className="topic-box">
                                    <h4>New Fiat Listings</h4>
                                    <p>See which new fiat-to-crypto trading pairs are available on Binance.</p>
                                </div>
                            </Link>
                            </Col>
                            <Col lg={4} md={4}>
                            <Link to={'/announcement/23'} className="normal-anchor">
                                <div className="topic-box">
                                    <h4>API Updates</h4>
                                    <p>Learn latest news on API updates.</p>
                                </div>
                            </Link>
                            </Col>
                            <Col lg={4} md={4}>
                            <Link to={'/announcement/23'} className="normal-anchor">
                                <div className="topic-box">
                                    <h4>Crypto Airdrop</h4>
                                    <p>Check the latest crypto airdrops Binance supports.</p>
                                </div>
                            </Link>
                            </Col>
                        </Row>
                    </div>
                    </Col>
                    <Col lg={12}>
                    <div className="mt-5">
                    <h4>Latest Articles</h4>
                    <ul className="popular-topics-ul">
                        <li>
                            <Link to={'/announcement/23'}>Binance Will Support the Flow (FLOW) Network Upgrade & Hard Fork</Link><span className="span">2022-01-09</span>
                        </li>
                        <li>
                            <Link to={'/announcement/23'}>Binance Staking Launches MC and MOVR Staking with Up to 73.38% APY</Link><span className="span">2022-01-09</span>
                        </li>
                        <li>
                            <Link to={'/announcement/23'}>Binance Will List WOO Network (WOO)</Link><span className="span">2022-01-09</span>
                        </li>
                        <li>
                            <Link to={'/announcement/23'}>Binance Has Completed the Reserve Rights (RSR) Contract Swap</Link><span className="span">2022-01-09</span>
                        </li>
                        <li>
                            <Link to={'/announcement/23'}>Celebration for Chatbot Launch on Binance Futures Chat Room - 10,000 BUSD and 160 Exclusive NFTs for You to Share</Link><span className="span">2022-01-09</span>
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
export default Announcement;