import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Accountactivity(props){

    return(

        <>
        {props.header}
        <div className="dashboard-section">
            {props.sidebar}
            <div className="dashboard-main">

                    <div className="back-link">
                        <Link to={'/security'}><i class="fa-solid fa-angle-left"></i> Security</Link>
                    </div>

                    <h3 className="mb-4">Account Activity</h3>
                    
    
                    <Table responsive="lg">

                            <thead className="t-heading grey-bg">

                                <tr>

                                <th>Date</th>
                                <th>Source</th>
                                <th>Status</th>
                                <th>Ip Address</th>
                                
                                </tr>

                            </thead>

                            <tbody className="text-center align-items-center">




                                <tr>

                                    <td>2021-12-21 14:45:11</td>
                                    <td>Web</td>
                                    <td>Completed</td>
                                    <td>192.168.1.15.1</td>
                                   
                                </tr>

                                <tr>

                                    <td>2021-12-21 14:45:11</td>
                                    <td>Web</td>
                                    <td>Completed</td>
                                    <td>192.168.1.15.1</td>

                                </tr>

                                <tr>

                                    <td>2021-12-21 14:45:11</td>
                                    <td>Web</td>
                                    <td>Completed</td>
                                    <td>192.168.1.15.1</td>

                                </tr>

                                <tr>

                                    <td>2021-12-21 14:45:11</td>
                                    <td>Mobile</td>
                                    <td>Completed</td>
                                    <td>192.168.1.15.1</td>

                                </tr>

                                <tr>

                                    <td>2021-12-21 14:45:11</td>
                                    <td>Web</td>
                                    <td>Incompleted</td>
                                    <td>192.168.1.15.1</td>

                                </tr>


                            </tbody>


                    </Table>

                    <p className="f-bold text-end my-5">Suspicious account activity? 
                        <Link to={'/security/disable-account'} className="red"> Disable Account</Link> 
                    </p>

                
            </div>
        </div>
        </>

    )


}

export default Accountactivity;