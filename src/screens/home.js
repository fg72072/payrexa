import { useState } from "react"
import { Accordion, Col, Container, Form, Nav, Row, Table } from "react-bootstrap"
import Marquee from "react-fast-marquee";
import Slider from "react-slick";

function Home(props){
    var carouselsettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
                    }
                },

                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }

            }

            ]
      };

      var market = {
        infinite: true,
        speed: 200,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
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
        <Container className="h-100">
            <Row className="banner-row h-100">
                <Col lg="6" sm={12}>
                <div className=" banner-text">

                <img  width={100} src={require('../assets/images/potrait_white-text.png').default}/>
                <h1>Swap, Invest, and <span style={{color: "#4f2fcc"}}>Earn</span> <br/> Interest on your Crypto </h1>
                <div>
                <div className="btn-box">
                <a href="#" className="custom-btn primary-btn"><i class="fa fa-apple"></i><span className="d-column">Download From <b>App Store</b></span></a>
                <a href="#" className="custom-btn secondary-btn"><i class="fa fa-apple"></i><span className="d-column">Download From <b>App Store</b></span></a>
                </div>
                </div>
                </div>
                </Col>
                <Col lg="6" sm={12} className="h-100 d-flex align-items-end">

                    

                    <img className="banner-img" src={require("../assets/images/bg-banner.png").default}/>

                    

                </Col>

            </Row>
        </Container>
        </section>
        
            <section>

                <Row className="g-0">

                
                <Slider {...market}>

                        <Col lg={2} sm={12} className="market-box">

                           <div className="d-flex align-items-center">

                                <img src={require("../assets/images/Binance.svg").default}/>

                                <div className="market-data">

                                    <p><b>TRX :</b> $0.030304</p>
                                    <p>Binance Coin</p>

                                </div>

                           </div>

                            <div className="market-footer">

                                <div className="market-change">

                                        <span>
                                            <p><b>Change</b></p>

                                            <p>
                                                <i class="fa fa-caret-up"></i>
                                                $3%
                                            </p>
                                        </span>

                                </div>

                                <div className="market-volume">

                                        <span>
                                            <p><b>Volume</b></p>

                                            <p>
                                                $13,1333,4556
                                            </p>
                                        </span>

                                </div>

                           </div>

                        </Col>

                        <Col lg={2} sm={12} className="market-box">

                            <div className="d-flex align-items-center">

                                <img src={require("../assets/images/Binance.svg").default}/>

                                <div className="market-data">

                                    <p><b>TRX :</b> $0.030304</p>
                                    <p>Binance Coin</p>

                                </div>

                            </div>

                            <div className="market-footer">

                                <div className="market-change">

                                        <span>
                                            <p><b>Change</b></p>

                                            <p>
                                                <i class="fa fa-caret-up"></i>
                                                $3%
                                            </p>
                                        </span>

                                </div>

                                <div className="market-volume">

                                        <span>
                                            <p><b>Volume</b></p>

                                            <p>
                                                $13,1333,4556
                                            </p>
                                        </span>

                                </div>

                            </div>

                            </Col>

                        <Col lg={2} sm={12} className="market-box">

                           <div className="d-flex align-items-center">

                                <img src={require("../assets/images/Binance.svg").default}/>

                                <div className="market-data">

                                    <p><b>TRX :</b> $0.030304</p>
                                    <p>Binance Coin</p>

                                </div>

                           </div>

                            <div className="market-footer">

                                <div className="market-change">

                                        <span>
                                            <p><b>Change</b></p>

                                            <p>
                                                <i class="fa fa-caret-up"></i>
                                                $3%
                                            </p>
                                        </span>

                                </div>

                                <div className="market-volume">

                                        <span>
                                            <p><b>Volume</b></p>

                                            <p>
                                                $13,1333,4556
                                            </p>
                                        </span>

                                </div>

                           </div>

                        </Col>

                        <Col lg={2} sm={12} className="market-box">

                           <div className="d-flex align-items-center">

                                <img src={require("../assets/images/Binance.svg").default}/>

                                <div className="market-data">

                                    <p><b>TRX :</b> $0.030304</p>
                                    <p>Binance Coin</p>

                                </div>

                           </div>

                            <div className="market-footer">

                                <div className="market-change">

                                        <span>
                                            <p><b>Change</b></p>

                                            <p>
                                                <i class="fa fa-caret-up"></i>
                                                $3%
                                            </p>
                                        </span>

                                </div>

                                <div className="market-volume">

                                        <span>
                                            <p><b>Volume</b></p>

                                            <p>
                                                $13,1333,4556
                                            </p>
                                        </span>

                                </div>

                           </div>

                        </Col>

                        <Col lg={2} sm={12} className="market-box">

                           <div className="d-flex align-items-center">

                                <img src={require("../assets/images/Binance.svg").default}/>

                                <div className="market-data">

                                    <p><b>TRX :</b> $0.030304</p>
                                    <p>Binance Coin</p>

                                </div>

                           </div>

                            <div className="market-footer">

                                <div className="market-change">

                                        <span>
                                            <p><b>Change</b></p>

                                            <p>
                                                <i class="fa fa-caret-up"></i>
                                                $3%
                                            </p>
                                        </span>

                                </div>

                                <div className="market-volume">

                                        <span>
                                            <p><b>Volume</b></p>

                                            <p>
                                                $13,1333,4556
                                            </p>
                                        </span>

                                </div>

                           </div>

                        </Col>
                     

                    </Slider>
                
                </Row>

            </section>

        <Container>
        

            <section className="carousel-section">
                <div className="d-j-flex heading">
                    <h3>News & Ads</h3>
                    <div className="text">
                    </div>
                </div>
                    <hr class="hr"/>
                <div className="main-carousel">
                    <Row >
                    <Slider {...carouselsettings}>
                        <Col lg={3} sm={12} className="p-1">
                            <img className="w-100" src={require("../assets/images/news.jpg").default}/>
                            <br/>
                            <span className="time">December 2 2021</span>
                            <h5 className="heading">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste delectus nemo unde</h5>
                        </Col>
                        <Col lg={3} sm={12} className="p-1">
                            <img className="w-100" src={require("../assets/images/news.jpg").default}/>
                            <br/>
                            <span className="time">December 2 2021</span>
                            <h5 className="heading">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste delectus nemo unde</h5>
                        </Col>
                        <Col lg={3} sm={12} className="p-1">
                            <img className="w-100" src={require("../assets/images/news.jpg").default}/>
                            <br/>
                            <span className="time">December 2 2021</span>
                            <h5 className="heading">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste delectus nemo unde</h5>
                        </Col>
                        <Col lg={3} sm={12} className="p-1">
                            <img className="w-100" src={require("../assets/images/news.jpg").default}/>
                            <br/>
                            <span className="time">December 2 2021</span>
                            <h5 className="heading">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste delectus nemo unde</h5>
                        </Col>
                        <Col lg={3} sm={12} className="p-1">
                            <img className="w-100" src={require("../assets/images/news.jpg").default}/>
                            <br/>
                            <span className="time">December 2 2021</span>
                            <h5 className="heading">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste delectus nemo unde</h5>
                        </Col>
                    </Slider>
                    </Row>
                </div>
            </section>
            <section className="section">
                <h1 className="text-center">Start Buying <span style={{color:"#7e4af5"}}>Crypto</span></h1>
                <Row className="text-center mt-5">
                <Col lg={4} md={4}>
                <button className="btn  btn-lg btn-crypto btn-orange" type="submit" >Buy</button>
                </Col>
                <Col lg={4} md={4}>
                <button className="btn  btn-lg btn-crypto orange-border" type="submit" >Deposit</button>
                
                </Col>
                <Col lg={4} md={4}>
                <button className="btn  btn-lg btn-crypto btn-orange" type="submit" >Trade</button>
                </Col>
                </Row>               
            </section>
            <section className="section">
                <Row>
                <Col lg={6} sm={12}>
                    <h1>Top <span className="purple">Gainers</span></h1>
                    <Table responsive="lg">
                    <thead className="t-heading">
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h</th>
                        <th>Volume(24h)</th>
                        </tr>
                    </thead>
                    <tbody className="text-center align-items-center">
                        <tr>
                        <td><span className="grey">1</span></td>
                        <td className="d-flex text-center align-items-center">
                        <img className="radius-50 " src={require("../assets/images/logo.png").default} width="30"/>
                        <h6 className="mb-0">Block Farm Club</h6>
                        <span className="text">BFC</span>
                        </td>
                        <td>$0.32323</td>
                        <td >
                            <div className="green d-flex text-center align-items-center">
                            <i class="fa fa-sort-up"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        </tr>
                        <tr>
                        <td><span className="grey">1</span></td>
                        <td className="d-flex text-center align-items-center">
                        <img className="radius-50 " src={require("../assets/images/logo.png").default} width="30"/>
                        <h6 className="mb-0">Block Farm Club</h6>
                        <span className="text">BFC</span>
                        </td>
                        <td>$0.32323</td>
                        <td >
                            <div className="green d-flex text-center align-items-center">
                            <i class="fa fa-sort-up"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        </tr>
                        <tr>
                        <td><span className="grey">1</span></td>
                        <td className="d-flex text-center align-items-center">
                        <img className="radius-50 " src={require("../assets/images/logo.png").default} width="30"/>
                        <h6 className="mb-0">Block Farm Club</h6>
                        <span className="text">BFC</span>
                        </td>
                        <td>$0.32323</td>
                        <td >
                            <div className="green d-flex text-center align-items-center">
                            <i class="fa fa-sort-up"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        </tr>
                    </tbody>
                    </Table>
                    </Col>
                    <Col lg={6} sm={12}>
                    <h1>Top <span className="purple">Losers</span></h1>
                    <Table responsive="lg">
                    <thead className="t-heading">
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h</th>
                        <th>Volume(24h)</th>
                        </tr>
                    </thead>
                    <tbody className="text-center align-items-center">
                        <tr>
                        <td><span className="grey">1</span></td>
                        <td className="d-flex text-center align-items-center">
                        <img className="radius-50 " src={require("../assets/images/logo.png").default} width="30"/>
                        <h6 className="mb-0">Block Farm Club</h6>
                        <span className="text">BFC</span>
                        </td>
                        <td>$0.32323</td>
                        <td >
                            <div className="green d-flex text-center align-items-center">
                            <i class="fa fa-sort-up"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        </tr>
                        <tr>
                        <td><span className="grey">1</span></td>
                        <td className="d-flex text-center align-items-center">
                        <img className="radius-50 " src={require("../assets/images/logo.png").default} width="30"/>
                        <h6 className="mb-0">Block Farm Club</h6>
                        <span className="text">BFC</span>
                        </td>
                        <td>$0.32323</td>
                        <td >
                            <div className="green d-flex text-center align-items-center">
                            <i class="fa fa-sort-up"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        </tr>
                        <tr>
                        <td><span className="grey">1</span></td>
                        <td className="d-flex text-center align-items-center">
                        <img className="radius-50 " src={require("../assets/images/logo.png").default} width="30"/>
                        <h6 className="mb-0">Block Farm Club</h6>
                        <span className="text">BFC</span>
                        </td>
                        <td>$0.32323</td>
                        <td >
                            <div className="green d-flex text-center align-items-center">
                            <i class="fa fa-sort-up"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        </tr>
                    </tbody>
                    </Table>
                    </Col>
                </Row>
            </section>
            <section className="section">
                <Row className="banner-row ">
                    <Col lg={6} className="c-order-2">
                    <Row >
                        <Col lg={6} md={6}>
                        <div className="box text-center">
                            <img className="box-icon" src={require("../assets/images/easy.svg").default}/>
                            <br/>
                            <h3>Easy</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat explicabo, consequuntur, nisi totam itaque, odit possimus tenetur provident et
                            </p>
                        </div>
                        </Col>
                        <Col lg={6} md={6}>
                        <div className="box text-center cmt-2">
                            <img className="box-icon" src={require("../assets/images/easy.svg").default}/>
                            <br/>
                            <h3>Easy</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat explicabo, consequuntur, nisi totam itaque, odit possimus tenetur provident et
                            </p>
                        </div>
                        </Col>
                        <Col lg={6} md={6}>
                        <div className="box text-center">
                            <img className="box-icon" src={require("../assets/images/easy.svg").default}/>
                            <br/>
                            <h3>Easy</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat explicabo, consequuntur, nisi totam itaque, odit possimus tenetur provident et
                            </p>
                        </div>
                        </Col>
                        <Col lg={6} md={6}>
                        <div className="box text-center cmt-2">
                            <img className="box-icon" src={require("../assets/images/easy.svg").default}/>
                            <br/>
                            <h3>Easy</h3>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat explicabo, consequuntur, nisi totam itaque, odit possimus tenetur provident et
                            </p>
                        </div>
                        </Col>
                    </Row>
                    </Col>
                    <Col lg="6" className="c-order-1">
                        <div className="section-text">
                        <h1>Why Are <br/>People Using <br/><span className="purple">PayRexa</span> </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat explicabo, consequuntur, nisi totam itaque, odit possimus tenetur provident et
                        </p>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className="section">
                <h1 className="text-center">Trading With <span className="purple">PayRexa</span> Is Simple</h1>
                <Row>
                    <Col lg={12}>
                <Nav variant="pills" defaultActiveKey="" className="text-center">
                <Nav.Item className="c-nav-tabs">
                    <Nav.Link eventKey="link-1" className="active">Trading Guide</Nav.Link>
                </Nav.Item>
                <Nav.Item className="c-nav-tabs">
                    <Nav.Link eventKey="link-2">Deposit Guide</Nav.Link>
                </Nav.Item>
                <Nav.Item className="c-nav-tabs">
                    <Nav.Link eventKey="link-3">Withdrawal Guide</Nav.Link>
                </Nav.Item>
                </Nav>
                    </Col>
                    <Col lg={12}>
                    <img className="w-100" src={require("../assets/images/guide.PNG").default}/>
                    </Col>
                </Row>
            </section>
            <section className="section">
                <Row>
                    <Col lg={6} sm={12}>
                    <img className="w-100" src={require("../assets/images/Img_06.png").default}/>
                    </Col>
                    <Col lg={6} sm={12}>
                    <h4 className="purple">Trade Crypto</h4>
                    <h1>To Financial Freedom</h1>
                    <br/>
                    <p className="crypto-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat explicabo, consequuntur, nisi totam itaque, odit possimus tenetur provident et
                    </p>
                    <br/>
                    <button className="btn  btn-crypto  btn-orange btn-padding" type="button">Get Started For Free</button>
                    </Col>
                </Row>
            </section>
            <section className="section">
            <h1 className="text-center">Recieve <span className="purple">Crypto</span> Easily On <span className="purple">PayRexa</span></h1>
            <p className="crypto-text-large text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat explicabo, consequuntur, nisi totam itaque, odit possimus tenetur provident et
            </p>
            <Row >
                <Col lg={12}>
                    <Row className="banner-row">
                        <Col lg={8} md={6}>
                    <img className="w-100" src={require("../assets/images/mobile.png").default}/>
                        </Col>
                        <Col lg={4} md={6}>
                    <div className="d-column">
                    <button className="btn btn-crypto  btn-orange " type="button"><i class="fa fa-apple"></i><span className="d-column">Download From <b>App Store</b></span></button>
                    <button className="btn btn-crypto  btn-orange " type="button"><i class="fa fa-apple"></i><span className="d-column">Download From <b>App Store</b></span></button>
                    </div>
                </Col>
                    </Row>
                </Col>
                
            </Row>
            </section>
            <section className="section">
            <h1 className="text-center">F.A.Q.S</h1>
            <p className="crypto-text-large text-center purple">
                Get answers to the most frequently asked questions.
            </p>
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
            
            </section>
        </Container>
        {props.footer}
        </>
    )
}
export default Home