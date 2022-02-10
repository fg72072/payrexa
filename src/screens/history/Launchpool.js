import {Form, Row,Col,Table} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";


function LaunchPoolHistory(props){

    const {id} = useParams();

    return(

        <>
        
            {props.header}

            <div className="dashboard-section">

                {props.sidebar}

                <div className="dashboard-main">

                <div className="normal-box big-bg ">
                    <h3>Launchpool Order</h3>
                    <div className="mt-3">
                        <Link to={'/history/launchpool/rewards'} className={id == "rewards" ? "custom-btn primary-btn":"custom-btn secondary-btn"}>Rewards Claimed</Link>
                        <Link to={'/history/launchpool/distribute'} className={id == "distribute" ? "custom-btn primary-btn":"custom-btn secondary-btn"}>Distribution History</Link>
                    </div>
                </div>
                <div className="dashboard-margin">
    
                </div>
                <div className="mt-3">
                    {
                        id == "rewards" &&
                        <Table responsive="sm">
                        <thead>
                        <tr>
                            <th>Reward Time</th>
                            <th>Token</th>
                            <th>Amount Claimed</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>2022-1-1 12:12:12</td>
                            <td>Token</td>
                            <td>43</td>
                        </tr>
              
                        </tbody>
                    </Table>
                    }
                    {
                        id == "distribute" &&
                        <Table responsive="sm">
                        <thead>
                        <tr>
                            <th>Distribution Time</th>
                            <th>Token</th>
                            <th>Distribution Amount</th>
                            <th>Stake</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>2022-1-1 12:12:12</td>
                            <td>Token</td>
                            <td>43</td>
                            <td>Stake</td>
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

export default LaunchPoolHistory