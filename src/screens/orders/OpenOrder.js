import {Form, Row,Col,Table} from "react-bootstrap";
import { Link } from "react-router-dom";


function OpenOrder(props){

    return(

        <>
        
            {props.header}



           

            <div className="dashboard-section">

                {props.sidebar}

                <div className="dashboard-main">

                <div className="normal-box big-bg ">
                    <h3>Open Orders</h3>
                </div>
                <div className="dashboard-margin">
                    <div>
                    <button className="custom-btn primary-btn">All</button>
                    <button className="custom-btn secondary-btn">Limit Order</button>
                    <button className="custom-btn secondary-btn">Stop-Limit Order</button>
                    <button className="custom-btn secondary-btn">Limit-Maker</button>
                    </div>
                </div>
                <div className="mt-3">
                <Table responsive="sm">
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
                </div>
             
            
            </div>

          

        </>

    )

}

export default OpenOrder