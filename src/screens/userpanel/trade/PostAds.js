import { Col, Container, Form, Nav, Row, Tab, Table, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom"
import btcimage from '../../../assets/images/btc.svg';
import Accordion from "./Accordion";
import Icon1 from '../../../assets/images/icon_3.png';
import Icon2 from '../../../assets/images/icon_2.png';
import Icon3 from '../../../assets/images/icon_3.png';
import BlackHeader from "../../../components/p2p/BlackHeader";
import PostStep2 from "./poststeps/Step2";
import { useState } from "react";
import PostStep3 from "./poststeps/Step3";

function PostAds(props){

    const [stepNum,setStepNum] = useState(1);

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
      <div className="white-header">
          <h2>Post new Ads</h2>
      </div>
        <Container>
        <div className="trading-section">
            
            <div>
                <div class="post-ads-bar">


                <div class="verification-item">
                
                    <div class={stepNum == 1 ? "verification-circle circle-done":"verification-circle" }>
                        1
                    </div>
                    <div className="verification-content">

                    <p className="f-bold">Set Type & Price</p>

                    </div>
                    
                   

                </div>

                <hr class="verification-hr" />

                <div class="verification-item">

                    <div class={stepNum == 2 ? "verification-circle circle-done":"verification-circle" }>
                        2
                    </div>

                    <div className="verification-content">

                    <p className="f-bold">Set Trading Ammount & Payment Method</p>

                    </div>

                </div>

                <hr class="verification-hr" />

                <div class="verification-item">

                    <div class={stepNum == 3 ? "verification-circle circle-done":"verification-circle" }>
                        3
                    </div>

                    <div className="verification-content">

                        <p className="f-bold">Set Remarks & Automatic Response</p>

                    </div>

                    </div>

                </div>
            </div>

        </div>
        <div className="trading-section">
        <div className="express-section">
        <div className="post-new-box">
        
        <div className="post-inner-box">
            <PostStep3/>
            <div className="flex-end">
            <button class="custom-btn primary-btn  mb-5  flex-end">Next</button>
            </div>
        </div>
        </div>
        </div>
        </div>
        

        </Container>


        {props.footer}

        </>

    )

}

export default PostAds;