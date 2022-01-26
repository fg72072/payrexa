import React, { useState } from 'react';
import { firebase, auth } from '../components/FirebaseOtp';
import { Col, Container, Form, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/images/formlogo.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


function Forgot(props){
        // Inputs
    const [ispasswordshow, setIspasswordshow] = useState(false);
    const [loginstatus,setLoginstatus] = useState('email');
    const navigate = useNavigate()

    const SignIn = (e)=>{
        e.preventDefault();
        navigate('/')
    }
    return (
        <>
    {props.header}
       
        <Container>
    
        <div className="form-section-margin mt-5">
        <Row className="justify-content-center">
            <Col lg="6" sm="12" >
            <main className="form-section">
            <Row>
                <Col lg="12">
                <div className="form">
                <Form onSubmit={(e) => {
				SignIn(e);
				}}>
                <div className="head-section">
                <img src={Logo}/>
                <h2>Forgot Password</h2>
                </div>
                <div className="d-flex justify-content-center form-ul">
                    <a href="javascript::void()" className={loginstatus == "email" ?"active":""} onClick={()=>setLoginstatus("email")}>Email</a>
                    <a className="form-slash"><i class="fa-solid fa-slash"></i></a>
                    <a href="javascript::void()" className={loginstatus == "phone" ?"active":""} onClick={()=>setLoginstatus("phone")}>Phone</a>
                </div>
                
                {
                    loginstatus == "email" ? <>
                    <Form.Group className="" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>
                    </>
                    :<>
                    <Form.Group className="" controlId="phone">
                        <Form.Label>Phone Number</Form.Label>
                        <div className="d-flex">
                    <PhoneInput
                        country={'pk'}
                        enableSearch={true}
                        className="form-control"/>
                        </div>
                    </Form.Group>
                    </>
                }
                <div className='mt-2'>
                {/* <div id="recaptcha-container"></div> */}
                <div>
                </div>
         
                </div>
                <div className="mt-5">
                <button className="w-100 custom-btn primary-btn" type="submit" >Reset Password</button>
                </div>
                <div className="d-j-flex">
                

                <div className="d-grid form-ul text-center justify-content-center w-100">
                
                </div>
                </div>
            </Form>
                </div>
                </Col>
            </Row>
            
            </main>
            </Col>
        </Row>
        </div>
        </Container>
        </>
    )
}
export default Forgot