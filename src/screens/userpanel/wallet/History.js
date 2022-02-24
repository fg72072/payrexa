import { useState } from "react";
import { Container,Row,Col,Form,Dropdown,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import BtcImage from "../../../assets/images/btc.svg";

function WalletHistory(props){

    
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
                <Form.Group className="mt-3 div" controlId="type">
                <Form.Label>Type</Form.Label>
                <Form.Select >
                <option>Deposit</option>
                <option value="1">Withdraw</option>
                <option value="2">Auto Deduction</option>
                <option value="3">Auto Funding</option>
                <option value="3">Arrears Repayment</option>
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
                <Form.Label>Assets</Form.Label>
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
                 <Form.Group className="mt-3 div" controlId="type">
                <Form.Label>Status</Form.Label>
                <Form.Select >
                <option value="1">All</option>
                <option value="2">Completed</option>
                <option value="3">Pending</option>
                 </Form.Select>
                 </Form.Group >
                 <Form.Group className="mt-3 div" controlId="txn">
                  <Form.Label>TxID</Form.Label>
                  <Form.Control type="text" placeholder="Enter TxID" />
                </Form.Group>
                </div>
                <div className="dashboard-margin table-responsive">
                <Table responsive="sm">
            <thead>
              <tr>
                <th>Time</th>
                <th>Type</th>
                <th>Deposit wallet</th>
                <th>Asset</th>
                <th>Ammount</th>
                <th>Destination</th>
                <th>TxID</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2022-01-22 14:11</td>
                <td>Deposit</td>
                <td>Spot Wallet</td>
                <td>BNB</td>
                <td>0.00001</td>
                <td>0x000bdgertert43453453543</td>
                <td>0x000bdgertert43453453543</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>2022-01-22 14:11</td>
                <td>Deposit</td>
                <td>Spot Wallet</td>
                <td>BNB</td>
                <td>0.00001</td>
                <td>0x000bdgertert43453453543</td>
                <td>0x000bdgertert43453453543</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>2022-01-22 14:11</td>
                <td>Deposit</td>
                <td>Spot Wallet</td>
                <td>BNB</td>
                <td>0.00001</td>
                <td>0x000bdgertert43453453543</td>
                <td>0x000bdgertert43453453543</td>
                <td>Completed</td>
              </tr>
            </tbody>
           </Table>
                </div>
            </div>
        </div>

        </>
    )

}
export default WalletHistory;