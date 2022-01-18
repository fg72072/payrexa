import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom"


function Market(props){


    return(

        <>
        {props.header}

        <Container >

            <div className="banner-section big-bg">

                <div className="heading-border text-center">
                    <h1 className="dual-heading">Markets</h1>
                    <hr/>
                </div>

                <Form>

<Form.Group className="search-coins" controlId="searcg-coin">
            
    <Form.Control type="text" placeholder="Search Coin"/>
    <i class="fa-solid fa-magnifying-glass"></i>
</Form.Group>

</Form>
            </div>

            
        

        </Container>

        <Container fluid className="grey-bg">

        <Container>


            <Row>

                <Col lg={3}>

                    <div className="market-box-two">

                        <p className="f-bold mb-4">Top Gainers</p>

                    <div className="d-flex align-items-center">

                        <img src={require("../assets/images/btc.svg").default}/>

                        <div className="market-data">

                            <div>
                                <p className="f-bold">BTC</p>
                                <p className="green f-bold">1500.32</p>
                            </div>
                            <p className="green f-bold">80.00%</p>

                        </div>

                        </div>

                        <div className="market-footer">

                        <div className="market-change">

                                
                                    <p className="green f-bold">
                                        $48,000
                                    </p>
                               
                        </div>


                        <a href="">
                            <i class="fa-solid fa-angle-right"></i>
                        </a>

                        

                        </div>

                    </div>

                </Col>


                <Col lg={3}>

                    <div className="market-box-two">

                        <p className="f-bold mb-4">Top Loosers</p>

                    <div className="d-flex align-items-center">

                        <img src={require("../assets/images/btc.svg").default}/>

                        <div className="market-data">

                            <div>
                                <p className="f-bold">BTC</p>
                                <p className="red f-bold">0045.00</p>
                            </div>
                            <p className="red f-bold">-80.00%</p>

                        </div>

                        </div>

                        <div className="market-footer">

                        <div className="market-change">

                                
                                    <p className="red f-bold">
                                        $48,000
                                    </p>
                            
                        </div>


                        <a href="">
                            <i class="fa-solid fa-angle-right"></i>
                        </a>

                        

                        </div>

                    </div>

                    </Col>


                    <Col lg={3}>

                    <div className="market-box-two">

                        <p className="f-bold mb-4">Top Volume Coin</p>

                    <div className="d-flex align-items-center">

                        <img src={require("../assets/images/btc.svg").default}/>

                        <div className="market-data">

                            <div>
                                <p className="f-bold">BTC</p>
                                <p className="green f-bold">1500.32</p>
                            </div>
                            <p className="green f-bold">80%</p>

                        </div>

                        </div>

                        <div className="market-footer">

                        <div className="market-change">

                                
                                    <p className="green f-bold">
                                        $48,000
                                    </p>
                               
                        </div>


                        <a href="">
                            <i class="fa-solid fa-angle-right"></i>
                        </a>

                        

                        </div>

                    </div>

                </Col>


                <Col lg={3}>

                    <div className="market-box-two">

                        <p className="f-bold mb-4">Highlight Coin</p>

                    <div className="d-flex align-items-center">

                        <img src={require("../assets/images/btc.svg").default}/>

                        <div className="market-data">

                            <div>
                                <p className="f-bold">BTC</p>
                                <p className="green f-bold">1500.32</p>
                            </div>
                            <p className="green f-bold">80%</p>

                        </div>

                        </div>

                        <div className="market-footer">

                        <div className="market-change">

                                
                                    <p className="green f-bold">
                                        $48,000
                                    </p>
                               
                        </div>


                        <a href="">
                            <i class="fa-solid fa-angle-right"></i>
                        </a>

                        

                        </div>

                    </div>

                </Col>
               

            </Row>

        </Container>

        </Container>


        <Container>

            <section className="section">


                
            <ul class="nav nav-tabs justify-content-between" id="myTab" role="tablist">

                   
                  
                        <li class="nav-item" role="presentation">

                            <button class="nav-link active" id="favourite-tab" data-bs-toggle="tab" data-bs-target="#favourite" type="button" role="tab" aria-controls="favourite" aria-selected="true">
                            <i class="fa-solid fa-star"></i>  Favourites
                            </button>
                            
                        </li>

                        

                        <li class="nav-item" role="presentation">

                            <button class="nav-link" id="all-crypto-tab" data-bs-toggle="tab" data-bs-target="#all-crypto" type="button" role="tab" aria-controls="all-crypto" aria-selected="false">
                                All Cryptos
                            </button>

                        </li>
                   
                    
                    


                   
                        <li class="nav-item" role="presentation">

                            <button class="nav-link" id="market-over-tab" data-bs-toggle="tab" data-bs-target="#market-over" type="button" role="tab" aria-controls="market-over" aria-selected="false">
                              <img src={require("../assets/images/seo.png").default} /> 
                              Market Overview
                            </button>

                        </li>

                        <li class="nav-item" role="presentation">

                            <button class="nav-link" id="top-movers-tab" data-bs-toggle="tab" data-bs-target="#top-movers" type="button" role="tab" aria-controls="top-movers" aria-selected="false">
                            <img src={require("../assets/images/bar-chart.png").default}/> 
                                Top Movers
                            </button>

                        </li>

                   

                   

                </ul>

                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="favourite" role="tabpanel" aria-labelledby="favourite-tab">
                        
                        
                        <Table responsive="lg">

                            <thead className="t-heading">
                                <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>24h Change</th>
                                <th>24h High/Low</th>
                                <th>24h Volume</th>
                                <th>Market Cap</th>
                                </tr>
                            </thead>

                            <tbody className="text-center align-items-center">


                                <tr>

                                    <td><i class="fa-solid fa-star star"></i></td>
                                    <td>BTC/USDT</td>
                                    <td><span className="green">49,000.00</span> / <span>49,000.00</span></td>
                                    <td><span className="red">-1.30%</span></td>
                                    <td>49,000.00 / 49,000.00</td>
                                    <td>380.72M</td>
                                    <td>$916,473.65M</td>
                                    <td><Link to={"/"} className="primary-a">Trade</Link></td>

                                </tr>


                                <tr>

                                    <td><i class="fa-solid fa-star star"></i></td>
                                    <td>BTC/USDT</td>
                                    <td><span className="green">49,000.00</span> / <span>49,000.00</span></td>
                                    <td><span className="red">-1.30%</span></td>
                                    <td>49,000.00 / 49,000.00</td>
                                    <td>380.72M</td>
                                    <td>$916,473.65M</td>
                                    <td><Link to={"/"} className="primary-a">Trade</Link></td>

                                </tr>


                                <tr>

                                    <td><i class="fa-solid fa-star star"></i></td>
                                    <td>BTC/USDT</td>
                                    <td><span className="green">49,000.00</span> / <span>49,000.00</span></td>
                                    <td><span className="red">-1.30%</span></td>
                                    <td>49,000.00 / 49,000.00</td>
                                    <td>380.72M</td>
                                    <td>$916,473.65M</td>
                                    <td><Link to={"/"} className="primary-a">Trade</Link></td>

                                </tr>


                                <tr>

                                    <td><i class="fa-solid fa-star star"></i></td>
                                    <td>BTC/USDT</td>
                                    <td><span className="green">49,000.00</span> / <span>49,000.00</span></td>
                                    <td><span className="red">-1.30%</span></td>
                                    <td>49,000.00 / 49,000.00</td>
                                    <td>380.72M</td>
                                    <td>$916,473.65M</td>
                                    <td><Link to={"/"} className="primary-a">Trade</Link></td>

                                </tr>


                                <tr>

                                    <td><i class="fa-solid fa-star star"></i></td>
                                    <td>BTC/USDT</td>
                                    <td><span className="green">49,000.00</span> / <span>49,000.00</span></td>
                                    <td><span className="red">-1.30%</span></td>
                                    <td>49,000.00 / 49,000.00</td>
                                    <td>380.72M</td>
                                    <td>$916,473.65M</td>
                                    <td><Link to={"/"} className="primary-a">Trade</Link></td>

                                </tr>





                            </tbody>


                        </Table>

                    </div>
                
                <div class="tab-pane fade" id="all-crypto" role="tabpanel" aria-labelledby="all-crypto-tab">

                    <Table responsive="lg">

                    <thead className="t-heading">
                        <tr>
                     
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h Change</th>
                        <th>24h Volume</th>
                        <th>Market Cap</th>
                        </tr>
                    </thead>

                    <tbody className="text-center align-items-center">


                        <tr>

                            <td className="d-flex text-center align-items-center">
                                <img className="radius-50 me-2" src={require("../assets/images/logo.png").default} width="30"/>
                                <h6 className="mb-0">USDT</h6>
                                <span className="text">BFC</span>
                            </td>
                            <td>49,000.00</td>
                            <td><span className="red">-1.30%</span></td>
                            <td>380.72M</td>
                            <td>$916,473.65M</td>
                            <td>
                                <Link to={"/"} className="primary-a">Detail</Link>
                                
                                <Link to={"/"} className="primary-a">Trade</Link>
                            </td>

                        </tr>


                        <tr>

                            <td className="d-flex text-center align-items-center">
                                <img className="radius-50 me-2" src={require("../assets/images/logo.png").default} width="30"/>
                                <h6 className="mb-0">USDT</h6>
                                <span className="text">BFC</span>
                            </td>
                            <td>49,000.00</td>
                            <td><span className="red">-1.30%</span></td>
                            <td>380.72M</td>
                            <td>$916,473.65M</td>
                            <td>
                                <Link to={"/"} className="primary-a">Detail</Link>
                                
                                <Link to={"/"} className="primary-a">Trade</Link>
                            </td>

                            </tr>


                            <tr>

                            <td className="d-flex text-center align-items-center">
                                <img className="radius-50 me-2" src={require("../assets/images/logo.png").default} width="30"/>
                                <h6 className="mb-0">USDT</h6>
                                <span className="text">BFC</span>
                            </td>
                            <td>49,000.00</td>
                            <td><span className="red">-1.30%</span></td>
                            <td>380.72M</td>
                            <td>$916,473.65M</td>
                            <td>
                                <Link to={"/"} className="primary-a">Detail</Link>
                                
                                <Link to={"/"} className="primary-a">Trade</Link>
                            </td>

                            </tr>


                            <tr>

                            <td className="d-flex text-center align-items-center">
                                <img className="radius-50 me-2" src={require("../assets/images/logo.png").default} width="30"/>
                                <h6 className="mb-0">USDT</h6>
                                <span className="text">BFC</span>
                            </td>
                            <td>49,000.00</td>
                            <td><span className="red">-1.30%</span></td>
                            <td>380.72M</td>
                            <td>$916,473.65M</td>
                            <td>
                                <Link to={"/"} className="primary-a">Detail</Link>
                                
                                <Link to={"/"} className="primary-a">Trade</Link>
                            </td>

                            </tr>


                            <tr>

                            <td className="d-flex text-center align-items-center">
                                <img className="radius-50 me-2" src={require("../assets/images/logo.png").default} width="30"/>
                                <h6 className="mb-0">USDT</h6>
                                <span className="text">BFC</span>
                            </td>
                            <td>49,000.00</td>
                            <td><span className="red">-1.30%</span></td>
                            <td>380.72M</td>
                            <td>$916,473.65M</td>
                            <td>
                                <Link to={"/"} className="primary-a">Detail</Link>
                                
                                <Link to={"/"} className="primary-a">Trade</Link>
                            </td>

                            </tr>







                    </tbody>


                    </Table>

                </div>



                <div class="tab-pane fade" id="market-over" role="tabpanel" aria-labelledby="market-over-tab">

                   <Row className="mt-5">

                        <Col lg={4}>

                            <div className="market-overview-box">
                                
                                <div className="market-overview-head">
                                    <span>
                                        <p>bnb/usdt</p>
                                        <p className="red">-4.4 -0.8%</p>
                                    </span>

                                    <p>528.3/$528.30</p>

                                </div>

                                <img src={require("../assets/images/graph.png").default} style={{width:"100%"}}/>

                            </div>

                        </Col>

                        <Col lg={4}>

                            <div className="market-overview-box">
                                
                                <div className="market-overview-head">
                                    <span>
                                        <p>bnb/usdt</p>
                                        <p className="red">-4.4 -0.8%</p>
                                    </span>

                                    <p>528.3/$528.30</p>

                                </div>

                                <img src={require("../assets/images/graph.png").default} style={{width:"100%"}}/>

                            </div>

                        </Col>

                        <Col lg={4}>

                            <div className="market-overview-box">
                                
                                <div className="market-overview-head">
                                    <span>
                                        <p>bnb/usdt</p>
                                        <p className="red">-4.4 -0.8%</p>
                                    </span>

                                    <p>528.3/$528.30</p>

                                </div>

                                <img src={require("../assets/images/graph.png").default} style={{width:"100%"}}/>

                            </div>

                        </Col>

                   </Row>

                </div>

                <div class="tab-pane fade" id="top-movers" role="tabpanel" aria-labelledby="top-movers-tab">
                    
                    <Table striped responsive="lg">


                        <tbody className="text-center align-items-center">


                            <tr>

                            
                                <td>18:14:19</td>
                                <td>MASK/USDT</td>
                                <td>New 24h High</td>
                                <td className="text-center">
                                    <span className="red">-3.0%</span> 
                                    <i class="fa-solid fa-arrow-trend-down market-down"></i>
                                </td>

                            </tr>


                            <tr>
                            
                                <td>18:14:19</td>
                                <td>MASK/USDT</td>
                                <td>New 24h High</td>
                                <td className="text-center">
                                    <span className="green">+3.0%</span> 
                                    <i class="fa-solid fa-arrow-trend-up market-up"></i>
                                </td>
                                
                            </tr>

                            
                            <tr>

                                <td>18:14:19</td>
                                <td>MASK/USDT</td>
                                <td>New 24h High</td>
                                <td className="text-center">
                                    <span className="green">+3.0%</span> 
                                    <i class="fa-solid fa-arrow-trend-up market-up"></i>
                                </td>
                                
                            </tr>

                            <tr>

                                                        
                                <td>18:14:19</td>
                                <td>MASK/USDT</td>
                                <td>New 24h High</td>
                                <td className="text-center">
                                    <span className="red">-3.0%</span> 
                                    <i class="fa-solid fa-arrow-trend-down market-down"></i>
                                </td>

                                </tr>

                                <tr>

                                                        
                                <td>18:14:19</td>
                                <td>MASK/USDT</td>
                                <td>New 24h High</td>
                                <td className="text-center">
                                    <span className="red">-3.0%</span> 
                                    <i class="fa-solid fa-arrow-trend-down market-down"></i>
                                </td>

                            </tr>
                            


                        </tbody>


                    </Table>

                </div>

            </div>


                    

                        
                </section>

        </Container>

        {props.footer}

        </>

    )

}

export default Market;