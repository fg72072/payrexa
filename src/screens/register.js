import { useState } from "react"
import { Col, Container, Form, Modal, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/images/formlogo.png'
import Select, { components } from "react-select";
import countryList from "react-select-country-list";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function CountryFlag(props) {
    return (
      <span
        className={"fi fi-" + props.code}
        style={{ fontSize: props.size || "40px",paddingRight:'10px'}}
      />
    );
  }
  const CountryFlagSelectOption = props => {
    return (
      <components.Option {...props}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CountryFlag size={props.flagSize} code={props.value.toLowerCase()} />
          {props.label}
        </div>
      </components.Option>
    );
  };
  const CountryFlagValueContainer = ({ children, ...props }) => {
    const code = (props.hasValue && props.getValue()[0].value) || false;
  
    return (
      <div style={{ display: "flex", flexGrow: 1 }}>
        {(code && <CountryFlag code={code.toLowerCase()} />) || null}
        <components.ValueContainer {...props}>
          {children}
        </components.ValueContainer>
      </div>
    );
  };
function Register(props){
    const [regstatus,setRegstatus] = useState('email');
    const [selectcountry,setSelectcountry] = useState("")
    const [country,setCountry] = useState("")
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()
    const ChooseCountry = (e)=>{
        e.preventDefault();
        setCountry(value)
        console.log(country)
    }
    const SignUp = (e)=>{
        e.preventDefault();
        navigate('/verification')
    }
    const changeHandler = value => {
        setValue(value );
        
     };
    const [option,setOption] = useState(countryList().getData());
    const [value,setValue] = useState(null);
    return (
        <>
        {props.header}
        <Container>
        <div className="form-section-margin">
        <Row className="justify-content-center">
       
                      <Modal show={show} onHide={handleClose} centered>
                        <Modal.Body>
                    <Form onSubmit={(e) => {
                        ChooseCountry(e);
                        }}>
                        <h1 className="h3 mb-3 fw-normal text-center">Select Your Country</h1>
                        <p className="text-center">Before we start, please enter your current<br/> location of residence.</p>
                        <h5>Country/State</h5>
                        <Select
                                options={option}
                                value={value}
                                onChange={(e)=>changeHandler()}
                                components={{
                                    Option: CountryFlagSelectOption,
                                    ValueContainer: CountryFlagValueContainer
                                }}
                            />
                        <button className="btn w-100 btn-lg btn-custom mt-5" type="submit" onClick={handleClose}>Confirm</button>
                    </Form>
                        </Modal.Body>
                        <Modal.Footer>
           
                        </Modal.Footer>
                    </Modal>
               

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
                    <a className="form-slash"><i class="fa-solid fa-slash"></i></a>
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
                        <PhoneInput
                        country={'us'}
                        enableSearch={true}
                        className="form-control"/>
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
                <button className="btn w-100 btn-lg btn-custom" type="submit">Sign Up</button>
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
       
        </Row>
        </div>
        </Container>
        </>
    )
}
export default Register