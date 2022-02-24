import {Form, Row,Col,Table} from "react-bootstrap";
import { Link } from "react-router-dom";


function TradeOrder(props){

    return(

        <>
        
            {props.header}

            <div className="dashboard-section order-body-width">

                {props.sidebar}

                <div className="dashboard-main ">

                <div className="normal-box big-bg order-head-mobile">
                   <div>
                   <span>Spot</span>
                    <h3>Order History</h3>
                   </div>
                    <i class="fa-solid fa-angle-right open-order-sidebar"></i>

                </div>
                <div className="dashboard-margin">
                <div className="history-filter">
                <Form.Group className="mt-3 div" controlId="from">
                  <Form.Label>From</Form.Label>
                  <Form.Control type="date"  />
                </Form.Group>
                <Form.Group className="mt-3 div" controlId="to">
                  <Form.Label>To</Form.Label>
                  <Form.Control type="date"  />
                </Form.Group>
                <Form.Group className="mt-3 div" controlId="Pair">
                <Form.Label>Pair</Form.Label>
                <Form.Select >
                <option>All</option>
                <option value="1">1INCH</option>
                <option value="2">1INCHDOWN</option>
                <option value="3">1INCHUP</option>
                 </Form.Select>
                 </Form.Group>
                 <Form.Group className="mt-3 div" controlId="Coin">
                <Form.Label>Coin</Form.Label>
                <Form.Select >
                <option>All</option>
                <option value="1">USDT</option>
                <option value="2">BUSD</option>
                <option value="3">BNB</option>
                 </Form.Select>
                 </Form.Group>
     
                 <Form.Group className="mt-3 div" controlId="side">
                <Form.Label>Side</Form.Label>
                <Form.Select >
                <option value="1">All</option>
                <option value="2">Buy</option>
                <option value="3">Sell</option>
                 </Form.Select>
                 </Form.Group >
                 <div className="mt-5 div margin-between-btn">
                     <button className="custom-btn primary-btn">Search</button>
                     <button className="custom-btn secondary-btn ">Reset</button>
                 </div>
                </div>
                </div>
                <div className="mt-3 table-responsive">
                <Table>
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
                </div>
             
            
            </div>

          

        </>

    )

}

export default TradeOrder