import {Form, Row,Col,Table} from "react-bootstrap";
import { Link } from "react-router-dom";


function SubscriptionHistory(props){

    return(

        <>
        
            {props.header}

            <div className="dashboard-section">

                {props.sidebar}

                <div className="dashboard-main">

                <div className="normal-box big-bg ">
                    <h3>Subscription Order</h3>
                </div>
                <div className="dashboard-margin">
    
                </div>
                <div className="mt-3">
                <Table responsive="sm">
                        <thead>
                        <tr>
                            <th>Time</th>
                            <th>Project Name</th>
                            <th>Commited amount</th>
                            <th>Price</th>
                            <th>Deducted</th>
                            <th>Tokens Purchased</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>2022-1-1 12:12:12</td>
                            <td>Test</td>
                            <td>43 USDT</td>
                            <td>5 USDT</td>
                            <td>4 USDT</td>
                            <td>40</td>
                            <td>Status</td>
                        </tr>
              
                        </tbody>
                    </Table>
                </div>
                </div>
             
            
            </div>

          

        </>

    )

}

export default SubscriptionHistory