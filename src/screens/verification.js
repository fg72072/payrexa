import { useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"
import OtpInput from 'react-otp-input';
import { useNavigate } from "react-router-dom";

function Verification(){
    const [OTP, setOTP] = useState("");
    const navigate = useNavigate()
 
    const Verify = (e)=>{
        e.preventDefault();
        navigate('/dashboard/swap')
    }
    return (
        <>
        <Container>
        <div className="section-margin">
        <Row>
               <div className="center-form col-lg-6 col-12">
               <main className="form-section">
               <div className="form">
               <Form onSubmit={(e) => {
				Verify(e);
				}}>
               <h1 className="h3 mb-5 fw-normal text-center">Verification</h1>
               <div className="text-center digit-group">
               <OtpInput
               value={OTP}
               onChange={setOTP}
               numInputs={6}
               isInputNum={true}
                />
                </div>
                <button className="btn w-100 btn-lg btn-custom mt-5" type="submit">Proceed</button>
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