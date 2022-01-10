import { useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

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
        <Row>
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
               <div className="form-floating">
                <select className="form-control" name="country" onChange={(e)=>setSelectcountry(e.target.value)}>
                    <option value="" selected disabled>Select Country</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Afghanistan">Afghanistan</option>
                </select>
                <i class="fa fa-globe form-icon"></i>
                </div>
                <button className="btn w-100 btn-lg btn-custom mt-5" type="submit">Proceed</button>
                </Form>
                </div>
               </main>
               </div>
               </>
               : <>
                <Col lg="12" sm="12">
            <main className="form-section">
            <Row>
                <div className="col-lg-6 reg-form-bg-image">
                </div>
                <Col lg="6">
                <div className="form">
                <Form onSubmit={(e) => {
				SignUp(e);
				}}>
                <h1 className="h3 mb-5 fw-normal text-center">Sign Up</h1>
                <div className="d-j-flex form-ul">
                    <a href="javascript::void()" className={regstatus == "email" ?"active":""} onClick={()=>setRegstatus("email")}>Email</a>
                    <a>OR</a>
                    <a href="javascript::void()" className={regstatus == "phone" ?"active":""} onClick={()=>setRegstatus("phone")}>Phone</a>
                </div>
                <div className="form-floating">
                
                {
                    regstatus == "email"?<> <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                    <i class="fa fa-envelope form-icon"></i></>
                    :<>
                    <div className="d-flex">
                    <select className="form-control country-code" name="country" >
                    <option value="+ 92" selected>+ 92</option>
                    <option value="+ 971">+ 971</option>
                    <option value="+ 91">+ 91</option>
                    </select>
                    <input type="phone" className="form-control" id="floatingInput" placeholder="Phone Number"/>
                    </div>
                    <i class="fa fa-phone form-icon mobile-icon"></i> 
                    </>
                }
                </div>
                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
                <i class="fa fa-eye-slash form-icon"></i>
                </div>
                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Confirm Password</label>
                <i class="fa fa-eye-slash form-icon"></i>
                </div>
                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Referral Code (Optional)</label>
                <i class="fa fa-tag form-icon"></i>
                </div>
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
                <div className="form-ul">
                 <p >Already have an account?<a href="">Login</a></p>
                </div>
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