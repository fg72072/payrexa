import { Col, Container,Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useState} from "react";
import CoinsModal from "../../components/modals/coinsModal";
import SelectNetwork from "../../components/modals/selectnetwork";

function Deposit(props) {

    const [show, setShow] = useState(false);
    const [changepasswordshow, setSelectnetworkshow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // Select Network
    const network_close = () => setSelectnetworkshow(false);
    const select_network_modal = () => setSelectnetworkshow(true);

  return (
    <>
      {props.header}

      <Container className="mt-5">

        <div className="back-link">

          <Link to={"/wallet"}>
            <i class="fa-solid fa-angle-left"></i> Wallet
          </Link>

        </div>

        <div className="grey-bg deposit-flex">

            <img src={require("../../assets/images/excited-man.png").default} className="deposit-img"/>

          <div class="deposit-line">

            <div class="deposit-item">
              <div class="deposit-circle">1</div>

              <div className="deposit-content">
                <p className="f-bold">Copy Address</p>
                <p>Choose the crypto and its network on this page, and crypto the deposit address.</p>
              </div>
            </div>

            <hr class="deposit-hr" />

            <div class="deposit-item">
              <div class="deposit-circle">2</div>

              <div className="deposit-content">
                <p className="f-bold">Initial a withdrawal</p>
                <p>Initiate a withdrawal on the withdrawal platform.</p>
              </div>
            </div>

            <hr class="deposit-hr" />

            <div class="deposit-item">
              <div class="deposit-circle">3</div>

              <div className="deposit-content">
                <p className="f-bold">Newtork confirmation</p>
                <p>Wait for the blockchain network to confirm your transfer.</p>
              </div>

            </div>

            <hr class="deposit-hr" />

            <div class="deposit-item">
              <div class="deposit-circle">4</div>

              <div className="deposit-content">
                <p className="f-bold">Deposit Successful</p>
                <p>After the network confirmation, PayRexa will credit the crypto for you.</p>
              </div>

            </div>

          </div>

        </div>

        <Row className="my-5 gx-5">

           
            <Col lg={"8"}>

                <Form>


                <Form.Group className="mb-5 form-group-flex">

                    <p className="f-bold">Select coin</p>

                    <div className="group-basis">

                    <label className="label">Coin</label>
                    <button type="button" onClick={handleShow} className="btn form-control swap-btn text-right">
                        <div className="coins d-flex align-items-center content">

                          
                                <img width={30} src={require('../../assets/images/btc.svg').default}/>
                                <span>BTC</span>
                           

                                                 
                            <i class="fa fa-chevron-down"></i>
                            
                        </div>
                    </button>

                    </div>
                </Form.Group>

                

                <Form.Group className="mb-5 form-group-flex">

                        <p className="f-bold">Deposit to</p>

                        <div className="group-basis">

                        <label className="label">Coin</label>
                        <button type="button" onClick={select_network_modal} className="btn form-control swap-btn text-right">
                            <div className="coins d-flex align-items-center content">

                                Select Network                 
                                <i class="fa fa-chevron-down"></i>
                                
                            </div>
                        </button>

                        </div>
                </Form.Group>
                                        


                            
                </Form>
            </Col>

            <Col lg={"4"}>

                <div className="d-flex justify-content-between">

                        <h4>Deposit hasn't arrived? </h4>
                        <Link to={'#'} className="learn-more">Learn More</Link>

                </div>

                <div className="query">

                    <p className="f-bold">If you encounter the following problems during the deposit process, you can go 
                        to Deposit Status Query to search for your current deposit status or retrieve your assets bia self service application</p>

                    <ul>

                        <li>Deposit has not arrived after a long while</li>
                        <li>Didnt't enter MEMO/Tag Currently</li>
                        <li>Deposit unlisted coins</li>

                    </ul>
                    

                <Link to={'#'} className="grey-btn">Search <i class="fa-solid fa-arrow-right-long"></i></Link>

                </div>

            </Col>
       

        </Row>


        


            <CoinsModal showModal={show} hideModal={handleClose}/>

            <SelectNetwork network_close={network_close} show={changepasswordshow}/>

      </Container>
    </>
  );
}

export default Deposit;
