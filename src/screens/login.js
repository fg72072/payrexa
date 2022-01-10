import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap"
import GoogleLogin from 'react-google-login';
import { useNavigate } from "react-router-dom";

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
        <Row>
            <Col lg="12" sm="12">
            <main className="form-section">
            <Row>
                <div className="col-lg-6 log-form-bg-image">
                </div>
                <Col lg="6">
                <div className="form">
                <Form onSubmit={(e) => {
				SignIn(e);
				}}>
                <h1 className="h3 mb-5 fw-normal text-center">Welcome back!</h1>
                <div className="d-j-flex form-ul">
                    <a href="javascript::void()" className={loginstatus == "email" ?"active":""} onClick={()=>setLoginstatus("email")}>Email</a>
                    <a>OR</a>
                    <a href="javascript::void()" className={loginstatus == "phone" ?"active":""} onClick={()=>setLoginstatus("phone")}>Phone</a>
                </div>
                {
                    loginstatus == "email" ? <>
                    <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                    <i class="fa fa-envelope form-icon"></i>
                    </div>
                    </>
                    :<>
                    <div className="form-floating">
                    <div className="d-flex">
                    <select className="form-control country-code" name="country" >
                    <option value="+ 92" selected>+ 92</option>
                    <option value="+ 971">+ 971</option>
                    <option value="+ 91">+ 91</option>
                    </select>
                    <input type="phone" className="form-control" id="floatingInput" placeholder="Phone Number"/>
                    </div>
                    <i class="fa fa-phone form-icon mobile-icon"></i>
                    </div>
                    </>
                }
                
                <br/>
                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
                <i class="fa fa-eye-slash form-icon"></i>
                </div>
                <div className="checkbox mb-3">
               
                </div>
                <button className="btn w-100 btn-lg btn-custom" type="submit" >Sign in</button>
                <GoogleLogin
                clientId="893259986769-a7bf8gj4ti1h93gmb97ca9a8c8t889n3.apps.googleusercontent.com"
                render={renderProps => (
                    <button className="btn w-100 btn-lg btn-custom mt-3 btn-google" onClick={renderProps.onClick} disabled={renderProps.disabled} type="button"><i class="fa fa-google"></i>  Sign in with Google</button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
                
                <div className="d-j-flex">
                

                <div className="d-grid form-ul">
                            <a href="">Forgot password</a>
                            <a href="">Privacy policy</a>
                </div>
                <div className="d-grid form-ul text-center">
                            <a href="">Don't have an account?</a>
                            <a href="">User agreement</a>
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