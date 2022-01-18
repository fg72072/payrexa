import { Col, Container, Form, Row, Tab, Table, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom"
import btcimage from '../../../assets/images/btc.svg';
import Accordion from "./Accordion";
import Icon1 from '../../../assets/images/icon_3.png';
import Icon2 from '../../../assets/images/icon_2.png';
import Icon3 from '../../../assets/images/icon_3.png';
import BlackHeader from "../../../components/p2p/BlackHeader";


function UserCenter(props){


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
         <div className="user-center-header w-100">
         <div className="user-email-section">
          <h2>example@demo.com</h2> <span >Regular User</span>
          </div>
          <div className="d-flex align-items-center">
              <div >
              <h4>P2P Estimated Value (BTC)    <i class="ml-1 fa-regular fa-eye-slash"></i></h4>
              <h4>0.0000000000000 BTC = $0.00000000 </h4>
              
              </div>
              <button class="ml-1 custom-btn-sm d-inline">Become Merchant</button>
          </div>
         </div>
      </div>
        <Container>
        <div className="trading-section">
         <ul className="user-center-ul">
             <li>
                 <p>30d Trades</p>
                 <span>0 Time(s)</span>
             </li>
             <li>
                 <p>30d Completion Rate</p>
                 <span>0%</span>
             </li>
             <li>
                 <p>Avg. Release Time</p>
                 <span>0 Minute(s)</span>
             </li>
             <li>
                 <p>Avg. Pay Time</p>
                 <span>0 Minute(s)</span>
             </li>
             <li>
                 <p>Positive Feedback</p>
                 <span>0 Minute(s)</span>
             </li>
             <li>
                 <p>Positive</p>
             </li>
             <li>
                 <p>30d Trades</p>
                 <span>0 Time(s)</span>
             </li>
             <li>
                 <p>30d Completion Rate</p>
                 <span>0%</span>
             </li>
             <li>
                 <p>Avg. Release Time</p>
                 <span>0 Minute(s)</span>
             </li>
             <li>
                 <p>Avg. Pay Time</p>
                 <span>0 Minute(s)</span>
             </li>
             <li>
                 <p>Positive Feedback</p>
                 <span>0 Minute(s)</span>
             </li>
             <li>
                 <p>Positive</p>
             </li>
         </ul>
        </div>
        

        </Container>


        {props.footer}

        </>

    )

}

export default UserCenter;