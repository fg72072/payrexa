import { useState } from "react";
import { Container,Row,Col,Form,Dropdown,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import BtcImage from "../../../assets/images/btc.svg";

function TransferHistory(props){

    
    return (
        <>
        {props.header}
        <div className="dashboard-section">

            {props.sidebar}
            <div className="dashboard-main">
                <div className="normal-box big-bg">
                    <h3 className="">Transaction History</h3>
                    <div className="mt-4">
                        <Link to={'/wallet/deposit/history'} className="custom-btn primary-btn">Crypto</Link>
                        <Link to={'/wallet/transfer/history'} className="custom-btn secondary-btn">Transfer</Link>
                    </div>
                </div>
                <div className="history-filter">
                <Form.Group className="mt-3 div" controlId="from">
                <Form.Label>From</Form.Label>
                <Form.Select >
                <option>Spot</option>
                 </Form.Select>
                 </Form.Group>
                 <Form.Group className="mt-3 div">
                <Form.Label className="mt-5"></Form.Label>

                 <i class="fa-solid fa-right-left swap-icon-history"></i>
                 </Form.Group>
                 <Form.Group className="mt-3 div" controlId="to">
                <Form.Label>To</Form.Label>
                <Form.Select >
                <option>Cross Margin</option>
                 </Form.Select>
                 </Form.Group>
                 <Form.Group className="mt-3 div" controlId="time">
                <Form.Label>Time</Form.Label>
                <Form.Select >
                <option>Past 7 days</option>
                <option value="1">Past 30 days</option>
                <option value="2">Past 90 days</option>
                 </Form.Select>
                 </Form.Group>
                 <Form.Group className="mt-3 div" controlId="type">
                <Form.Label>Coin</Form.Label>
                 <Dropdown>
                    <Dropdown.Toggle  id="dropdown-basic" className="filter-button-dropdown">
                            <img src={BtcImage}/>
                            <span>BTC</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-box">
                    <div class="mb-3 input-group"><input placeholder="Search" aria-describedby="basic-addon2" class="box-search form-control"/></div>
                        <Dropdown.Item href="#/action-1"><img src={BtcImage} className="li-icon"/><span>AED</span></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"><img src={BtcImage} className="li-icon"/><span>AED</span></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"><img src={BtcImage} className="li-icon"/><span>AED</span></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"><img src={BtcImage} className="li-icon"/><span>AED</span></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"><img src={BtcImage} className="li-icon"/><span>AED</span></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"><img src={BtcImage} className="li-icon"/><span>AED</span></Dropdown.Item>
                        <Dropdown.Item href="#/action-1"><img src={BtcImage} className="li-icon"/><span>AED</span></Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                 </Form.Group>
                </div>
                <div className="dashboard-margin">
                <Table responsive="sm">
            <thead>
              <tr>
                <th>Date</th>
                <th>Coin</th>
                <th>Ammount</th>
                <th>From</th>
                <th>To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2022-01-22</td>
                <td>BNB</td>
                <td>0.00001</td>
                <td>Spot</td>
                <td>Cross Margin</td>
              </tr>
            </tbody>
           </Table>
                </div>
            </div>
        </div>

        </>
    )

}
export default TransferHistory;