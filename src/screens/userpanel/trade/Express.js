import { Col, Container, Form, Nav, Row, Tab, Table, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom"
import btcimage from '../../../assets/images/btc.svg';
import Accordion from "./Accordion";
import Icon1 from '../../../assets/images/icon_3.png';
import Icon2 from '../../../assets/images/icon_2.png';
import Icon3 from '../../../assets/images/icon_3.png';
import BlackHeader from "../../../components/p2p/BlackHeader";
import { useState } from "react";
import CoinsModal from "../../../components/modals/coinsModal";



function Express(props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [formType,setFormType] = useState('buy');
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
        <Container>
        <div className="express-section">
          <Row>
              <Col lg={5} sm={12} className="m-auto">
                 <div className="box-bg shadow">
                 <div className="form-tabs">
                 <Nav variant="pills" defaultActiveKey="link-1">
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={(e)=>setFormType("buy")}>Buy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={(e)=>setFormType("sell")}>Sell</Nav.Link>
                </Nav.Item>
                </Nav>
                 </div>
                 <div className="express-form-section">
                      
                      <Form>
                      <Form.Group className="mb-5 mt-3 position-relative" controlId="ammount">
                        <Form.Label>Pay</Form.Label>
                        <Form.Control type="text" placeholder="Ammount" />
                        <div className="coins-btn-ab" onClick={handleShow}>
                        <div className="coins align-items-center flex-end content">
                          <div>
                              
                          <img width={30} src={require('../../../assets/images/btc.svg').default}/>
                            <span>BTC</span>
                            <i class="fa fa-chevron-down"></i>
                          </div>
                            
                        </div>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-5 position-relative" controlId="ammount">
                        <Form.Label>Recieve</Form.Label>
                        <Form.Control type="text" placeholder="Ammount" />
                        <div className="coins-btn-ab" onClick={handleShow}>
                        <div className="coins align-items-center flex-end content">
                          <div>
                              
                          <img width={30} src={require('../../../assets/images/btc.svg').default}/>
                            <span>BTC</span>
                            <i class="fa fa-chevron-down"></i>
                          </div>
                            
                        </div>
                        </div>
                    </Form.Group>
                    {
                        formType == "buy" ? <>
                        <button class="custom-icon-btn primary-btn mb-5 w-100">Buy</button>
                        </>:
                        <>
                        <button class="custom-icon-btn primary-btn mb-5 w-100">Sell</button>
                        
                        </>
                    }
                      </Form>
                    
                  </div>
                 </div>
              </Col>
          </Row>
        </div>
        <CoinsModal showModal={show} hideModal={handleClose}/>

        </Container>


        {props.footer}

        </>

    )

}

export default Express;