import { Col, Container, Dropdown, Form, Modal, Row, Tab, Table, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom"
import btcimage from '../../../assets/images/btc.svg';
import Accordion from "./Accordion";
import Icon1 from '../../../assets/images/icon_3.png';
import Icon2 from '../../../assets/images/icon_2.png';
import Icon3 from '../../../assets/images/icon_3.png';
import BlackHeader from "../../../components/p2p/BlackHeader";
import { useState } from "react";


function P2P(props){
    const [buyshow, setBuyshow] = useState(false);
    const buyhandleClose = () => setBuyshow(false);
    const buyhandleShow = () => setBuyshow(true);

    const [saleshow, setSaleshow] = useState(false);
    const salehandleClose = () => setSaleshow(false);
    const salehandleShow = () => setSaleshow(true);
    const [p2pType,setP2pType] = useState(props.p2ptype);

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
        {props.whiteheader}
        <Container>
        <div className="trading-section">
            <div className="filter">
                <div className="custom-input-group ">
                    <p>Ammount</p>
                    <div className="d-flex">
                        <input type='text'/>
                        <button className="coin-section-ab btn">Search</button>
                    </div>
                </div>
                <div className="custom-input-group">
                    <p>Fiat</p>
                    <div className="relative">
                    <Dropdown>
                    <Dropdown.Toggle  id="dropdown-basic" className="coin-section-ab">
                    <div >
                            
                            <img src={btcimage}/>
                            <span>BTC</span>
                        </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-box">
                    <div class="mb-3 input-group"><input placeholder="Search" aria-describedby="basic-addon2" class="box-search form-control"/></div>
                        <Dropdown.Item href="#/action-1"><img src={btcimage} className="li-icon"/><span>AED</span></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"><img src={btcimage} className="li-icon"/><span>AED</span></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"><img src={btcimage} className="li-icon"/><span>AED</span></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"><img src={btcimage} className="li-icon"/><span>AED</span></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"><img src={btcimage} className="li-icon"/><span>AED</span></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"><img src={btcimage} className="li-icon"/><span>AED</span></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"><img src={btcimage} className="li-icon"/><span>AED</span></Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                        
                    </div>
                </div>
                <div className="custom-input-group">
                    <p>Payment</p>
                    <div className="relative">
                            {/* <button className="normal-btn">
                            <span>All Payments</span>
                            <i class="fa-solid fa-caret-down"></i></button> */}
                            <select className="custom-seletor-search">
                                <option>All Payments</option>
                                <option>Bank Transefer</option>
                            </select>
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
                    
                    <td>
                    {
                        p2pType == "buy" &&<button className="custom-btn-sm" onClick={buyhandleShow}>Buy USDT</button>
                    }
                    {
                        p2pType == "sale" &&<button className="custom-btn-sm" onClick={salehandleShow}>Sale USDT</button>
                    }
                        </td>

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
            <Modal show={buyshow} onHide={buyhandleClose} size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="buy-section-modal-main"
                >
                <Modal.Body>
                    <Row>
                        <Col lg={6}>
                            <div className="modal-buy-section">
                                <div>
                                <span className="text-icon">u</span>
                                <span>  Flow Trader</span>
                                <span>  265 orders  </span>
                                <span>  100% Completion</span>

                                </div>
                                <div className="buy-modal-inner">
                                    <br/>
                                    <div>
                                        <span>Price : </span> <span className="text-green">  1.007 USD</span>
                                        <br/>

                                        <span>Payment Time Limit  : </span> <span >  15 Minutes</span>
                                    </div>
                                    <br/>
                                    <div>
                                        <span>Available  : </span> <span >  1.007 USDT</span>
                                        <br/>

                                        <span>Seller's payment method  :  </span> <span >    ABA</span>
                                    </div>
                                </div>
                                <div className="buy-modal-footer">
                                    <h5>Terms and Conditions</h5>
                                    <div className="text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                        <Form>
                        <Form.Group className="mb-4 position-relative" controlId="pay">
                        <Form.Label>I want to pay</Form.Label>
                        <Form.Control type="text" placeholder="500 - 500" />
                        <span className="text-ab">USD</span>
                        </Form.Group>
                        <Form.Group className="mb-4 position-relative" controlId="recieve">
                        <Form.Label>I will recieve</Form.Label>
                        <Form.Control type="text" placeholder="0.00" />
                        <span className="text-ab">USDT</span>
                        </Form.Group>
                        <div className="text-center">
                        <a type="text" className="custom-btn secondary-btn" onClick={buyhandleClose} >Cancel</a>
                        <a className="custom-btn primary-btn" onClick={buyhandleClose}>Buy USDT</a>
                        </div>
                        </Form>

                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
            {/* sale modal  */}
            <Modal show={saleshow} onHide={salehandleClose} size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="buy-section-modal-main"
                >
                <Modal.Body>
                    <Row>
                        <Col lg={6}>
                            <div className="modal-buy-section">
                                <div>
                                <span className="text-icon">u</span>
                                <span>  Flow Trader</span>
                                <span>  265 orders  </span>
                                <span>  100% Completion</span>

                                </div>
                                <div className="buy-modal-inner">
                                    <br/>
                                    <div>
                                        <span>Price : </span> <span className="text-green">  1.007 USD</span>
                                        <br/>

                                        <span>Payment Time Limit  : </span> <span >  15 Minutes</span>
                                    </div>
                                    <br/>
                                    <div>
                                        <span>Available  : </span> <span >  1.007 USDT</span>
                                        <br/>

                                        <span>Buyer's payment method  :  </span> <span >    ABA</span>
                                    </div>
                                </div>
                                <div className="buy-modal-footer">
                                    <h5>Terms and Conditions</h5>
                                    <div className="text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                        <Form>
                        <Form.Group className="mb-2 position-relative" controlId="pay">
                        <Form.Label>I want to sale</Form.Label>
                        <Form.Control type="text" placeholder="500 - 500" />
                        <span className="text-ab">USD</span>
                        </Form.Group>
                        <span className="flex-end">Balance : 0.00 USDT</span>
                        <Form.Group className="mb-4 position-relative" controlId="recieve">
                        <Form.Label>I will recieve</Form.Label>
                        <Form.Control type="text" placeholder="0.00" />
                        <span className="text-ab">USDT</span>
                        </Form.Group>
                        <Form.Group className="mb-4 " controlId="recieve">
                        <Form.Label>Payment Method</Form.Label>
                        <button type="text" className="w-100 custom-btn secondary-btn" onClick={salehandleClose} >Set my payment method</button>
                        
                        </Form.Group>
                        <div className="text-center">
                        
                        <a type="text" className="custom-btn secondary-btn" onClick={salehandleClose} >Cancel</a>
                        <a className="custom-btn primary-btn" onClick={salehandleClose}>Sale USDT</a>
                        </div>
                        </Form>

                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
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