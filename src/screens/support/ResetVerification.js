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



function ResetVerifiction(props){

    
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
                   <h4 className="text-center mt-5">Reset Security Verification</h4>
                   <div className="box-bg form-section p-5 mt-4">
                   <div className="box-header-purple">
                   <i class="fa-solid fa-circle-info"></i>
                       <span>Withdrawals, P2P selling, and payment services will be disabled for 24 hours after you make this change to protect your account </span>
                   </div>
                   <Form>
                   <h4 className="mt-4">Please select your issue(s):</h4>
                   <Form.Group className="mt-4" controlId="email">
                        <div className="reset-flex-group">
                            <input type="checkbox" className="reset-check"/>
                            <span>032***234234 is unavailable and i would like to reset it.</span>
                        </div>
                    </Form.Group>
                    <button className="custom-btn primary-btn w-100 mt-5">Submit</button>
                    <p className="text-center mt-1">
                    &copy;	2017 - 2022 payrexa.com. All rights reserved
                    </p>
                   </Form>
                   </div>
                   </Col>
             
                </Row>
            </div>
            {props.footer}

        </>
    )

}
export default ResetVerifiction;