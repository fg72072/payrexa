import { Row,Col, Tab, Tabs, Table } from "react-bootstrap"
import { Link } from "react-router-dom"
import EmailImg from '../../assets/images/emails.png';
import LoginImg from '../../assets/images/login.png';
import PadlockImg from '../../assets/images/padlock.png';
import VerificationImg from '../../assets/images/verification.png';
import CustomerImg from '../../assets/images/customer-service.png';

function Security(props){
    return (
        <>
        {props.header}
        <div className="dashboard-section">
            {props.sidebar}
            <div className="dashboard-main">
                <div className="normal-box big-bg">
                    <h3>Security</h3>
                    <p>To increase your account security. it is recommended that you enable 2FA</p>
                </div>
                <div className="dashboard-margin">
                <Row>
                    <Col lg={12}>
                    <div class="normal-box">
                        <h4>Increase your account security</h4>
                        <hr/>
                        <div className="security-section">
                            <ul>
                                <li><div className="flex-text-icon"><img src={VerificationImg}/><span>PHONE AUTHENTICATION</span></div> <button className="custom-btn-sm">Setup</button></li>
                                <hr/>
                                <li><div className="flex-text-icon"><img src={EmailImg}/><span>EMAIL AUTHENTICATION </span></div> <div><button className="custom-btn-sm">Manage</button><button className="custom-btn-sm">Remove</button></div></li>
                                <h4 className="mt-3 mb-4">Device and Activities</h4>
                                <hr/>
                                <li><div className="flex-text-icon"><img src={PadlockImg}/><span>CHANGE PASSWORD</span></div> <button className="custom-btn-sm">Change</button></li>
                                <hr/>
                                <li><div className="flex-text-icon"><img src={LoginImg}/><span>DEVICE LOGON</span></div> <button className="custom-btn-sm">Manage</button></li>
                                <hr/>
                                <li><div className="flex-text-icon"><img src={CustomerImg}/><span>ACCOUNT ACTIVITY</span></div> <button className="custom-btn-sm">More</button></li>
                                <a className="flex-end mt-4 custom-disable-btn red pointer">Disable Account</a>

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
export default Security