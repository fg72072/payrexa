import { useState } from "react"
import { Accordion, Col, Container, Form, Nav, Row, Table, Tabs, Tab } from "react-bootstrap"
import { Link } from "react-router-dom";
import Slider from "react-slick";
import DownIcon from '../assets/images/down-icon.png';
import RegIcon from '../assets/images/b-reg.png';
import TradeIcon from '../assets/images/b-trade.png';
import BTCIcon from '../assets/images/btc.svg';
import FastIcon from '../assets/images/fast-trade-icon.png';
import PayIcon from '../assets/images/quick-pay-icon.png';
import CustomerIcon from '../assets/images/customer-suppor-icon.png';
import ChartIcon from '../assets/images/live-chart-icon.png';
import CommissionIcon from '../assets/images/commision-icon.png';
import SecurityIcon from '../assets/images/high-security-icon.png';
import Star from '../assets/images/star.png';
import DownMobile from '../assets/images/down-mobile.png';

function Home(props){

  

      var market = {
        infinite: true,
        speed: 200,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        vertical:true,
      
      };

      var news_slider = {

        infinite: true,
        speed: 200,
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            
                    }
                },

                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                   
                }

            }

            ]

      };

    return (
        <>
        {props.header}

        <section className="banner-section">
        <Container className="">
            <Row className="banner-row ">
                <Col lg="6" sm={12} className="order-md-2">
                <div className=" banner-text">

                    <h1 className="dual-heading">Swap, Invest, and Earn <br/> Interest on your Crypto </h1>
                    <p className="banner-p">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit ut aliquam, purus sit 
                        amet luctus venenatis</p>
                    <div>
                    <div className="btn-box">
                    <Link to={'/register'} className="custom-btn primary-btn">Register</Link>
                    </div>
                    </div>
                </div>
                </Col>
                <Col lg="6" sm={12} className=" d-flex order-md-1">

                    

                    <img className="banner-img" src={require("../assets/images/bg-banner.png").default}/>

                    

                </Col>
                <Col lg={12} sm={12} md={12} className="order-md-3">
                    <Row>
                        <Col lg={4} sm={12} md={6} >
                            <div className="banner-box-custom">
                                <h4>Download the App</h4>
                                <span className="banner-span">Get from apple or<br/> play store</span>
                                <div className="inner">
                                    <span>Get</span>
                                    <img src={DownIcon}/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={12} md={6}>
                            <div className="banner-box-custom">
                                <h4>Register</h4>
                                <span className="banner-span">Create an account after downloading the app</span>
                                <div className="inner">
                                    <span>Register</span>
                                    <img src={RegIcon}/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={12} md={6}>
                            <div className="banner-box-custom">
                                <h4>Start Trading</h4>
                                <span className="banner-span">Start trading with PayRexa to enjoy the benefits.</span>
                                <div className=" inner">
                                    <span>Trading</span>
                                    <img src={TradeIcon}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Container>
        </section>
        
            <section>

                <Container>
                <Row className="g-0">

                
<Slider {...market}>

        <Col lg={12}>
            <Row>
            <Col lg={3} md={3} className="col-6 market-box">

            <div className="">


                <div className="market-data">

                    <p>SHIB/BUSD</p>
                    <p>+3.06%</p>

                </div>
                <div className="innner">
                    <p>0.0000298</p>
                    <span>$0.00002</span>
                </div>

            </div>


            </Col>

            <Col lg={3} md={3} className="col-6 market-box">

                <div className="">


                    <div className="market-data">

                        <p>SHIB/BUSD</p>
                        <p>+3.06%</p>

                    </div>
                    <div className="innner">
                        <p>0.0000298</p>
                        <span>$0.00002</span>
                    </div>

                </div>


            </Col>

            <Col lg={3} md={3} className="col-6 market-box">

                <div className="">


                    <div className="market-data">

                        <p>SHIB/BUSD</p>
                        <p>+3.06%</p>

                    </div>
                    <div className="innner">
                        <p>0.0000298</p>
                        <span>$0.00002</span>
                    </div>

                </div>


            </Col>

            <Col lg={3} md={3} className="col-6 market-box">

                <div className="">


                    <div className="market-data">

                        <p>SHIB/BUSD</p>
                        <p>+3.06%</p>

                    </div>
                    <div className="innner">
                        <p>0.0000298</p>
                        <span>$0.00002</span>
                    </div>

                </div>


            </Col>
            </Row>
        </Col>

        <Col lg={12}>
            <Row>
            <Col lg={3} md={3} className="col-6 market-box">

            <div className="">


                <div className="market-data">

                    <p>SHIB/BUSD</p>
                    <p>+3.06%</p>

                </div>
                <div className="innner">
                    <p>0.0000298</p>
                    <span>$0.00002</span>
                </div>

            </div>


            </Col>
            <Col lg={3} md={3} className="col-6 market-box">

                <div className="">


                    <div className="market-data">

                        <p>SHIB/BUSD</p>
                        <p>+3.06%</p>

                    </div>
                    <div className="innner">
                        <p>0.0000298</p>
                        <span>$0.00002</span>
                    </div>

                </div>


                </Col>
                <Col lg={3} md={3} className="col-6 market-box">

                <div className="">


                    <div className="market-data">

                        <p>SHIB/BUSD</p>
                        <p>+3.06%</p>

                    </div>
                    <div className="innner">
                        <p>0.0000298</p>
                        <span>$0.00002</span>
                    </div>

                </div>


                </Col>
                <Col lg={3} md={3} className="col-6 market-box">

                <div className="">


                    <div className="market-data">

                        <p>SHIB/BUSD</p>
                        <p>+3.06%</p>

                    </div>
                    <div className="innner">
                        <p>0.0000298</p>
                        <span>$0.00002</span>
                    </div>

                </div>


                </Col>
            </Row>
        </Col>
     

    </Slider>

</Row>
                </Container>

            </section>

        <Container>
        
            
            <section className="carousel-section">
                <div className="mb-4 ">
                    <h2>Announcement</h2>
                  
                </div>
                <div className="main-carousel">
                    
                    <Slider {...news_slider}>

                        <div className="news-slides">

                            <img className="w-100" src={require("../assets/images/news.jpg").default}/>
                            <div className="text-end mt-2">
                            <span >12/12/2022</span>
                            </div>
                            <div className="slider-text-section">
                                <p className="p">Lorem Lorem lorem lorem lorem lorem lorem lorem loeem loren lore </p>
                                <p className="text-p">Lorem Lorem lorem lorem lorem lorem lorem lorem loeem loren lore </p>
                            </div>
                            
                        </div>
                        <div className="news-slides">

                        <img className="w-100" src={require("../assets/images/news.jpg").default}/>
                        <div className="text-end mt-2">
                        <span >12/12/2022</span>
                        </div>
                        <div className="slider-text-section">
                            <p className="p">Lorem Lorem lorem lorem lorem lorem lorem lorem loeem loren lore </p>
                            <p className="text-p">Lorem Lorem lorem lorem lorem lorem lorem lorem loeem loren lore </p>
                        </div>

                        </div>

                        <div className="news-slides">

                        <img className="w-100" src={require("../assets/images/news.jpg").default}/>
                        <div className="text-end mt-2">
                        <span >12/12/2022</span>
                        </div>
                        <div className="slider-text-section">
                            <p className="p">Lorem Lorem lorem lorem lorem lorem lorem lorem loeem loren lore </p>
                            <p className="text-p">Lorem Lorem lorem lorem lorem lorem lorem lorem loeem loren lore </p>
                        </div>

                        </div>
                        <div className="news-slides">

                        <img className="w-100" src={require("../assets/images/news.jpg").default}/>
                        <div className="text-end mt-2">
                        <span >12/12/2022</span>
                        </div>
                        <div className="slider-text-section">
                            <p className="p">Lorem Lorem lorem lorem lorem lorem lorem lorem loeem loren lore </p>
                            <p className="text-p">Lorem Lorem lorem lorem lorem lorem lorem lorem loeem loren lore </p>
                        </div>

                        </div>

                    </Slider>
                   
                </div>
            </section>


            <section className="section custom-table-primary-th">


            <h2 className="text-center mb-5">Trending Cryptocurrencies</h2>


            <Tabs defaultActiveKey="top-gainers" id="uncontrolled-tab-example" className="mb-3 custom-tabs-new  loosers-gainers-tabs">


                <Tab eventKey="top-gainers" title="Top Gainers">

                    

                    <Table responsive="lg">

                    <thead className="t-heading">
                        <tr>
                        <th>#</th>
                        <th>Currency</th>
                        <th>Price</th>
                        <th>Change(25h)</th>
                        <th>Volume</th>
                        <th></th>
                        </tr>
                    </thead>

                    <tbody className="text-center align-items-center">

                        <tr>
                        <td><span className="purple">1</span></td>
                        <td className="td-flex-img">
                        <img className="radius-50 " src={BTCIcon} width="30"/>
                        <h6 className="mb-0">BTC</h6>
                        <span className="">Bitcoin</span>
                        </td>
                        <td>$0.32323</td>
                        <td >
                            <div className="green d-flex text-center align-items-center">
                            <i class="fa fa-sort-up"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
                        </tr>
                        <tr>
                        <td><span className="purple">1</span></td>
                        <td className="td-flex-img">
                        <img className="radius-50 " src={BTCIcon} width="30"/>
                        <h6 className="mb-0">BTC</h6>
                        <span className="">Bitcoin</span>
                        </td>
                        <td>$0.32323</td>
                        <td >
                            <div className="green d-flex text-center align-items-center">
                            <i class="fa fa-sort-up"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
                        </tr>
                        <tr>
                        <td><span className="purple">1</span></td>
                        <td className="td-flex-img">
                        <img className="radius-50 " src={BTCIcon} width="30"/>
                        <h6 className="mb-0">BTC</h6>
                        <span className="">Bitcoin</span>
                        </td>
                        <td>$0.32323</td>
                        <td >
                            <div className="green d-flex text-center align-items-center">
                            <i class="fa fa-sort-up"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
                        </tr>
                        <tr>
                        <td><span className="purple">1</span></td>
                        <td className="td-flex-img">
                        <img className="radius-50 " src={BTCIcon} width="30"/>
                        <h6 className="mb-0">BTC</h6>
                        <span className="">Bitcoin</span>
                        </td>
                        <td>$0.32323</td>
                        <td >
                            <div className="green d-flex text-center align-items-center">
                            <i class="fa fa-sort-up"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
                        </tr>
                        <tr>
                        <td><span className="purple">1</span></td>
                        <td className="td-flex-img">
                        <img className="radius-50 " src={BTCIcon} width="30"/>
                        <h6 className="mb-0">BTC</h6>
                        <span className="">Bitcoin</span>
                        </td>
                        <td>$0.32323</td>
                        <td >
                            <div className="green d-flex text-center align-items-center">
                            <i class="fa fa-sort-up"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
                        </tr>

                    </tbody>
                    </Table>
                    
                    
                </Tab>

                <Tab eventKey="top-loosers" title="Top Loosers">

                <Table responsive="lg">

                    <thead className="t-heading">
                        <tr>
                        <th>#</th>
                        <th>Currency</th>
                        <th>Price</th>
                        <th>Change(25h)</th>
                        <th>Volume</th>
                        <th></th>
                        </tr>
                    </thead>

                    <tbody className="text-center align-items-center">

                    <tr>
                        <td><span className="purple">1</span></td>
                        <td className="td-flex-img">
                        <img className="radius-50 " src={BTCIcon} width="30"/>
                        <h6 className="mb-0">BTC</h6>
                        <span className="">Bitcoin</span>
                        </td>
                        <td>$0.32323</td>
                        <td >
                            <div className="red d-flex text-center align-items-center">
                            <i class="fa fa-sort-up"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
                        </tr>
                        <tr>
                        <td><span className="purple">1</span></td>
                        <td className="td-flex-img">
                        <img className="radius-50 " src={BTCIcon} width="30"/>
                        <h6 className="mb-0">BTC</h6>
                        <span className="">Bitcoin</span>
                        </td>
                        <td>$0.32323</td>
                        <td >
                            <div className="red d-flex text-center align-items-center">
                            <i class="fa fa-sort-up"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
                        </tr>
                        <tr>
                        <td><span className="purple">1</span></td>
                        <td className="td-flex-img">
                        <img className="radius-50 " src={BTCIcon} width="30"/>
                        <h6 className="mb-0">BTC</h6>
                        <span className="">Bitcoin</span>
                        </td>
                        <td>$0.32323</td>
                        <td >
                            <div className="red d-flex text-center align-items-center">
                            <i class="fa fa-sort-up"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
                        </tr>
                        <tr>
                        <td><span className="purple">1</span></td>
                        <td className="td-flex-img">
                        <img className="radius-50 " src={BTCIcon} width="30"/>
                        <h6 className="mb-0">BTC</h6>
                        <span className="">Bitcoin</span>
                        </td>
                        <td>$0.32323</td>
                        <td >
                            <div className="red d-flex text-center align-items-center">
                            <i class="fa fa-sort-up"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
                        </tr>

                       

                    </tbody>
                    </Table>

                </Tab>
               
            </Tabs>
            <div className="text-center mt-5">
                <Link to={'/market'} className="custom-btn primary-btn">Market Place</Link>
            </div>
                       
            </section>


         
            <section className="section">
            <h2 className="text-center ">Trending Crypto with PayRexa</h2>

                <Row className="home-trade-section">
                    <Col lg={4} md={6}>
                        <div className="home-trading-box">
                            <img src={FastIcon}/>
                            <h4>Fast Trading</h4>
                            <p>Dedicated support via email, phone, and live chat around the clock to answer your questions at any time</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="home-trading-box">
                            <img src={PayIcon}/>
                            <h4>Quick Payment</h4>
                            <p>Dedicated support via email, phone, and live chat around the clock to answer your questions at any time</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="home-trading-box">
                            <img src={CustomerIcon}/>
                            <h4>Customer Support</h4>
                            <p>Dedicated support via email, phone, and live chat around the clock to answer your questions at any time</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="home-trading-box">
                            <img src={ChartIcon}/>
                            <h4>Live Charts</h4>
                            <p>Dedicated support via email, phone, and live chat around the clock to answer your questions at any time</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="home-trading-box">
                            <img src={CommissionIcon}/>
                            <h4>Commissions</h4>
                            <p>Dedicated support via email, phone, and live chat around the clock to answer your questions at any time</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className="home-trading-box">
                            <img src={SecurityIcon}/>
                            <h4>High Security</h4>
                            <p>Dedicated support via email, phone, and live chat around the clock to answer your questions at any time</p>
                        </div>
                    </Col>
                </Row>
                <div className="text-center mt-5">
                <button className="custom-btn primary-btn">Start Trading Now</button>
            </div>
            </section>


            </Container>


            <Container>
                <section className="section">
                    <Row className="align-items-center">
                        <Col lg={6} md={4}>
                        <div class="section-text">
                        <h1>About Us</h1>
                        </div>
                        </Col>
                        <Col lg={6} md={8}>
                        <div className="home-about-flex">
                            <div className="inner-box">
                                <img src={Star}/>
                                <img src={Star}/>
                                <img src={Star}/>
                                <img src={Star}/>
                                <img src={Star}/>
                            </div>
                            <div className="inner-box">
                                <h4>2020</h4>
                                <span>Entry Year</span>
                            </div>
                        </div>

                        <div className="home-second-about-flex">
                            <div className="inner-box">
                                     <h4>4M+</h4>
                                <span>Downloads</span>
                            </div>
                            <div className="inner-box">
                                <h4>99+</h4>
                                <span>Countries</span>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </section>
                <section className="section">
            <h3>Get Answers to the most <br/> Frequently Asked Questions</h3>
            <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is PayRexa</Accordion.Header>
                <Accordion.Body>
                <p className="crypto-text grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </p>
                
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What is PayRexa</Accordion.Header>
                <Accordion.Body>
                <p className="crypto-text grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What is PayRexa</Accordion.Header>
                <Accordion.Body>
                <p className="crypto-text grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>What is PayRexa</Accordion.Header>
                <Accordion.Body>
                <p className="crypto-text grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>What is PayRexa</Accordion.Header>
                <Accordion.Body>
                <p className="crypto-text grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </p>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            <div className="text-center mt-5">
                <p className="font-25 mb-4">Did not get what you are looking for?</p>
                <a className="custom-btn primary-btn" href="#">Get in <b>Touch</b></a>
            </div>
            </section>
            <section className="section">
                <Row className="down-section">
                    <Col lg={8} md={6}>
                        <h2>Download PayRexa <br/>Mobile App</h2>
                        <p>Lorem ipsum dolor sit amet, adipiscing elit ut aliquam, amet luctus venenatis</p>
                        <div class="btn-box"><a href="#" class="custom-icon-btn primary-btn"><i class="fa-brands fa-apple"></i><span class="d-column">Download From <b>App Store</b></span></a><a href="#" class="custom-icon-btn secondary-btn"><i class="fa-brands fa-google-play"></i><span class="d-column">Download From <b>App Store</b></span></a></div>
                    </Col>
                    <Col lg={4} md={6} className="text-center">
                        <img src={DownMobile}/>
                    </Col>
                </Row>
            </section>
            </Container>
            
        {props.footer}
        </>
    )
}
export default Home