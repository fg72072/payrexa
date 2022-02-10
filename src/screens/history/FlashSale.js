import {Form, Row,Col,Table} from "react-bootstrap";
import { Link } from "react-router-dom";


function FlashSaleHistory(props){

    return(

        <>
        
            {props.header}

            <div className="dashboard-section">

                {props.sidebar}

                <div className="dashboard-main">

                <div className="normal-box big-bg ">
                    <h3>FlashSale</h3>
                </div>
                <div className="dashboard-margin">
    
                </div>
                <div className="mt-3">
                <Table responsive="sm">
                        <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Tokens purchased</th>
                            <th>Price(BNB)</th>
                            <th>Amount Deducted (BNB)</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Test</td>
                            <td>3</td>
                            <td>43</td>
                            <td>5</td>
                            <td>2022-1-1 12:12:12</td>
                        </tr>
              
                        </tbody>
                    </Table>
                </div>
                </div>
             
            
            </div>

          

        </>

    )

}

export default FlashSaleHistory