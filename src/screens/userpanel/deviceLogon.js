import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Accountlogon(props){

    return(

        <>
        {props.header}
        <div className="dashboard-section">
            {props.sidebar}
            <div className="dashboard-main">

                    <div className="back-link">
                        <Link to={'/security'}><i class="fa-solid fa-angle-left"></i> Security</Link>
                    </div>

                    <h3 className="mb-4">Device Logon</h3>
                    
    
                    <Table responsive="lg">

                            <thead className="t-heading grey-bg">

                                <tr>

                                <th>Device</th>
                                <th>Date</th>
                                <th>Location</th>
                                <th>Ip Address</th>
                                <th>Action</th>
                                
                                </tr>

                            </thead>

                            <tbody className="text-center align-items-center">




                                <tr>

                                    <td>Chrome V96.0.4664.110 (Windows)</td>
                                    <td>2021-12-21 14:45:41</td>
                                    <td>karachi, Pakistan</td>
                                    <td>192.168.1.15.1</td>
                                    <td>
                                        <Link to={'#'} className="red">Delete</Link> 
                                    </td>
                                   
                                </tr>


                                <tr>

                                    <td>Chrome V96.0.4664.110 (Windows)</td>
                                    <td>2021-12-21 14:45:41</td>
                                    <td>karachi, Pakistan</td>
                                    <td>192.168.1.15.1</td>
                                    <td>
                                        <Link to={'#'} className="red">Delete</Link> 
                                    </td>

                                </tr>


                                <tr>

                                    <td>Chrome V96.0.4664.110 (Windows)</td>
                                    <td>2021-12-21 14:45:41</td>
                                    <td>karachi, Pakistan</td>
                                    <td>192.168.1.15.1</td>
                                    <td>
                                        <Link to={'#'} className="red">Delete</Link> 
                                    </td>

                                </tr>


                                <tr>

                                    <td>Chrome V96.0.4664.110 (Windows)</td>
                                    <td>2021-12-21 14:45:41</td>
                                    <td>karachi, Pakistan</td>
                                    <td>192.168.1.15.1</td>
                                    <td>
                                        <Link to={'#'} className="red">Delete</Link> 
                                    </td>

                                </tr>

                               



                            </tbody>


                    </Table>

                    
                
            </div>
        </div>
        </>

    )


}

export default Accountlogon;