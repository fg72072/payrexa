import { Col, Container, Form, Row, Tab, Table, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom"
import btcimage from '../../../assets/images/btc.svg';
import Accordion from "./Accordion";
import Icon1 from '../../../assets/images/icon_3.png';
import Icon2 from '../../../assets/images/icon_2.png';
import Icon3 from '../../../assets/images/icon_3.png';
import BlackHeader from "../../../components/p2p/BlackHeader";


function MyAds(props){


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
          <h2>My Ads</h2>
      </div>
        <Container>
        <div className="trading-section">
            <div className="filter">
                <div className="custom-input-group">
                    <p>Assets</p>
                    <div>
                        <select className="custom-selector">
                            <option>All Assets</option>
                        </select>
                    </div>
                </div>
                <div className="custom-input-group">
                    <p>Type</p>
                    <div>
                        <select className="custom-selector">
                            <option>All Type</option>
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
                    <p>Created Time</p>
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
                <th>Assets</th>
                <th>Type</th>
                <th>Status</th>
                <th>Created</th>
                <th>Operation</th>
                </tr>
            </thead>

            <tbody className="text-center align-items-center">
                <tr>

                    <td><div className="td-flex"><i class="round-icon fa-brands fa-bitcoin"></i><div><span>USDT</span></div></div></td>
                    <td><span className="red">SELL</span></td>
                    <td>Published</td>
                    <td>2-12-2020</td>
                    <td>Sold</td>

                </tr>
                <tr>
                <td><div className="td-flex"><i class="round-icon fa-brands fa-bitcoin"></i><div><span>USDT</span></div></div></td>
                <td><span className="red">SELL</span></td>
                <td>Published</td>
                <td>2-12-2020</td>
                <td>Sold</td>

                </tr>
                <tr>

                <td><div className="td-flex"><i class="round-icon fa-brands fa-bitcoin"></i><div><span>USDT</span></div></div></td>
                <td><span className="red">SELL</span></td>
                <td>Published</td>
                <td>2-12-2020</td>
                <td>Sold</td>

                </tr>



            </tbody>


            </Table>
            </div>
        </div>
        

        </Container>


        {props.footer}

        </>

    )

}

export default MyAds;