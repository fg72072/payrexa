import { Row,Col, Tab, Tabs, Table } from "react-bootstrap"
import { Link } from "react-router-dom";
import Toggleswitch  from "../../components/misc-components/toggle";


function Setting(props){

   

    return (
        <>
        {props.header}
        <div className="dashboard-section">

            {props.sidebar}

            <div className="dashboard-main">

                <div className="normal-box big-bg">

                    <h3 className="mt-3 mb-3">Settings</h3>

                </div>

                <div className="dashboard-margin">
                <Row>
                    <Col lg={12}>
                    <div class="normal-box">
                        <h4>Order Confirmation</h4>
                        <p className="f-bold">If the order reminder function is enabled, it will need to be reconfirmed every time an order is submitted</p>
                        <hr/>
                        <div className="security-section">
                            <ul>
                                <li>
                                       
                                    <span>Limit Order</span>

                                       <Toggleswitch/>


                                </li>

                                

                                <li>

                                       
                                    <span>Stop-Limit Order</span>
                                    <Toggleswitch/>

                                       
                                </li>

                                <div className="my-5">

                                <h4 className="">Notifications</h4>
                                <p className="f-bold">Once enabled, you will receive relevant notifications within the app and website.</p>

                                </div>

                                <hr/>

                                <li>
                                        
                                    <span>Activities</span>
                                    <Toggleswitch/>

                                </li>

                               

                                <li>
                                       
                                    <span>Trade Notification</span>
                                    <Toggleswitch/>
                                        
                                </li> 

                                <li>
                                       
                                    <span>PayRexa News</span>
                                    <Toggleswitch/>
                                           
                                </li> 

                                <li>
                                       
                                    <span>System Messages</span>
                                    <Toggleswitch/>
                                           
                                </li> 

                                

                               

                              

                            </ul>
                        </div>
                    </div>
                    </Col>
                </Row>
               
                </div>

            </div>
        </div>
        </>
    )
}
export default Setting