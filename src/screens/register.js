import { useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/images/formlogo.png'

function Register(props){
    const [regstatus,setRegstatus] = useState('email');
    const [selectcountry,setSelectcountry] = useState("")
    const [country,setCountry] = useState("")
    const navigate = useNavigate()
    const ChooseCountry = (e)=>{
        e.preventDefault();
        setCountry(selectcountry)
        console.log(country)
    }
    const SignUp = (e)=>{
        e.preventDefault();
        navigate('/verification')
    }
    return (
        <>
        {props.header}
        <Container>
        <div className="section-margin">
        <Row className="justify-content-center">
           {
               country == "" ? <>
               <div className="center-form col-lg-6 col-12">
               <main className="form-section">
               <div className="form">
               <Form onSubmit={(e) => {
				ChooseCountry(e);
				}}>
               <h1 className="h3 mb-5 fw-normal text-center">Where do you live?</h1>
               <p className="text-center">Before we start, please enter your<br/> current location of residence.</p>
                <select className="form-control" name="country" onChange={(e)=>setSelectcountry(e.target.value)}>
                    <option value="" selected disabled>Select Country</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Afghanistan">Afghanistan</option>
                </select>
                <button className="btn w-100 btn-lg btn-custom mt-5" type="submit">Proceed</button>
                </Form>
                </div>
               </main>
               </div>
               </>
               : <>
                <Col lg="6" sm="12">
            <main className="form-section">
            <Row>
                <Col lg="12">
                <div className="form">
                <Form onSubmit={(e) => {
				SignUp(e);
				}}>
                <div className="head-section">
                <img src={Logo}/>
                <h2>Create PayRexa Account</h2>
                </div>
                <div className="d-flex justify-content-center form-ul">
                    <a href="javascript::void()" className={regstatus == "email" ?"active":""} onClick={()=>setRegstatus("email")}>Email</a>
                    <a></a>
                    <a href="javascript::void()" className={regstatus == "phone" ?"active":""} onClick={()=>setRegstatus("phone")}>Phone</a>
                </div>
                <div className="form-floating">
                
                {
                    regstatus == "email"?<> 
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
                </div>
                <Form.Group className="mt-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"/>
                </Form.Group>
                <Form.Group className="mt-3" controlId="cpassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"/>
                </Form.Group>
                <Form.Group className="mt-3" controlId="referral">
                        <Form.Label>Referral or Promo Code</Form.Label>
                        <Form.Control type="text"/>
                </Form.Group>
                {
                    regstatus == "email" ? <>
                    <div class="form-group checkbox mb-3 mt-3 d-flex">
                <label class="AuthFormCheckbox_container_2-cgs"><input type="checkbox" className="input-checkbox" value=""/>
                <span class="AuthFormCheckbox_checkmark_A7HnL"></span>
                 </label>
                 <span className="form-checkbox-text">Subscribe to email updates</span> 
                </div>
                    </>
                    : ""
                }
                
                <div class="form-group checkbox mb-3 mt-3 d-flex">

                <label class="AuthFormCheckbox_container_2-cgs"><input type="checkbox" className="input-checkbox" value=""/>
                <span class="AuthFormCheckbox_checkmark_A7HnL"></span> 
                 </label>
                 <span className="form-checkbox-text">I certify that I am 18 years of age or older, and agree to the User Agreement and Privacy Policy.</span>
                </div>
                <button className="btn w-100 btn-lg btn-custom" type="submit">Sign in</button>
                <div className="text-center">
                <br/>
                 <p >Already Registered?<Link to="/login" className="anchor">Sign In</Link></p>
                </div>
            </Form>
                </div>
                </Col>
            </Row>
            
            </main>
            </Col>
               </>
           }
        </Row>
        </div>
        </Container>
        {props.footer}
        </>
    )
}
export default Register