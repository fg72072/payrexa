import { useState } from "react";
import { Container,Row,Col, Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom"
import { SwapModal } from "../../components";
import ReferModal from "../../components/userpanel/refermodal";
function Dashboard(props){
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
 {props.header}
        <section className="dashboard-section">
        <Container>
            <Link to={"/"} className="swap-link"><i class="fa fa-angle-left"></i> SWAP</Link>
        <Row>
                    <div className="text text-center text-box">
                    <h4>WELCOME BACK.</h4>
                    <span>User</span>
                    </div>
                <Col lg={6}>
                <div className="swap-section bg-section">
                <div className="custom-overlay"></div>
                <div className="swapping">
                    <h3 className="text-right pointer"><i class="fa fa-eye-slash"></i></h3>
                    <h3 className="purple text-center">Wallet Balance</h3>
                    <h1 className="text-center total">$0.00</h1>
                    <Link to={"/dashboard/swap"} class="btn  btn-lg mt-4 btn-orange form-control" type="submit">SWAP</Link>
                    <button class="btn  btn-lg mt-4 orange-border form-control" type="submit" onClick={handleShow}>WITHDRAW</button>
                </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className="swap-section mt-20">
                <div className="swap-head d-flex pointer" onClick={() => setModalShow(true)}>
                    <div>
                    <img width={100} src={require('../../assets/images/refer.png').default}/>
                    </div>
                    <div className="text">
                    <h4>Refer a Friend</h4>
                    <span>You can copy your referral link or share directly with your contacts</span>
                    </div>
                </div>
                <h5 className="mt-2">PayRexa Checklist</h5>
                <div className="swap-head d-flex">
                    <div className="text">
                    <h4>Enable Two Factor Authentication</h4>
                    <span>Secure your account</span>
                    </div>
                </div>
                <div className="swap-head d-flex">
                    <div className="text">
                    <h4>Verify KYC</h4>
                    <span>Crypto swap & withdrawal</span>
                    </div>
                </div>
                </div>
            </Col>
        </Row>
        </Container>
        <SwapModal showModal={show} hideModal={handleClose}/>
        <ReferModal
          show={modalShow}
          onHide={() => setModalShow(false)}/>
        </section>
        
        </>
    )
}
export default Dashboard