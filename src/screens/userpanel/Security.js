import { useState } from "react"
import { Row,Col, Tab, Tabs, Table, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
import EmailImg from '../../assets/images/emails.png';
import LoginImg from '../../assets/images/login.png';
import PadlockImg from '../../assets/images/padlock.png';
import VerificationImg from '../../assets/images/verification.png';
import CustomerImg from '../../assets/images/customer-service.png';
import PhoneModal from '../../components/modals/Phone';
import EmailModal from "../../components/modals/Email";
import ChangePasswordModal from "../../components/modals/ChangePassword";
function Security(props){


    const [phoneshow, setPhonshow] = useState(false);
    const [emailshow, setEmailshow] = useState(false);
    const [changepasswordshow, setChangepasswordshow] = useState(false);

    // MOBILE AUTHENTICATION POPUP
    const phone_close = () => setPhonshow(false);
    const phone_modal = () => setPhonshow(true);
    // email modal 
    const email_close = () => setEmailshow(false);
    const email_modal = () => setEmailshow(true);

    // CHANGE PASSWORD POPUP
    const ch_pass_close = () => setChangepasswordshow(false);
    const ch_pass_modal = () => setChangepasswordshow(true);
   

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
                        <h4 className="mb-3">Increase your account security</h4>
                        <hr/>
                        <div className="security-section">
                            <ul>
                                <li>
                                        <div className="flex-text-icon">
                                            <img src={VerificationImg}/>
                                            <span>PHONE AUTHENTICATION</span>
                                        </div>

                                        <button className="custom-btn-sm-sec" onClick={phone_modal}>Setup</button>
                                        <PhoneModal phone_close={phone_close} show={phoneshow}/>


                                    </li>

                               

                                <li>

                                        <div className="flex-text-icon">
                                            <img src={EmailImg}/>
                                            <span>EMAIL AUTHENTICATION </span>
                                        </div> 

                                        <div>
                                                <button className="custom-btn-sm" onClick={email_modal}>Manage</button>
                                                <button className="custom-btn-sm-sec">Remove</button>
                                                <EmailModal email_close={email_close} show={emailshow}/>


                                        </div>
                                </li>


                                <h4 className="my-5">Device and Activities</h4>

                                <hr/>

                                <li>
                                        <div className="flex-text-icon">
                                            <img src={PadlockImg}/>
                                            <span>CHANGE PASSWORD</span>
                                        </div> 

                                        <button className="custom-btn-sm-sec" onClick={ch_pass_modal}>Change</button>
                                        <ChangePasswordModal ch_pass_close={ch_pass_close} show={changepasswordshow}/>
                                   
                                </li>

                             

                                <li>
                                        <div className="flex-text-icon">
                                            <img src={LoginImg}/>
                                            <span>DEVICE LOGON</span>
                                        </div> 
                                        <Link to={'/security/device-logon'} className="custom-btn-sm-sec">Manage</Link>
                                        
                                    </li>
                                
                                <li>
                                        <div className="flex-text-icon">
                                            <img src={CustomerImg}/>
                                            <span>ACCOUNT ACTIVITY</span>
                                        </div> 
                                        
                                        

                                        <Link to={'/security/account-activity'} className="custom-btn-sm-sec">More</Link>

                                </li>

                                <Link to={'/security/disable-account'} className="flex-end mt-4 custom-disable-btn red pointer">Disable Account</Link>

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