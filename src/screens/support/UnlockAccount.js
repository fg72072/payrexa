import { useState } from "react";
import { Container,Row,Col,Form,Dropdown,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import BtcImage from "../../assets/images/btc.svg";
import ResetImage from "../../assets/images/spt-reset.png"
import UnlockImage from "../../assets/images/spt-unlock.png"
import PhoneImage from "../../assets/images/spt-phone.png"
import EmailImage from "../../assets/images/spt-email.png"
import DepositImage from "../../assets/images/spt-deposit.png"
import MissingImage from "../../assets/images/spt-missing.png"
import UnlockModal from "../../components/modals/Unlock";

function UnlockAccount(props){
    const [show, setShow] = useState(false);
    const unlock_close = () => setShow(false);
    const unlock_show = () => setShow(true);

    
    return (
        <>
        {props.header}

            {props.sidebar}
            <div className="dashboard-main">
                <div className="normal-box big-bg">
                <div class="back-link d-flex align-items-center"><Link to={'/security'}><i class="fa-solid fa-angle-left"></i> Security</Link></div>
                </div>
               
            </div>
            <div className="dashboard-main support-padding ">
                <Row>
                   <Col lg={5} className="m-auto">
                   <h4 className="text-center mt-5">Reactivate Account</h4>
                   <div className="box-bg form-section p-5 mt-4">
                   <div className="box-header-purple">
                   <i class="fa-solid fa-circle-info"></i>
                       <span>For security purposes, please update your password and ensure that your email, phone verification or Google Authenticator can only be accessed by you.</span>
                   </div>

        
                    <button className="custom-btn primary-btn w-100 mt-5" onClick={unlock_show}>Reactivate Account</button>
                    <p className="text-center mt-1">
                    &copy;	2017 - 2022 payrexa.com. All rights reserved
                    </p>
                   </div>
                   </Col>
             
            <UnlockModal show={show} unlock_close={unlock_close}/>
                </Row>
            </div>
            {props.footer}

        </>
    )

}
export default UnlockAccount;