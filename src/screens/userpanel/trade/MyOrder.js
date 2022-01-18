import { Col, Container, Form, Row, Tab, Table, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom"
import btcimage from '../../../assets/images/btc.svg';
import Accordion from "./Accordion";
import Icon1 from '../../../assets/images/icon_3.png';
import Icon2 from '../../../assets/images/icon_2.png';
import Icon3 from '../../../assets/images/icon_3.png';
import BlackHeader from "../../../components/p2p/BlackHeader";
import { useState } from "react";

function MyOrders(props){

    const [orderType,setOrderType] = useState("processing")
    console.log(orderType)
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
      <div className="ul">
        <Tabs defaultActiveKey="processing" id="uncontrolled-tab-example" className="mb-3" >
        <Tab eventKey="processing" title="Processing" onClick={(e)=>setOrderType("orders")}>
            
        </Tab>
        <Tab eventKey="all-orders" title="All Orders" onClick={(e)=>setOrderType("orders")}>
        </Tab>
        </Tabs>
            </div>
      </div>
        <Container>
        {
            orderType == 'processing' ?<>
            <div className="trading-section">
            <div>
            <Table responsive="lg">

            <thead className="t-heading">
                <tr>
                <th >Type/Coin</th>
                <th>Fiat ammount</th>
                <th>Price</th>
                <th>Crypto ammount</th>
                <th>Counterparty</th>
                <th>Status</th>
                <th>Operation</th>
                </tr>
            </thead>

            <tbody className="text-center align-items-center">
            <tr>

            <td><div className="d-flex justify-content-between"><span className="buy-type">Buy</span><div><span>12-12-2020 4:3:23</span></div></div></td>
            <td><span className="red"></span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>435345345345435345345</td>

            </tr>
            <tr>

                <td><div className="td-flex"><i class="round-icon fa-brands fa-bitcoin"></i><div><span>USDT</span></div></div></td>
                <td>30,00.00 USD</td>
                <td>30.35 USD</td>
                <td>320 USDT</td>
                <td>Seller Name</td>
                <td>Processing</td>
                <td>Contact</td>

            </tr>
             
            <tr>

            <td><div className="d-flex justify-content-between"><span className="buy-type">Buy</span><div><span>12-12-2020 4:3:23</span></div></div></td>
            <td><span className="red"></span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>435345345345435345345</td>

            </tr>
            <tr>
                <td><div className="td-flex"><i class="round-icon fa-brands fa-bitcoin"></i><div><span>USDT</span></div></div></td>
                <td>30,00.00 USD</td>
                <td>30.35 USD</td>
                <td>320 USDT</td>
                <td>Seller Name</td>
                <td>Processing</td>
                <td>Contact</td>

            </tr>
 


            </tbody>


            </Table>
            </div>
        </div>
            </>:<>
            <div className="trading-section">
            <div className="filter">
                <div className="custom-input-group">
                    <p>Coins</p>
                    <div>
                        <select className="custom-selector">
                            <option>All Coins</option>
                        </select>
                    </div>
                </div>
                <div className="custom-input-group">
                    <p>Order Type</p>
                    <div>
                        <select className="custom-selector">
                            <option>Buy/Sell</option>
                        </select>
                    </div>
                </div>
                <div className="custom-input-group">
                    <p>Status</p>
                    <div>
                        <select className="custom-selector">
                            <option>All Status</option>
                        </select>
                    </div>
                </div>
                <div className="custom-input-group">
                    <p>Date</p>
                    <div>
                        <input type="datetime-local"/>
                    </div>
                </div>
                <div className="custom-input-group">
                    <p></p>
                    <div className="mt-4">
                        <a className="flex-end  custom-disable-btn red pointer">Reset Filter</a>
                    </div>
                </div>
               
            </div>
            <div>
            <Table responsive="lg">

            <thead className="t-heading">
                <tr>
                <th>Type/Coin</th>
                <th>Fiat ammount</th>
                <th>Price</th>
                <th>Crypto ammount</th>
                <th>Counterparty</th>
                <th>Status</th>
                <th>Operation</th>
                </tr>
            </thead>

            <tbody className="text-center align-items-center">
            <tr>

            <td><div className="d-flex justify-content-between"><span className="buy-type">Buy</span><div><span>12-12-2020 4:3:23</span></div></div></td>
            <td><span className="red"></span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>435345345345435345345</td>

            </tr>
            <tr>

                <td><div className="td-flex"><i class="round-icon fa-brands fa-bitcoin"></i><div><span>USDT</span></div></div></td>
                <td>30,00.00 USD</td>
                <td>30.35 USD</td>
                <td>320 USDT</td>
                <td>Seller Name</td>
                <td>Processing</td>
                <td>Contact</td>

            </tr>
             
            <tr>

            <td><div className="d-flex justify-content-between"><span className="buy-type">Buy</span><div><span>12-12-2020 4:3:23</span></div></div></td>
            <td><span className="red"></span></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>435345345345435345345</td>

            </tr>
            <tr>
                <td><div className="td-flex"><i class="round-icon fa-brands fa-bitcoin"></i><div><span>USDT</span></div></div></td>
                <td>30,00.00 USD</td>
                <td>30.35 USD</td>
                <td>320 USDT</td>
                <td>Seller Name</td>
                <td>Processing</td>
                <td>Contact</td>

            </tr>
 


            </tbody>


            </Table>
            </div>
        </div>
        
            </>
        }
        
        

        </Container>


        {props.footer}

        </>

    )

}

export default MyOrders;