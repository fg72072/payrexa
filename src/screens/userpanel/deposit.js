import { Col, Container,Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useState} from "react";
import CoinsModal from "../../components/modals/coinsModal";
import SelectNetwork from "../../components/modals/selectnetwork";
import BNBImage from '../../assets/images/BNB.svg'
import DepositDetailModal from "../../components/modals/DepositDetail";

function Deposit(props) {

    const [show, setShow] = useState(false);
    const [changepasswordshow, setSelectnetworkshow] = useState(false);
    const [depositshow, setDepositshow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // Select Network
    const network_close = () => setSelectnetworkshow(false);
    const select_network_modal = () => setSelectnetworkshow(true);

    const deposit_close = () => setDepositshow(false);
    const deposit_show = () => setDepositshow(true);

  return (
    <>
      {props.header}

      <Container className="mt-5">

        <div className="back-link">

          <Link to={"/wallet/overview"}>
            <i class="fa-solid fa-angle-left"></i> Wallet
          </Link>

        </div>

        <h3 className="mb-4">Deposit Crypto</h3>

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

                        <label className="label">Network</label>
                        <button type="button" onClick={select_network_modal} className="btn form-control swap-btn text-right">
                            <div className="coins d-flex align-items-center content">

                                Select Network                 
                                <i class="fa fa-chevron-down"></i>
                                
                            </div>
                        </button>
                        <div className="mt-4">

                        <label className="label">Address</label>
                        <div className="d-flex justify-content-between">
                          <p>0x76aB059eb0D26AE8521042becb44FD89ecA8B78E</p>
                          <i class="fa-regular fa-copy pointer"></i>
                        </div>
                        <div className="deposit-footer-text">
                        <div>
                          <span>Expected arrival</span>
                          <p>12 network confirmations</p>
                        </div>
                        <div>
                          <span>Expected unlock</span>
                          <p>12 network confirmations</p>
                        </div>
                        </div>
                        <div className="deposit-footer-text">
                        <div>
                          <span>Minimum Deposit</span>
                          <p>0.00001</p>
                        </div>
                        <div>
                          <span>Select Wallet</span>
                          <li className="flex-div">
                            <input type="radio" name="wallet_type"/>
                            <span>Spot Wallet</span>
                          </li>
                          <li className="flex-div">
                            <input type="radio" name="wallet_type"/>
                            <span>Funding Wallet</span>
                          </li>
                        </div>
                        </div>
                        <div>
                          <span>Send only USDT to this deposit address</span>
                          <p>Ensure the network is <span className="red">Ethereum (ERC20)</span>.</p>
                        </div>
                        </div>
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
        <Row>
            <Col lg={12}>
            <h2>Recent Deposit</h2>
            <div className="normal-box ">
             <div onClick={deposit_show}>
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
              <p>Deposit wallet   <span className="f-bold">Spot Wallet</span></p>
             </div>
            </div>
            <div className="mt-3 mb-3">
            <Link to={'/wallet/deposit/history'} className="anchor">View All</Link>
            </div>
            </Col>
        </Row>

        


            <CoinsModal showModal={show} hideModal={handleClose}/>
            <DepositDetailModal depositshow={depositshow} deposit_close={deposit_close}/>
            <SelectNetwork network_close={network_close} show={changepasswordshow}/>

      </Container>
    </>
  );
}

export default Deposit;
