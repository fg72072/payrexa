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



function Search(props){

    
    return (
        <>
        {props.header}

            <div className="banner-section ">

                <div className="heading-border text-center">
                    <h1 className="dual-heading">How can we help you?</h1>
                <Form>

                    <Form.Group className="mb-3 " controlId="search">
                        
                            <div className="position-relative search-coins">
                            <Form.Control type="text" placeholder="Search"/>
                            <button className="form-search-btn custom-btn-sm">Search</button>
                            </div>

                    </Form.Group>


                </Form>
            

            </div>
            </div>
            <div className="dashboard-main support-padding ">
                <div className="text-center">
                    <button className="custom-btn secondary-btn">FAQ</button>
                    <button className="custom-btn primary-btn">Announcement</button>
                    <button className="custom-btn secondary-btn">All</button>
                </div>
                <Row>
                    <Col lg={8} className="m-auto">
                    <div className="search-main-flex">
                        <div className="search-box-result">
                            <div className="title-section">
                                <Link to={"/announcement/23"}>Binance Secure Asset Fund for Users (SAFU) Valued at $1BN</Link>
                                <span>2022-01-31 16:00</span>
                            </div>
                            <p>Fellow Binancians,Binance is announcing that it has updated its Secure Asset Fund for Users (SAFU) valuedUsers can view the Secure Asset Fund wallets on wallet address 1 and wallet address 2.Binance calls on</p>
                            <div className="search-navigation">
                                <Link to={"/announcement"}>
                                Announcement
                                </Link>
                                <i class="fa-solid fa-angle-right"></i>
                                <Link to={"/announcement/23"}>
                                Latest Binance News
                                </Link>
                            </div>
                        </div>
                        <div className="search-box-result">
                            <div className="title-section">
                                <Link to={"/announcement/23"}>Binance Secure Asset Fund for Users (SAFU) Valued at $1BN</Link>
                                <span>2022-01-31 16:00</span>
                            </div>
                            <p>Fellow Binancians,Binance is announcing that it has updated its Secure Asset Fund for Users (SAFU) valuedUsers can view the Secure Asset Fund wallets on wallet address 1 and wallet address 2.Binance calls on</p>
                            <div className="search-navigation">
                                <Link to={"/announcement"}>
                                Announcement
                                </Link>
                                <i class="fa-solid fa-angle-right"></i>
                                <Link to={"/announcement/23"}>
                                Latest Binance News
                                </Link>
                            </div>
                        </div>
                        <div className="search-box-result">
                            <div className="title-section">
                                <Link to={"/announcement/23"}>Binance Secure Asset Fund for Users (SAFU) Valued at $1BN</Link>
                                <span>2022-01-31 16:00</span>
                            </div>
                            <p>Fellow Binancians,Binance is announcing that it has updated its Secure Asset Fund for Users (SAFU) valuedUsers can view the Secure Asset Fund wallets on wallet address 1 and wallet address 2.Binance calls on</p>
                            <div className="search-navigation">
                                <Link to={"/announcement"}>
                                Announcement
                                </Link>
                                <i class="fa-solid fa-angle-right"></i>
                                <Link to={"/announcement/23"}>
                                Latest Binance News
                                </Link>
                            </div>
                        </div>
                        <div className="search-box-result">
                            <div className="title-section">
                                <Link to={"/announcement/23"}>Binance Secure Asset Fund for Users (SAFU) Valued at $1BN</Link>
                                <span>2022-01-31 16:00</span>
                            </div>
                            <p>Fellow Binancians,Binance is announcing that it has updated its Secure Asset Fund for Users (SAFU) valuedUsers can view the Secure Asset Fund wallets on wallet address 1 and wallet address 2.Binance calls on</p>
                            <div className="search-navigation">
                                <Link to={"/announcement"}>
                                Announcement
                                </Link>
                                <i class="fa-solid fa-angle-right"></i>
                                <Link to={"/announcement/23"}>
                                Latest Binance News
                                </Link>
                            </div>
                        </div>
                    </div>
                    </Col>             
                </Row>
            </div>
            {props.footer}

        </>
    )

}
export default Search;