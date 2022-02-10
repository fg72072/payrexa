import {Form, Row,Col,Table} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";


function LotteryHistory(props){

    const {id} = useParams()

    return(

        <>
        
            {props.header}

            <div className="dashboard-section">

                {props.sidebar}

                <div className="dashboard-main">

                <div className="normal-box big-bg ">
                    <h3>Lottery</h3>
                    <div className="mt-3">
                        <Link to={'/history/lottery/PROCESSING'} className={id == "PROCESSING" ? "custom-btn primary-btn":"custom-btn secondary-btn"}>Ticket Claim History</Link>
                        <Link to={'/history/lottery/COMPLETED'} className={id == "COMPLETED" ? "custom-btn primary-btn":"custom-btn secondary-btn"}>Winning Tickets</Link>

                    </div>
                </div>
                <div className="dashboard-margin">
    
                </div>
                <div className="mt-3">
                    {
                        id == "PROCESSING" &&
                        <Table responsive="sm">
                        <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>No. of Winning Tickets</th>
                            <th>Total Tokens Purchased</th>
                            <th>Order Price</th>
                            <th>Amount Deducted (BNB)</th>
                            <th>deduction status</th>
                            <th>Order Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Test</td>
                            <td>32</td>
                            <td>43 USDT</td>
                            <td>3 USDT</td>
                            <td>4</td>
                            <td>status</td>
                            <td>14:32:3</td>
                        </tr>
              
                        </tbody>
                    </Table>
                     }
                          {
                        id == "COMPLETED" &&
                        <Table responsive="sm">
                        <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Number of Tickets</th>
                            <th>Order Price</th>
                            <th>Order Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Test</td>
                            <td>32</td>
                            <td>43 USDT</td>
                            <td>14:32:3</td>
                        </tr>
              
                        </tbody>
                    </Table>
                     }
                
                </div>
                </div>
             
            
            </div>

          

        </>

    )

}

export default LotteryHistory