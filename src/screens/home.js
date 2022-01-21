import { useState } from "react"
import { Accordion, Col, Container, Form, Nav, Row, Table, Tabs, Tab } from "react-bootstrap"
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
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        vertical:true,
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

      var news_slider = {

        infinite: true,
        speed: 200,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
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
        <Container className="h-100">
            <Row className="banner-row h-100">
                <Col lg="6" sm={12}>
                <div className=" banner-text">

                <img  width={100} src={require('../assets/images/logo.png').default}/>
                <h1 className="dual-heading">Swap, Invest, and <span>Earn</span> <br/> Interest on your Crypto </h1>
                <div>
                <div className="btn-box">
                <a href="#" className="custom-icon-btn primary-btn"><i class="fa-brands fa-apple"></i><span className="d-column">Download From <b>App Store</b></span></a>
                <a href="#" className="custom-icon-btn secondary-btn"><i class="fa-brands fa-google-play"></i><span className="d-column">Download From <b>App Store</b></span></a>
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

                        <Col lg={12}>
                            <Row>
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

                                            <p className="green">
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

                                            <p className="green">
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

                                            <p className="green">
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

                                            <p className="green">
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

                                                <p className="green">
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

                                                <p className="green">
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
                            </Row>
                        </Col>
                        <Col lg={12}>
                            <Row>
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

                                            <p className="green">
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

                                            <p className="green">
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

                                            <p className="green">
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

                                            <p className="green">
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

                                                <p className="green">
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

                                                <p className="green">
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
                            </Row>
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
                    
                    <Slider {...news_slider}>

                        <div className="news-slides">

                            <img className="w-100" src={require("../assets/images/news.jpg").default}/>
                            
                        </div>

                        <div className="news-slides">

                            <img className="w-100" src={require("../assets/images/news.jpg").default}/>

                        </div>

                        <div className="news-slides">

                            <img className="w-100" src={require("../assets/images/news.jpg").default}/>

                        </div>

                        <div className="news-slides">

                            <img className="w-100" src={require("../assets/images/news.jpg").default}/>

                        </div>
                        <div className="news-slides">

                            <img className="w-100" src={require("../assets/images/news.jpg").default}/>

                        </div>

                      

                    </Slider>
                   
                </div>
            </section>


            <section className="section">


            <h2 className="dual-heading text-center">Market Trends</h2>


            <Tabs defaultActiveKey="top-gainers" id="uncontrolled-tab-example" className="mb-3 justify-content-center loosers-gainers-tabs">


                <Tab eventKey="top-gainers" title="Top Gainers">

                    

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
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
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
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
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
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
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
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
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
                            <div className="red d-flex text-center align-items-center">
                            <i class="fa fa-sort-down"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
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
                            <div className="red d-flex text-center align-items-center">
                            <i class="fa fa-sort-down"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
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
                            <div className="red d-flex text-center align-items-center">
                            <i class="fa fa-sort-down"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
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
                            <div className="red d-flex text-center align-items-center">
                            <i class="fa fa-sort-down"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
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
                            <div className="red d-flex text-center align-items-center">
                            <i class="fa fa-sort-down"></i> <span>198.43%</span>
                            </div>
                        </td>
                        <td>$434.32323</td>
                        <td><a href="#" className="custom-btn-sm">Trade</a></td>
                        </tr>
                       

                    </tbody>
                    </Table>

                </Tab>
               
            </Tabs>

                       
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


            </Container>

            <section className="section">

                <h2 className="dual-heading text-center">Trading With <span>PayRexa</span> Is Simple</h2>
   
            <Container fluid className="half-color">

                <Container>
                    <Row>

                        <Col lg={4}>

                        <div className="box-two">

                            <img src={require("../assets/images/Layer-50.png").default} />

                            <h4>Create Your Account</h4>
                            <p>Lorem ipsum adasd ask afasfkqw fakfa sfaks fapkeqwor afc ajcnais nca nwqniasndiasj ajjc acapsjdwjq ac ap</p>

                        </div>
                
                        </Col>

                        
                        <Col lg={4}>

                        <div className="box-two">

                            <img src={require("../assets/images/Layer-49.png").default} />

                            <h4>Create Your Account</h4>
                            <p>Lorem ipsum adasd ask afasfkqw fakfa sfaks fapkeqwor afc ajcnais nca nwqniasndiasj ajjc acapsjdwjq ac ap</p>

                        </div>
                
                        </Col>

                        
                        <Col lg={4}>

                        <div className="box-two">

                            <img src={require("../assets/images/Layer-51.png").default} />

                            <h4>Create Your Account</h4>
                            <p>Lorem ipsum adasd ask afasfkqw fakfa sfaks fapkeqwor afc ajcnais nca nwqniasndiasj ajjc acapsjdwjq ac ap</p>

                        </div>
                
                        </Col>
                    
                    

                    </Row>
                </Container>

            </Container>
            </section>

            <Container>

            <section className="section">
                <Row>
                    <Col lg={6} sm={12}>
                    <img className="w-100" src={require("../assets/images/trade-with.png").default}/>
                    </Col>
                    <Col lg={6} sm={12}>
                    <h4 className="purple">Trade Crypto</h4>
                    <h2 className="dual-heading">To Financial Freedom</h2>
                    <br/>
                    <p className="crypto-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat explicabo, consequuntur, nisi totam itaque, odit possimus tenetur provident et
                    </p>
                    <br/>
                    <a className="custom-btn secondary-btn">Get Started For Free</a>
                    </Col>
                </Row>
            </section>
            
            <section className="section">

            <Row className="align-items-center">

                <Col lg={6}>


                <h2 className="dual-heading">Recieve Crypto Easily On <span>PayRexa</span></h2>
                <p className="crypto-text-large">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat explicabo, consequuntur, nisi totam itaque, odit possimus tenetur provident et
                </p>
                <div className="btn-box">
                <a href="#" className="custom-icon-btn primary-btn"><i class="fa-brands fa-apple"></i><span className="d-column">Download From <b>App Store</b></span></a>
                <a href="#" className="custom-icon-btn secondary-btn"><i class="fa-brands fa-google-play"></i><span className="d-column">Download From <b>App Store</b></span></a>
                </div>

                </Col> 

                <Col lg={6}>
                <img className="w-100" src={require("../assets/images/download-app.png").default}/>
                </Col>
               
                  
               
                   
                
                

            </Row>

            </section>

            <section className="section">
            <h2 className="dual-heading text-center">F.A.Q.S</h2>
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