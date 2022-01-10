import { useState } from "react";
import { Row,Col, Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap"
function SwapModal({showModal,hideModal}) {
    return (
      <>
        <Modal show={showModal} onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Select a token</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
            placeholder="Search"
            aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
            <i class="fa fa-search"></i>
            </Button>
        </InputGroup>
            <div className="coins-section">
                <ul>
                    <li onClick={hideModal}>
                    <img loading="lazy" src={require('../../assets/images/ADA.svg').default} width="40" height="40"/>
                    <div class="text"><span>ADA</span><span>Cardano</span></div>
                    <i class="fa fa-angle-right"></i>
                    </li>
                    <li onClick={hideModal}>
                    <img loading="lazy" src={require('../../assets/images/AXS.svg').default} width="40" height="40"/>
                    <div class="text"><span>AXS</span><span>Axie Infinity</span></div>
                    <i class="fa fa-angle-right"></i>
                    </li>
                    <li onClick={hideModal}>
                    <img loading="lazy" src={require('../../assets/images/btc.svg').default} width="40" height="40"/>
                    <div class="text"><span>BTC</span><span>Bitcoin</span></div>
                    <i class="fa fa-angle-right"></i>
                    </li>
                    <li onClick={hideModal}>
                    <img loading="lazy" src={require('../../assets/images/BUSD.svg').default} width="40" height="40"/>
                    <div class="text"><span>BUSD</span><span>Binance USD</span></div>
                    <i class="fa fa-angle-right"></i>
                    </li>
                    <li onClick={hideModal}>
                    <img loading="lazy" src={require('../../assets/images/DOGE.svg').default} width="40" height="40"/>
                    <div class="text"><span>DOGE</span><span>Dogecoin</span></div>
                    <i class="fa fa-angle-right"></i>
                    </li>
                    <li onClick={hideModal}>
                    <img loading="lazy" src={require('../../assets/images/ETH.svg').default} width="40" height="40"/>
                    <div class="text"><span>ETH</span><span>Ethereum</span></div>
                    <i class="fa fa-angle-right"></i>
                    </li>
                    <li onClick={hideModal}>
                    <img loading="lazy" src={require('../../assets/images/MATIC.svg').default} width="40" height="40"/>
                    <div class="text"><span>MATIC</span><span>Polygon</span></div>
                    <i class="fa fa-angle-right"></i>
                    </li>
                    <li onClick={hideModal}>
                    <img loading="lazy" src={require('../../assets/images/NGNX.svg').default} width="40" height="40"/>
                    <div class="text"><span>NGNX</span><span>NairaX</span></div>
                    <i class="fa fa-angle-right"></i>
                    </li>
                    <li onClick={hideModal}>
                    <img loading="lazy" src={require('../../assets/images/SHIB.svg').default} width="40" height="40"/>
                    <div class="text"><span>SHIB</span><span>Shiba Inu</span></div>
                    <i class="fa fa-angle-right"></i>
                    </li>
                    <li onClick={hideModal}>
                    <img loading="lazy" src={require('../../assets/images/SOL.svg').default} width="40" height="40"/>
                    <div class="text"><span>SOL</span><span>Solana</span></div>
                    <i class="fa fa-angle-right"></i>
                    </li>
                    <li onClick={hideModal}>
                    <img loading="lazy" src={require('../../assets/images/TRX.svg').default} width="40" height="40"/>
                    <div class="text"><span>TRX</span><span>Tron</span></div>
                    <i class="fa fa-angle-right"></i>
                    </li>
                    <li onClick={hideModal}>
                    <img loading="lazy" src={require('../../assets/images/USDC.svg').default} width="40" height="40"/>
                    <div class="text"><span>USDC</span><span>USD Coin</span></div>
                    <i class="fa fa-angle-right"></i>
                    </li>
                    <li onClick={hideModal}>
                    <img loading="lazy" src={require('../../assets/images/USDT.svg').default} width="40" height="40"/>
                    <div class="text"><span>USDT</span><span>Tether</span></div>
                    <i class="fa fa-angle-right"></i>
                    </li>
                    <li onClick={hideModal}>
                    <img loading="lazy" src={require('../../assets/images/WKD.svg').default} width="40" height="40"/>
                    <div class="text"><span>WKD</span><span>Wakanda Inu</span></div>
                    <i class="fa fa-angle-right"></i>
                    </li>
                </ul>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default SwapModal;