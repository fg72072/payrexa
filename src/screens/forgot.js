import { useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"

function Forgot(props){
    const [forgotstatus,setForgotstatus] = useState('email');
    return (
        <>
        {props.header}
        <Container>
        <div className="section-margin">
        <Row>
               <div className="center-form col-lg-6 col-12">
               <main className="form-section">
               <div className="form">
               <Form>
               <h1 className="h3 mb-5 fw-normal text-center">Forgot Password</h1>
               <div className="d-j-flex form-ul">
                    <a href="javascript::void()" className={forgotstatus == "email" ?"active":""} onClick={()=>setForgotstatus("email")}>Email</a>
                    <a>OR</a>
                    <a href="javascript::void()" className={forgotstatus == "phone" ?"active":""} onClick={()=>setForgotstatus("phone")}>Phone</a>
                </div>
                {
                    forgotstatus == "email" ? <>
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
                <button className="btn w-100 btn-lg btn-custom mt-5" type="submit">Proceed</button>
                </Form>
                </div>
               </main>
               </div>
        </Row>
        </div>
        </Container>
        {props.footer}
        </>
    )
}
export default Forgot