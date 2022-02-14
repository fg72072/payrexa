import { useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import OtpInput from 'react-otp-input';
import { useNavigate } from "react-router-dom";

function Verification(props){
    const [OTP, setOTP] = useState("");
    const navigate = useNavigate()
 
    const Verify = (e)=>{
        e.preventDefault();
        localStorage.setItem("testtoken", 'testing');
        navigate('/welcome')
    }
    return (
        <>
        {props.header}
        <Container>
        <div className="section-margin">
        <Row>
               <div className="center-form col-lg-6 col-12">
               <main className="form-section">
               <div className="form">
               <Form onSubmit={(e) => {
				Verify(e);
				}}>
               <h1 className="h3 mb-3 fw-normal text-center">Phone Verification</h1>
               <div className="text-center mb-2">
               <span className="text-center">Please enter the 6 digit verification  code <br/> that was sent to you.<br/>The code is valid</span>
               </div>
               <div className="text-center digit-group">
               <OtpInput
               value={OTP}
               onChange={setOTP}
               numInputs={6}
               isInputNum={true}
                />
                </div>
                <button className="w-100 custom-btn primary-btn mt-5" type="submit">Proceed</button>
                </Form>
                </div>
               </main>
               </div>
        </Row>
        </div>
        </Container>
        </>
    )
}
export default Verification