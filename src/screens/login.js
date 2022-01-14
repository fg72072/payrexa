import React, { useState } from 'react';
import { firebase, auth } from '../components/FirebaseOtp';
import { Col, Container, Form, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/images/formlogo.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import SliderCaptcha from '@slider-captcha/react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

function verifiedCallback(token) {
    console.log('Captcha token: ' + token);
  }
function Login(props){
        // Inputs
        const [mynumber, setnumber] = useState("");
        const [otp, setotp] = useState('');
        const [show, setshow] = useState(false);
        const [final, setfinal] = useState('');
        const [ispasswordshow, setIspasswordshow] = useState(false);
      
        // Sent OTP
        const signin = (e) => {
            e.preventDefault()
            console.log(mynumber)
            // if (mynumber === "" || mynumber.length < 10) return;
      
            let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
            auth.signInWithPhoneNumber("+"+mynumber, verify).then((result) => {
                setfinal(result);
                alert("code sent")
                setshow(true);
            })
                .catch((err) => {
                    alert(err);
                    window.location.reload()
                });
        }
      
        // Validate OTP
        const ValidateOtp = () => {
            if (otp === null || final === null)
                return;
            final.confirm(otp).then((result) => {
                // success
            }).catch((err) => {
                alert("Wrong code");
            })
        }

    const [loginstatus,setLoginstatus] = useState('email');
    const navigate = useNavigate()
    const responseGoogle = (response) => {
        console.log(response);
      }
    const SignIn = (e)=>{
        e.preventDefault();
        navigate('/dashboard')
    }
    return (
        <>
    {props.header}
       
        <Container>
    
        <div className="form-section-margin">
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
                <h2>Account Login</h2>
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
                        {/* <PhoneInput
                        country={'pk'}
                        enableSearch={true}
                        value={mynumber} 
                        onChange={(e) => setnumber(e) }
                        className="form-control"/> */}
                    <PhoneInput
                        country={'pk'}
                        enableSearch={true}
                        className="form-control"/>
                        </div>
                    </Form.Group>
                    </>
                }
                <Form.Group className="mt-3 " controlId="password">
                        <Form.Label>Password</Form.Label>
                        <div className='position-relative'>
                        <Form.Control type={ispasswordshow == false ? "password" : "text"} />
                        {
                            ispasswordshow == false ?<>
                        <i class="fa fa-eye-slash form-icon pointer" onClick={(e)=>setIspasswordshow(true)}></i>
                        </>
                        :<>
                        <i class="fa fa-eye form-icon pointer" onClick={(e)=>setIspasswordshow(false)}></i>
                        </>
                        }
                        </div>
                </Form.Group>
                <div className='mt-2'>
                {/* <div id="recaptcha-container"></div> */}
                <div>
                </div>
         
                </div>
                <div className="mt-5">
                <button className="btn w-100 btn-lg btn-custom" type="submit" >Sign in</button>
                </div>
                <div className="d-j-flex">
                

                <div className="d-grid form-ul text-center justify-content-center w-100">
                
                <Link to={'/register'}>Register Now</Link>
                <Link to={'/'}>Forgot password?</Link>
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
export default Login