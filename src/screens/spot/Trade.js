import { useState } from "react";
import { Container,Row,Col,Form,Dropdown,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import BtcImage from "../../assets/images/btc.svg";
import ResetImage from "../../assets/images/spt-reset.png"
import UnlockImage from "../../assets/images/spt-unlock.png"
import PhoneImage from "../../assets/images/spt-phone.png"
import EmailImage from "../../assets/images/spt-email.png"
import DepositImage from "../../assets/images/spt-deposit.png"
import MissingImage from "../../assets/images/spt-missing.png"
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import "../../assets/css/trade.css";
import TradeRuleModal from "../../components/modals/TradeRule";
import TransferModal from "../../components/modals/Transfer";
import OrderIconOne from '../../assets/images/order-icon1.png'
import OrderIconTwo from '../../assets/images/order-icon2.png'
import OrderIconThree from '../../assets/images/order-icon3.png'

function SpotTrade(props){

    const [trade,setTrade] = useState('market');
    const [tradetype,setTradetype] = useState('buy')
    const [order,setOrder] = useState("open");
    const [spottype,setSpottype] = useState('limit');

    const [transfershow, setTransfershow] = useState(false);
    const transfer_close = () => setTransfershow(false);
    const transfer_show = () => setTransfershow(true);

    const [show, setShow] = useState(false);
    const trade_close = () => setShow(false);
    const trade_show = () => setShow(true);
    
    return (
        <div className="black">

        {props.header}
           
            <div className="dashboard-main support-padding">
        
                <div className="mt-3 tradingview-main-responsive">
                    <Col lg={8} className="custom-col-tradeview chart-border">
                    <div className="spot-trade-top-second">
                        <div className="first">
                            <div className="dropdown-coins">
                            <h4>BTC</h4>
                            <i class="fa-solid fa-caret-down"></i>
                            <div className="all-coin-list">
                            <input className="search w-100 mb-2" placeholder="Search"/>
                            <ul className="ul">
                                <li className="li">
                                    <Link to={'#'} className="a"><span>BTC</span><i class="fa-solid fa-caret-down"></i></Link>
                                    <ul>
                                        <li>
                                            <Link to={"#"}>BTC</Link>
                                        </li>
                                        <li>
                                            <Link to={"#"}>BTC</Link>
                                        </li>
                                        <li>
                                            <Link to={"#"}>BTC</Link>
                                        </li>
                                        <li>
                                            <Link to={"#"}>BTC</Link>
                                        </li>
                                        <li>
                                            <Link to={"#"}>BTC</Link>
                                        </li>
                                        <li>
                                            <Link to={"#"}>BTC</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="li">
                                    <Link to={'#'} className="a">BTC</Link>
                                </li>
                                <li className="li">
                                    <Link to={'#'} className="a">BTC</Link>
                                </li>
                                <li className="li">
                                    <Link to={'#'} className="a">BTC</Link>
                                </li>
                            
                            </ul>
                            <div className="top-second">
                            <span>Pair</span>
                            <span>Price</span>
                              <span>Change<i class="fa-solid fa-right-left swap-pair"></i></span>
                            </div>
                            <div className="order-body right-order-one">
                        <div className="">
                            <span>4343.23</span>
                            <span className="red">0.0004</span>
                            <span className="red">434.3233</span>
                        </div>
                        <div className="">
                            <span>4343.23</span>
                            <span className="red">0.0004</span>
                            <span className="green">434.3233</span>
                        </div>
                        <div className="">
                            <span>4343.23</span>
                            <span className="green">0.0004</span>
                            <span className="green">434.3233</span>
                        </div>
                        <div className="">
                            <span>4343.23</span>
                            <span className="red">0.0004</span>
                            <span className="red">434.3233</span>
                        </div>
                        <div className="">
                            <span>4343.23</span>
                            <span className="red">0.0004</span>
                            <span className="red">434.3233</span>
                        </div>
                        <div className="">
                            <span>4343.23</span>
                            <span className="red">0.0004</span>
                            <span className="green">434.3233</span>
                        </div>
                        <div className="">
                            <span>4343.23</span>
                            <span className="green">0.0004</span>
                            <span className="green">434.3233</span>
                        </div>
                        <div className="">
                            <span>4343.23</span>
                            <span className="red">0.0004</span>
                            <span className="red">434.3233</span>
                        </div>
                        <div className="">
                            <span>4343.23</span>
                            <span className="red">0.0004</span>
                            <span className="red">434.3233</span>
                        </div>
                        <div className="">
                            <span>4343.23</span>
                            <span className="red">0.0004</span>
                            <span className="green">434.3233</span>
                        </div>
                        <div className="">
                            <span>4343.23</span>
                            <span className="green">0.0004</span>
                            <span className="green">434.3233</span>
                        </div>
                        <div className="">
                            <span>4343.23</span>
                            <span className="red">0.0004</span>
                            <span className="red">434.3233</span>
                        </div>
                        <div className="">
                            <span>4343.23</span>
                            <span className="red">0.0004</span>
                            <span className="red">434.3233</span>
                        </div>
                        <div className="">
                            <span>4343.23</span>
                            <span className="red">0.0004</span>
                            <span className="green">434.3233</span>
                        </div>
                        <div className="">
                            <span>4343.23</span>
                            <span className="green">0.0004</span>
                            <span className="green">434.3233</span>
                        </div>
                        <div className="">
                            <span>4343.23</span>
                            <span className="red">0.0004</span>
                            <span className="red">434.3233</span>
                        </div>
                    </div>
                        </div>
                            </div>
                            <span>NEO</span>
                        </div>
                        <div>
                            <h5>0.000566</h5>
                            <span>$24.91</span>
                        </div>
                        <div>
                            <h5>24h Change</h5>
                            <span>0.000057 +11.22%</span>
                        </div>
                        <div>
                            <h5>24h High</h5>
                            <span>0.000574</span>
                        </div>
                        <div>
                            <h5>24h Low</h5>
                            <span>0.000503</span>
                        </div>
                        <div>
                            <h5>24h Volume(NEO)</h5>
                            <span>232,124.21</span>
                        </div>
                        <div>
                            <h5>24h Volume(BTC)</h5>
                            <span>126.39</span>
                        </div>
                    </div>
                    <TradingViewWidget
                           width= "100%"
                           height= "441"
                           symbol= "BINANCE:BTCUSDT"
                           interval= "D"
                           timezone= "Etc/UTC"
                           theme= "dark"
                           style= "1"
                           locale= "en"
                           toolbar_bg= "rgb(22, 26, 30)"
                           enable_publishing= {false}
                           hide_side_toolbar= {false}
                           allow_symbol_change= {true}
                           hotlist= {false}
                           container_id= "tradingview_0cf12"
                    />
                    <div className="mt-4">
                        <Row>
                        <Col lg={12}>
                        <div className="order-header">
                            <ul>
                                <li>
                                    <Link to={"#"} onClick={(e)=>setOrder("open")} className={order == "open" && "c-tab-active"}>
                                        Open Orders(0)
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} onClick={(e)=>setOrder("orderhistory")} className={order == "orderhistory" && "c-tab-active"}>
                                        Order History
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} onClick={(e)=>setOrder("tradehistory")} className={order == "tradehistory" && "c-tab-active"}>
                                        Trade History
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"} onClick={(e)=>setOrder("funds")} className={order == "funds" && "c-tab-active"}>
                                        Funds
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        {
                            order == "open" &&
                        <div className="table-responsive">
                            <Table >
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Pair</th>
                                <th>Type</th>
                                <th>Side</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Filled</th>
                                <th>Total</th>
                                <th>Trigger Conditions</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>2022-1-1 12:12:12</td>
                                <td>LUNA/USDT</td>
                                <td>Limit</td>
                                <td><span className="text-red">Sell</span></td>
                                <td>84.15</td>
                                <td>0.99</td>
                                <td></td>
                                <td>84.15 USDT</td>
                                <td>----------</td>
                            </tr>
                
                            </tbody>
                        </Table>
                        </div>
                        }
                        {
                            order == "orderhistory" && 
                            <>
                            <div className="spot-filter">
                            <Link to={"#"} class="custom-btn-x-sm-sec btn-gray">1 Day</Link>
                            <Link to={"#"} class="custom-btn-x-sm-sec btn-gray">1 Week</Link>
                            <Link to={"#"} class="custom-btn-x-sm-sec btn-gray">1 Month</Link>
                            <Link to={"#"} class="custom-btn-x-sm-sec btn-gray">3 Months</Link>
                            <div className="from-to">
                            <div>
                            <span>From</span>
                            </div>
                            <div>
                                <input type="date" className="trade-input"/>
                            </div>
                            <div>
                            <span>To</span>
                            </div>
                            <div>
                                <input type="date" className="trade-input"/>
                            </div>
                            </div>
                            <Link to={"#"} class="custom-btn-x-sm-sec btn-gray">Search</Link>
                            <Link to={"#"} class="custom-btn-x-sm-sec btn-gray">Reset</Link>
                        </div>
                        <div className="table-responsive">
                        <Table >
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Pair</th>
                                <th>Type</th>
                                <th>Side</th>
                                <th>Average</th>
                                <th>Price</th>
                                <th>Executed</th>
                                <th>Amount</th>
                                <th>Total</th>
                                <th>Trigger Conditions</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>2022-1-1 12:12:12</td>
                                <td>LUNA/USDT</td>
                                <td>Limit</td>
                                <td><span className="text-red">Sell</span></td>
                                <td>84.15</td>
                                <td>84.15</td>
                                <td>0.99</td>
                                <td>0.99</td>
                                <td>84.15 USDT</td>
                                <td>----------</td>
                                <td>status</td>
                            </tr>
                            <tr>
                                <td>2022-1-1 12:12:12</td>
                                <td>LUNA/USDT</td>
                                <td>Limit</td>
                                <td><span className="text-red">Sell</span></td>
                                <td>84.15</td>
                                <td>84.15</td>
                                <td>0.99</td>
                                <td>0.99</td>
                                <td>84.15 USDT</td>
                                <td>----------</td>
                                <td>status</td>
                            </tr>
                            <tr>
                                <td>2022-1-1 12:12:12</td>
                                <td>LUNA/USDT</td>
                                <td>Limit</td>
                                <td><span className="text-red">Sell</span></td>
                                <td>84.15</td>
                                <td>84.15</td>
                                <td>0.99</td>
                                <td>0.99</td>
                                <td>84.15 USDT</td>
                                <td>----------</td>
                                <td>status</td>
                            </tr>
                            </tbody>
                        </Table>
                        </div>
                   
                            </>
                        
                        }
                        {
                            order == "tradehistory" &&
                            <>
                            <div className="spot-filter">
                            <Link to={"#"} class="custom-btn-x-sm-sec btn-gray">1 Day</Link>
                            <Link to={"#"} class="custom-btn-x-sm-sec btn-gray">1 Week</Link>
                            <Link to={"#"} class="custom-btn-x-sm-sec btn-gray">1 Month</Link>
                            <Link to={"#"} class="custom-btn-x-sm-sec btn-gray">3 Months</Link>
                            <div className="from-to">
                            <div>
                            <span>From</span>
                            </div>
                            <div>
                                <input type="date" className="trade-input"/>
                            </div>
                            <div>
                            <span>To</span>
                            </div>
                            <div>
                                <input type="date" className="trade-input"/>
                            </div>
                            </div>
                            <Link to={"#"} class="custom-btn-x-sm-sec btn-gray">Search</Link>
                            <Link to={"#"} class="custom-btn-x-sm-sec btn-gray">Reset</Link>
                            </div>
                            <div className="table-responsive">
                            <Table >
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Pair</th>
                                <th>Side</th>
                                <th>Price</th>
                                <th>Filled</th>
                                <th>Fee</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>2022-1-1 12:12:12</td>
                                <td>LUNA/USDT</td>
                                <td><span className="text-red">Sell</span></td>
                                <td>84.15</td>
                                <td>0.99</td>
                                <td>0.99 USDT</td>
                                <td>84.15 USDT</td>
                            </tr>
                
                            </tbody>
                            </Table>
                            </div>
                    
                            </>
                        }
                        {
                            order == "funds" &&
                            <div className="table-responsive">
                            <Table responsive="sm">
                            <thead>
                            <tr>
                                <th>Coin</th>
                                <th>Total Balance</th>
                                <th>Available Balance</th>
                                <th>In Order</th>
                                <th>BTC Value</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>LUNA/USDT</td>
                                <td>84.15</td>
                                <td>0.99</td>
                                <td>in order</td>
                                <td>84.15</td>
                            </tr>
                
                            </tbody>
                            </Table>
                            </div>
                         
                        }
                        </Col>
                        </Row>
                    </div>
                    </Col>
                    <Col lg={2} className="custom-col-tradeview order-border">
                        <div className="spot-left-bar">
                            <h5 className="mt-1">Order Book</h5>
                            <div className="order-icon-flex">
                                <div>
                                    <img src={OrderIconOne}/>
                                </div>
                                <div>
                                    <img src={OrderIconTwo}/>
                                </div>
                                <div>
                                    <img src={OrderIconThree}/>
                                </div>
                            </div>
                            <div className="top-second">
                                <span>Price(USDT)</span>
                                <span>Ammount(BTC)</span>
                                <span>Total</span>
                            </div>
                            <div className="order-body">
                                <div className="sell">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="sell">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="sell">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="sell">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="sell">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="sell">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="sell">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="sell">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="sell">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="sell">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="sell">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="sell">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="sell">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="sell">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                            </div>
                            <div className="bottom-calc">
                                <h4>43,765.21</h4>
                                <span>$43,773.01</span>
                            </div>
                            <div className="order-body">
                                <div className="buy">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="buy">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="buy">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="buy">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="buy">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="buy">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="buy">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="buy">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="buy">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="buy">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="buy">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="buy">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                                <div className="buy">
                                    <span>4343.23</span>
                                    <span>0.0004</span>
                                    <span>434.3233</span>
                                </div>
                            </div>
                            <div className="mt-2">
                                <h5>Trades</h5>
                            </div>
                            <div className="top-second">
                                <span>Price(BUSD)</span>
                                <span>Amount(TLM)</span>
                                <span>Time</span>
                            </div>
                            <div className="order-body right-order-one">
                                <div className="">
                                    <span>4343.23</span>
                                    <span className="red">0.0004</span>
                                    <span className="red">434.3233</span>
                                </div>
                                <div className="">
                                    <span>4343.23</span>
                                    <span className="red">0.0004</span>
                                    <span className="green">434.3233</span>
                                </div>
                                <div className="">
                                    <span>4343.23</span>
                                    <span className="green">0.0004</span>
                                    <span className="green">434.3233</span>
                                </div>
                                <div className="">
                                    <span>4343.23</span>
                                    <span className="red">0.0004</span>
                                    <span className="red">434.3233</span>
                                </div>
                                <div className="">
                                    <span>4343.23</span>
                                    <span className="red">0.0004</span>
                                    <span className="red">434.3233</span>
                                </div>
                                <div className="">
                                    <span>4343.23</span>
                                    <span className="red">0.0004</span>
                                    <span className="green">434.3233</span>
                                </div>
                                <div className="">
                                    <span>4343.23</span>
                                    <span className="green">0.0004</span>
                                    <span className="green">434.3233</span>
                                </div>
                                <div className="">
                                    <span>4343.23</span>
                                    <span className="red">0.0004</span>
                                    <span className="red">434.3233</span>
                                </div>
                                <div className="">
                                    <span>4343.23</span>
                                    <span className="red">0.0004</span>
                                    <span className="red">434.3233</span>
                                </div>
                                <div className="">
                                    <span>4343.23</span>
                                    <span className="red">0.0004</span>
                                    <span className="green">434.3233</span>
                                </div>
                                <div className="">
                                    <span>4343.23</span>
                                    <span className="green">0.0004</span>
                                    <span className="green">434.3233</span>
                                </div>
                                <div className="">
                                    <span>4343.23</span>
                                    <span className="red">0.0004</span>
                                    <span className="red">434.3233</span>
                                </div>
                                <div className="">
                                    <span>4343.23</span>
                                    <span className="red">0.0004</span>
                                    <span className="red">434.3233</span>
                                </div>
                                <div className="">
                                    <span>4343.23</span>
                                    <span className="red">0.0004</span>
                                    <span className="green">434.3233</span>
                                </div>
                                <div className="">
                                    <span>4343.23</span>
                                    <span className="green">0.0004</span>
                                    <span className="green">434.3233</span>
                                </div>
                                <div className="">
                                    <span>4343.23</span>
                                    <span className="red">0.0004</span>
                                    <span className="red">434.3233</span>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col lg={2} className="custom-col-tradeview buy-sell-border">
                    <div className="buy-sell-section">
                        <div className="top">
                            <h5>Spot</h5>
                            <div className="li dropdown-custom">
                                <i class="fa-solid fa-ellipsis-vertical pointer"></i>
                                <ul>
                                    <li>
                                        <Link to={"#"} onClick={trade_show}>Trading Rules</Link>
                                    </li>
                                    <li>
                                        <Link to={"/faq/23"}>FAQ</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="buy-sell-tabs">
                            <div className={tradetype == "buy" && "buy-tab-active-green"}>
                            <Link to={"#"} onClick={(e)=>setTradetype("buy")}>Buy</Link>
                            </div>
                            <div className={tradetype == "sell" && "buy-tab-active-red"}>
                            <Link to={"#"} onClick={(e)=>setTradetype("sell")}>Sell</Link>
                            </div>
                        </div>
                        <div className="form-top">
                            <span onClick={(e)=>setSpottype('limit')} className={spottype == "limit" && "active"}>Limit</span>
                            <span onClick={(e)=>setSpottype('market')} className={spottype == "market" && "active"}>Market</span>
                            <span onClick={(e)=>setSpottype('stop-limit')} className={spottype == "stop-limit" && "active"}>Stop-limit</span>
                            <span onClick={(e)=>setSpottype('oco')} className={spottype == "oco" && "active"}>OCO</span>

                            </div>
                            <Form className={tradetype == 'sell' && "d-none"}>
                                {
                                    spottype == 'limit' &&
                                    <div className="limit">
                                    <Form.Group className="custom-group-margin" controlId="price">
                                        <div className="position-relative">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="custom-group-margin" controlId="price">
                                        <div className="position-relative">
                                        <Form.Label>Ammount</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">BTC</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="custom-group-margin" controlId="price">
                                        <div className="position-relative">
                                        <Form.Label>Total</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                    </div>
                                }
                                {
                                    spottype == 'market' &&
                                    <div className="market">
                                    <Form.Group className="custom-group-margin" controlId="price">
                                        <div className="position-relative">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="custom-group-margin" controlId="price">
                                        <div className="position-relative">
                                        <Form.Label>Ammount</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">BTC</span>
                                        </div>
                                    </Form.Group>
                                    </div>
                                }
                                {
                                    spottype == 'stop-limit' &&
                                    <div className="stop-limit">
                                     <Form.Group className="custom-group-margin" controlId="stop">
                                        <div className="position-relative">
                                        <Form.Label>Stop</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="custom-group-margin" controlId="limit">
                                        <div className="position-relative">
                                        <Form.Label>Limit</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="custom-group-margin" controlId="ammount">
                                        <div className="position-relative">
                                        <Form.Label>Ammount</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">BTC</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="custom-group-margin" controlId="total">
                                        <div className="position-relative">
                                        <Form.Label>Total</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                    </div>
                                }
                                  {
                                    spottype == 'oco' &&
                                    <div className="oco">
                                    <Form.Group className="custom-group-margin" controlId="price">
                                        <div className="position-relative">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                     <Form.Group className="custom-group-margin" controlId="stop">
                                        <div className="position-relative">
                                        <Form.Label>Stop</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="custom-group-margin" controlId="limit">
                                        <div className="position-relative">
                                        <Form.Label>Limit</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="custom-group-margin" controlId="ammount">
                                        <div className="position-relative">
                                        <Form.Label>Ammount</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">BTC</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="custom-group-margin" controlId="total">
                                        <div className="position-relative">
                                        <Form.Label>Total</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                    </div>
                                }
                                
                                <div className="mt-3 mb-4">
                                    <button className="custom-btn green-btn w-100">Buy</button>
                                </div>
                            </Form>
                            <Form className={tradetype == 'buy' && "d-none"}>
                                {
                                    spottype == 'limit' &&
                                <div className="limit">
                                <Form.Group className="custom-group-margin" controlId="price">
                                    <div className="position-relative">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text"/>
                                    <span className="text-ab">USDT</span>
                                    </div>
                                </Form.Group>
                                <Form.Group className="custom-group-margin" controlId="price">
                                    <div className="position-relative">
                                    <Form.Label>Ammount</Form.Label>
                                    <Form.Control type="text"/>
                                    <span className="text-ab">BTC</span>
                                    </div>
                                </Form.Group>
                                <Form.Group className="custom-group-margin" controlId="price">
                                    <div className="position-relative">
                                    <Form.Label>Total</Form.Label>
                                    <Form.Control type="text"/>
                                    <span className="text-ab">USDT</span>
                                    </div>
                                </Form.Group>
                                </div>
                                }
                                {
                                    spottype == 'market' &&
                                    <div className="market">
                                    <Form.Group className="custom-group-margin" controlId="price">
                                        <div className="position-relative">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="custom-group-margin" controlId="price">
                                        <div className="position-relative">
                                        <Form.Label>Ammount</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">BTC</span>
                                        </div>
                                    </Form.Group>
                                    </div>
                                }
                                    {
                                    spottype == 'stop-limit' &&
                                    <div className="stop-limit">
                                     <Form.Group className="custom-group-margin" controlId="stop">
                                        <div className="position-relative">
                                        <Form.Label>Stop</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="custom-group-margin" controlId="limit">
                                        <div className="position-relative">
                                        <Form.Label>Limit</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="custom-group-margin" controlId="ammount">
                                        <div className="position-relative">
                                        <Form.Label>Ammount</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">BTC</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="custom-group-margin" controlId="total">
                                        <div className="position-relative">
                                        <Form.Label>Total</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                    </div>
                                }
                                {
                                    spottype == 'oco' &&
                                    <div className="oco">
                                    <Form.Group className="custom-group-margin" controlId="price">
                                        <div className="position-relative">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                     <Form.Group className="custom-group-margin" controlId="stop">
                                        <div className="position-relative">
                                        <Form.Label>Stop</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="custom-group-margin" controlId="limit">
                                        <div className="position-relative">
                                        <Form.Label>Limit</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="custom-group-margin" controlId="ammount">
                                        <div className="position-relative">
                                        <Form.Label>Ammount</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">BTC</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="custom-group-margin" controlId="total">
                                        <div className="position-relative">
                                        <Form.Label>Total</Form.Label>
                                        <Form.Control type="text"/>
                                        <span className="text-ab">USDT</span>
                                        </div>
                                    </Form.Group>
                                    </div>
                                }
                                
                                <div className="mt-3 mb-4">
                                    <button className="custom-btn red-btn w-100">Sell</button>
                                </div>
                            </Form>
                    </div>
                    <div className="buy-sell-footer">
                        <h5>Asset</h5>
                        <Link to={"/wallet/deposit"} className="custom-btn-x-sm btn-gray">Deposit</Link>
                        <Link to={"#"} className="custom-btn-x-sm btn-gray" onClick={transfer_show}>Transfer</Link>
                        <Link to={"/wallet/withdrawal"} className="custom-btn-x-sm btn-gray">Withdraw</Link>
                        <div className="mt-3">
                        <div className="d-flex justify-content-between">
                            <span className="text-white">ETH <span style={{color:'var(--gray)'}}>Available:</span></span>
                            <span className="text-white">0.00000000</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="text-white">USDT <span style={{color:'var(--gray)'}}>Available:</span></span>
                            <span className="text-white">0.00000000</span>
                        </div>
                        </div>
                    </div>
                    </Col>
               
                </div>
            </div>
            <TradeRuleModal show={show} trade_close={trade_close}/>
            <TransferModal class="black" transfershow={transfershow} transfer_close={transfer_close}/>
            {/* {props.footer} */}

        </div>
    )

}
export default SpotTrade;