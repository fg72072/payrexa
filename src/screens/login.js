import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap"
import GoogleLogin from 'react-google-login';
import { useNavigate } from "react-router-dom";
import Logo from '../assets/images/formlogo.png'

function Login(props){
    const [loginstatus,setLoginstatus] = useState('email');
    const navigate = useNavigate()
    const responseGoogle = (response) => {
        console.log(response);
      }
    const SignIn = (e)=>{
        e.preventDefault();
        navigate('/verification')
    }
    return (
        <>
        {props.header}
        <Container>
        <div className="section-margin">
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
                    <a className="form-slash"></a>
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
                        <Form.Control type="password" className="form-control country-code" />
                        <input type="phone" className="form-control"/>
                        </div>
                    </Form.Group>
                    </>
                }
                <Form.Group className="mt-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                        <i class="fa fa-eye-slash form-icon"></i>
                </Form.Group>
                <div className="mt-5">
               
                <button className="btn w-100 btn-lg btn-custom" type="submit" >Sign in</button>
                </div>
                <div className="d-j-flex">
                

                <div className="d-grid form-ul text-center justify-content-center w-100">
                <a href="">Register Now</a>
                <a href="">Forgot password?</a>
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
        {props.footer}
        </>
    )
}
export default Login