import { Col, Container, Form, Row, Tab, Table, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom"
import btcimage from '../../../assets/images/btc.svg';
import Accordion from "./Accordion";
import Icon1 from '../../../assets/images/icon_3.png';
import Icon2 from '../../../assets/images/icon_2.png';
import Icon3 from '../../../assets/images/icon_3.png';
import WhiteHeader from '../../../components/p2p/WhiteHeader';
import BlackHeader from "../../../components/p2p/BlackHeader";


function P2P(props){


    return(

        <>
        {props.header}

        <Container >

            <div className=" big-bg">

                <div className="heading-border p-5 text-center">
                    <h1 className="dual-heading">P2P: Buy/Sell Your Crypto Locally</h1>
                    <h4>Peer-to-peer exchange (or P2P exchange) is a marketplace where
                     people <br/> can trade crypto directly with each other on their own terms, in virtually any country.</h4>
                </div>

            </div>

        </Container>
      <BlackHeader/>
        <WhiteHeader/>
        <Container>
        <div className="trading-section">
            <div className="filter">
                <div className="custom-input-group">
                    <p>Ammount</p>
                    <div>
                        <input type='text'/>
                        <button className="search">Search</button>
                    </div>
                </div>
                <div className="custom-input-group">
                    <p>Fiat</p>
                    <div className="relative">
                        <div className="coin-section-ab">
                            
                            <button className="normal-btn"><img src={btcimage}/>
                            <span>BTC</span>
                            <i class="fa-solid fa-caret-down"></i></button>
                        </div>
                    </div>
                </div>
                <div className="custom-input-group">
                    <p>Payment</p>
                    <div className="relative">
                        <div className="coin-section-ab">
                            <button className="normal-btn">
                            <span>All Payments</span>
                            <i class="fa-solid fa-caret-down"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <Table responsive="lg">

            <thead className="t-heading">
                <tr>
                <th>Advertisers</th>
                <th>Price</th>
                <th>Limit/Available</th>
                <th>Payment</th>
                <th>Trade</th>
                </tr>
            </thead>

            <tbody className="text-center align-items-center">
                <tr>

                    <td><div className="td-flex"><span className="icon">u</span><div><span>user_name</span><p>1179 orders</p></div></div></td>
                    <td><span>49,000.00</span> <span className="price_type">USD</span></td>
                    <td><div className="flex-column">
                    <div className="td-flex "><p>Available</p><span className="ml-1">453453</span></div>
                    <div className="td-flex "><p>Limit</p><span className="ml-1">453453</span></div>
                    </div></td>
                    <td>Lorem ipsum <p>Lorem ipsum</p></td>
                    <td><Link to={"/"} className="custom-btn-sm">Trade</Link></td>

                </tr>
                <tr>

                <td><div className="td-flex"><span className="icon">u</span><div><span>user_name</span><p>1179 orders</p></div></div></td>
                <td><span>49,000.00</span> <span className="price_type">USD</span></td>
                <td><div className="flex-column">
                <div className="td-flex "><p>Available</p><span className="ml-1">453453</span></div>
                <div className="td-flex "><p>Limit</p><span className="ml-1">453453</span></div>
                </div></td>
                <td>Lorem ipsum <p>Lorem ipsum</p></td>
                <td><Link to={"/"} className="custom-btn-sm-sec btn-gray">Limited</Link></td>

                </tr>


            </tbody>


            </Table>
            </div>
        </div>
        <div className="trading-section">
            <h2>HOW P2P WORKS</h2>
            <div className="mt-4">
            <Tabs defaultActiveKey="buy" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="buy" title="Buy Crypto">
            <Row>
                <Col lg={4}>
                <div className="buy-trade-box text-center">
                <img src={Icon1}/>
                <div className="text-center">
                    <h3>Place an Order</h3>
                    <p>Once you place a P2P order, the crypto<br/> asset will be escrowed by Binance P2P.</p>
                </div>
                </div>
                </Col>
                <Col lg={4}>
                <div className="buy-trade-box text-center">
                <img src={Icon2}/>
                <div className="text-center">
                    <h3>Pay the Seller</h3>
                    <p>Send money to the seller via the suggested payment methods. Complete the fiat transaction and click "Transferred, notify seller" on Binance P2P.</p>
                </div>
                </div>
                </Col>
                <Col lg={4}>
                <div className="buy-trade-box text-center">
                <img src={Icon3}/>
                <div className="text-center">
                    <h3>Get your Crypto</h3>
                    <p>Once the seller confirms receipt of money, the <br/> escrowed crypto will be released to you.</p>
                </div>
                </div>
                </Col>
            </Row>
            </Tab>
            <Tab eventKey="sell" title="Sell Crypto">
            <Row>
                <Col lg={4}>
                <div className="buy-trade-box text-center">
                <img src={Icon1}/>
                <div className="text-center">
                    <h3>Place an Order</h3>
                    <p>Once you place a P2P order, the crypto<br/> asset will be escrowed by Binance P2P.</p>
                </div>
                </div>
                </Col>
                <Col lg={4}>
                <div className="buy-trade-box text-center">
                <img src={Icon2}/>
                <div className="text-center">
                    <h3>Pay the Seller</h3>
                    <p>Send money to the seller via the suggested payment methods. Complete the fiat transaction and click "Transferred, notify seller" on Binance P2P.</p>
                </div>
                </div>
                </Col>
                <Col lg={4}>
                <div className="buy-trade-box text-center">
                <img src={Icon3}/>
                <div className="text-center">
                    <h3>Get your Crypto</h3>
                    <p>Once the seller confirms receipt of money, the <br/> escrowed crypto will be released to you.</p>
                </div>
                </div>
                </Col>
            </Row>
            </Tab>
            </Tabs>
            </div>
            
        </div>

        </Container>
        <div className="trading-section">
            <div className="faq-section-light">
                <Container>
                <h2 className="text-center">FAQ</h2>
                <ul className="custom-accordion">

                    <Row>
                        <Col lg={6}>
                    <Accordion heading={'Will my license be automatically renewed?'} content={'Non odit magnam dolorum. Et odio et maxime consequuntur provident. Error eaque est dolor et qui. Ex odit doloremque consequatur quis. Eaque et pariatur dolores. Magni in quasi dolor repudiandae explicabo.'}/>
                    <Accordion heading={'Will my license be automatically renewed?'} content={'Non odit magnam dolorum. Et odio et maxime consequuntur provident. Error eaque est dolor et qui. Ex odit doloremque consequatur quis. Eaque et pariatur dolores. Magni in quasi dolor repudiandae explicabo.'}/>
                    <Accordion heading={'Will my license be automatically renewed?'} content={'Non odit magnam dolorum. Et odio et maxime consequuntur provident. Error eaque est dolor et qui. Ex odit doloremque consequatur quis. Eaque et pariatur dolores. Magni in quasi dolor repudiandae explicabo.'}/>
                    <Accordion heading={'Will my license be automatically renewed?'} content={'Non odit magnam dolorum. Et odio et maxime consequuntur provident. Error eaque est dolor et qui. Ex odit doloremque consequatur quis. Eaque et pariatur dolores. Magni in quasi dolor repudiandae explicabo.'}/>
                    </Col>
                    <Col lg={6}>
                    <Accordion heading={'Will my license be automatically renewed?'} content={'Non odit magnam dolorum. Et odio et maxime consequuntur provident. Error eaque est dolor et qui. Ex odit doloremque consequatur quis. Eaque et pariatur dolores. Magni in quasi dolor repudiandae explicabo.'}/>
                    <Accordion heading={'Will my license be automatically renewed?'} content={'Non odit magnam dolorum. Et odio et maxime consequuntur provident. Error eaque est dolor et qui. Ex odit doloremque consequatur quis. Eaque et pariatur dolores. Magni in quasi dolor repudiandae explicabo.'}/>
                    <Accordion heading={'Will my license be automatically renewed?'} content={'Non odit magnam dolorum. Et odio et maxime consequuntur provident. Error eaque est dolor et qui. Ex odit doloremque consequatur quis. Eaque et pariatur dolores. Magni in quasi dolor repudiandae explicabo.'}/>
                    <Accordion heading={'Will my license be automatically renewed?'} content={'Non odit magnam dolorum. Et odio et maxime consequuntur provident. Error eaque est dolor et qui. Ex odit doloremque consequatur quis. Eaque et pariatur dolores. Magni in quasi dolor repudiandae explicabo.'}/>
                        </Col>
                    </Row>
                    </ul>

                </Container>
            </div>
        </div>


        {props.footer}

        </>

    )

}

export default P2P;