import { Col, Container,Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useState} from "react";
import CoinsModal from "../../components/modals/coinsModal";
import SelectNetwork from "../../components/modals/selectnetwork";
import NotFound from '../../assets/images/not-found.png';
import WithdrawDetailModal from "../../components/modals/WithdrawDetail";
import BNBImage from '../../assets/images/BNB.svg'

function Withdrawal(props) {

    const [show, setShow] = useState(false);
    const [changepasswordshow, setSelectnetworkshow] = useState(false);
    const [withdrawshow, setWithdrawshow] = useState(false);

  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // Select Network
    const network_close = () => setSelectnetworkshow(false);
    const select_network_modal = () => setSelectnetworkshow(true);

    const withdraw_close = () => setWithdrawshow(false);
    const withdraw_show = () => setWithdrawshow(true);


  return (
    <>
      {props.header}

      <Container className="mt-5">

        <div className="back-link">

          <Link to={"/wallet/overview"}>
            <i class="fa-solid fa-angle-left"></i> Wallet
          </Link>

        </div>

        <h3 className="mb-4">Withdrawal Crypto</h3>
        <div className="grey-bg deposit-flex">

            <img src={require("../../assets/images/excited-man.png").default} className="deposit-img"/>

          <div class="deposit-line">

            <div class="deposit-item">
              <div class="deposit-circle">1</div>

              <div className="deposit-content">
                <p className="f-bold">Initiate a withdrawal</p>
                <p>Start a withdrawal request on PayRexa</p>
              </div>
            </div>

            <hr class="deposit-hr" />

            <div class="deposit-item">
              <div class="deposit-circle">2</div>

              <div className="deposit-content">
                <p className="f-bold">Get Address</p>
                <p>Copy and paste the deposit address of the reciever</p>
              </div>
            </div>

            <hr class="deposit-hr" />

            <div class="deposit-item">
              <div class="deposit-circle">3</div>

              <div className="deposit-content">
                <p className="f-bold">Newtork confirmation</p>
                <p>Wait for the withdrawal network confirmation.</p>
              </div>

            </div>

            <hr class="deposit-hr" />

            <div class="deposit-item">
              <div class="deposit-circle">4</div>

              <div className="deposit-content">
                <p className="f-bold">Withdrawal Successful</p>
                <p>Withdrawal successfully sent to reciever's address</p>
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

                        <p className="f-bold">Withdrawal to</p>

                        <div className="group-basis">
                            <div className="mb-3">
                            <button className="custom-btn primary-btn">New Address</button>
                            <button className="custom-btn secondary-btn">Address Book</button>
                            </div>
                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter address here" />
                            </Form.Group>
                        <label className="label">Network</label>
                        <button type="button" onClick={select_network_modal} className="btn form-control swap-btn text-right">
                            <div className="coins d-flex align-items-center content">

                                Select Network                 
                                <i class="fa fa-chevron-down"></i>
                                
                            </div>
                        </button>
                        <div className="with-footer-main">
                        <div className="with-footer">
                            <div>
                                <p>BTC spot balance</p>
                                <span>0 BTC</span>
                            </div>
                            <div>
                                <p>Minimal Withdrawal</p>
                                <span>000000.11 BTC</span>
                            </div>
                        </div>
                        <div className="with-footer">
                            <div>
                                <p>Network fee</p>
                                <span>0.00000056 BTC ~ 0.00000065 BTC</span>
                            </div>
                            <div>
                                <p>24h remaining limit</p>
                                <span>00000.11 BTC</span>
                            </div>
                        </div>
                        </div>
                        </div>
                </Form.Group>
                <Form.Group className="mb-5 form-group-flex">

                  <p className="f-bold">Withdraw ammount</p>

                  <div className="group-basis">

                  <Form.Group  className="position-relative">
                  <div className="d-flex justify-content-between">
                  <label className="label">Ammount</label>
                  <label className="label">800000000 BUSD/800000000 BUSD</label>
                  </div>
                  <Form.Control type="text" placeholder="Enter address here" />
                  <span className="text-ab anchor pointer">Max</span>
                  </Form.Group>
                  <div className="deposit-footer-text mt-3">
                        <div>
                        <li className="flex-div">
                            <input type="radio" name="wallet_type"/>
                            <span>Spot Wallet</span>
                          </li>
                          <li className="flex-div">
                            <input type="radio" name="wallet_type"/>
                            <span>Funding Wallet</span>
                          </li>
                    
                        </div>
                        <div>
                          <span className="f-bold">0.20000 BNB</span>
                          <p className="f-bold">0 BNB</p>
                          
                        </div>
                        </div>
                  </div>
                  </Form.Group>
                  <Form.Group className="mb-5 form-group-flex">
                    <p className="f-bold">Total ammount</p>

                    <div className="group-basis">

                    <Form.Group  className="position-relative">
                    <div className="d-flex align-items-center justify-content-between">
                    <div>
                    <h3>0.0000000 BNB</h3>
                    <span>0.0005 BNB network free included</span>
                    </div>
                    <button className="custom-btn secondary-btn">Withdraw</button>
                    </div>
                    </Form.Group>
                    {/* <div className="deposit-footer-text mt-3">
                          <div>
                          <li className="flex-div">
                              <input type="radio" name="wallet_type"/>
                              <span>Spot Wallet</span>
                            </li>
                            <li className="flex-div">
                              <input type="radio" name="wallet_type"/>
                              <span>Funding Wallet</span>
                            </li>
                      
                          </div>
                          <div>
                            <span className="f-bold">0.20000 BNB</span>
                            <p className="f-bold">0 BNB</p>
                            
                          </div>
                          </div> */}
                    </div>
                    </Form.Group>

                            
                </Form>
            </Col>

            <Col lg={"4"}>

                <div className="d-flex justify-content-between">

                        <h4>FAQ </h4>

                </div>

                <div className="query">

                    <ul className="with-faq">

                        <a href="test" target="_blank"><i className="fa-solid fa-pen-to-square"></i><span>Lorem ipsum dolar sit amet, consecteture</span></a>
                        <a href="test" target="_blank"><i className="fa-solid fa-pen-to-square"></i><span>Lorem ipsum dolar sit amet, consecteture</span></a>
                        <a href="test" target="_blank"><i className="fa-solid fa-pen-to-square"></i><span>Lorem ipsum dolar sit amet, consecteture</span></a>
                        <a href="test" target="_blank"><i className="fa-solid fa-pen-to-square"></i><span>Lorem ipsum dolar sit amet, consecteture</span></a>
                        <a href="test" target="_blank"><i className="fa-solid fa-pen-to-square"></i><span>Lorem ipsum dolar sit amet, consecteture</span></a>

                    </ul>
                    


                </div>

            </Col>
       

        </Row>
        <Row>
            <Col lg={12}>
            <h2>Recent Withdraw</h2>
            <div className="normal-box ">
             <div onClick={withdraw_show}>
             <div className="recent-history-row">
              <img src={BNBImage}/>
              <h6 className="h6">   0.0190000 BNB   </h6>
              <p className="p text-green">   Completed</p>
              </div>
              <div className="recent-history-row-second">
              <p>2022-01-22 14:11</p>
              {/* <span>Deposit wallet : Spot Wallet</span> */}
              <p>Network <span className="f-bold">BSC</span></p>
              <p>Address <span className="f-bold">0x0000304232423432423343ewresdfafda</span><i class="fa-solid fa-link ml-1 pointer"></i> <i class="fa-regular fa-copy ml-1 pointer"></i></p>
              <p>TxID <span className="f-bold">0x0000304232423432423343ewresdfafda</span><i class="fa-solid fa-link ml-1 pointer"></i> <i class="fa-regular fa-copy ml-1 pointer"></i></p>
              <p><i class="fa-solid fa-angle-right"></i></p>
              </div>
              <p>Withdraw wallet   <span className="f-bold">Spot Wallet</span></p>
             </div>
            </div>
            <div className="mt-3 mb-3">
            <Link to={'/wallet/deposit/history'} className="anchor">View All</Link>
            </div>
            </Col>
        </Row>

        


            <CoinsModal showModal={show} hideModal={handleClose}/>
            <WithdrawDetailModal withdrawshow={withdrawshow} withdraw_close={withdraw_close}/>
            <SelectNetwork network_close={network_close} show={changepasswordshow}/>

      </Container>
    </>
  );
}

export default Withdrawal;
