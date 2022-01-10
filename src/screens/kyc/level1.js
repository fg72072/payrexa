import { useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"

function LevelOne(){
    const [kycstep,setKycstep] = useState(1);
    const SubmitForm = (e)=>{
        e.preventDefault();
        console.log(kycstep)
    }
    return (
        <>
        <Container>
        <div className="section-margin">
        <Row>
               <div className="center-form col-lg-6 col-12">
               <main className="form-section">
               <div className="form">
               {
                   kycstep == 1 && <Form onSubmit={(e) => {
                    SubmitForm(e);
                    }}>
                   <h1 className="h3 mb-5 fw-normal text-center">Verification</h1>
                   <div className="form-floating">
                        <input type="text" name="firstname"  className="form-control" id="floatingInput" placeholder="First Name"/>
                        <label for="floatingInput">First Name</label>
                        <i class="fa fa-user form-icon"></i>
                        </div>
                        <div className="form-floating">
                        <input type="text" name="lastname"  className="form-control" id="floatingInput" placeholder="Last Name"/>
                        <label for="floatingInput">Last Name</label>
                        <i class="fa fa-user form-icon"></i>
                        </div>
                        <div className="form-floating">
                        <input type="text" name="middlename"  className="form-control" id="floatingInput" placeholder="Middle Name"/>
                        <label for="floatingInput">Middle Name</label>
                        <i class="fa fa-user form-icon"></i>
                        </div>
                        <div className="form-floating">
                        <input type="date" name="dob"  className="form-control" id="floatingInput" placeholder="Date of Birth"/>
                        <label for="floatingInput">Date of Birth</label>
                        <i class="fa fa-calendar form-icon"></i>
                        </div>
                        <button className="btn w-100 btn-lg btn-custom mt-5" type="submit" onClick={()=>setKycstep(2)}>Proceed</button>
                    </Form>
               }
               {
                        kycstep == 2 && <Form onSubmit={(e) => {
                            SubmitForm(e);
                            }}>
                           <h1 className="h3 mb-5 fw-normal text-center">Verification</h1>
                           <div className="form-floating">
                                <input type="text" name="address"  className="form-control" id="floatingInput" placeholder="Residential Address"/>
                                <label for="floatingInput">Residential Address</label>
                                <i class="fa fa-map form-icon"></i>
                                </div>
                                <div className="form-floating">
                                <input type="text" name="city"  className="form-control" id="floatingInput" placeholder="City"/>
                                <label for="floatingInput">City</label>
                                <i class="fa fa-building form-icon"></i>
                                </div>
                                <div className="form-floating">
                                <input type="text" name="postal"  className="form-control" id="floatingInput" placeholder="Postal Code"/>
                                <label for="floatingInput">Postal Code</label>
                                <i class="fa fa-user form-icon"></i>
                                </div>
                                <button className="btn w-100 btn-lg btn-custom mt-5" type="submit" onClick={()=>setKycstep(3)}>Proceed</button>
                            </Form>
                }
                 {
                        kycstep == 3 && <Form onSubmit={(e) => {
                            SubmitForm(e);
                            }}>
                           <h1 className="h3 mb-5 fw-normal text-center">Verification</h1>
                           <div className="form-floating">
                                <input type="file" name="passport"  className="form-control" id="floatingInput" placeholder="Residential Address"/>
                                </div>
                                <button className="btn w-100 btn-lg btn-custom mt-5" type="submit" onClick={()=>setKycstep(3)}>Proceed</button>
                            </Form>
                }
                </div>
               </main>
               </div>
        </Row>
        </div>
        </Container>
        </>
    )
}
export default LevelOne