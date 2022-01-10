import { useState } from "react";
import { Container,Row,Col, Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom"
import { SwapModal } from "../../components";


function Swap(props){
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getFrom = () =>{

    }
    const getTo = () =>{

    }
    return (
        <>
        {props.header}
        <section className="dashboard-section">
        <Container>
            <Link to={"/"} className="swap-link"><i class="fa fa-angle-left"></i> SWAP</Link>
        <Row>
            <Col lg={6} className="swap-main">
                <div className="swap-section">
                <div className="swap-head d-flex">
                    <div>
                    <img width={100} src={require('../../assets/images/favicon-white.png').default}/>
                    </div>
                    <div className="text">
                    <h4>Swap your crypto</h4>
                    <span>Fastly swap your tokens to any token of your choice</span>
                    </div>
                </div>
                <div className="swapping bg-section">
                <div className="custom-overlay"></div>
                    <h3 className="text-center">SWAP</h3>
                    <Form>
                        <Form.Group>
                            <label className="label">From</label>
                            <button type="button" onClick={handleShow} className="btn form-control swap-btn text-right">
                                <div className="coins d-flex align-items-center content">
                                <img width={30} src={require('../../assets/images/btc.svg').default}/>
                                <span>BTC</span>
                                <div>
                                <i class="fa fa-chevron-down"></i>
                                </div>
                                </div>
                            </button>
                        </Form.Group>
                        <div className="text-center">
                            <button type="button" class="btn btn-orange swap"><i class="fa fa-exchange swap-icon"></i></button>
                        </div>
                        <Form.Group>
                            <label className="label">To</label>
                            <button type="button" onClick={handleShow} className="btn form-control swap-btn text-right">
                                <div className="coins d-flex align-items-center content">
                                <img width={30} src={require('../../assets/images/btc.svg').default}/>
                                <span>BTC</span>
                                <div>
                                <i class="fa fa-chevron-down"></i>
                                </div>
                                </div>
                            </button>
                        </Form.Group>
                        <Form.Group>
                            <label className="label">Amount</label>
                            <button type="button" className="btn form-control swap-btn text-right">
                                <div className="coins d-flex align-items-center content">
                                <img width={30} src={require('../../assets/images/btc.svg').default}/>
                                <span>BTC</span>
                                <div>
                                <i class="fa fa-chevron-down"></i>
                                </div>
                                </div>
                            </button>
                        </Form.Group>

                        <button class="btn  btn-lg btn-crypto btn-orange form-control" type="submit">SWAP</button>
                    </Form>
                </div>
                </div>
            </Col>
        </Row>
        <SwapModal showModal={show} hideModal={handleClose}/>
        </Container>
        </section>
        </>
    )
}
export default Swap