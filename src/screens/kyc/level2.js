import { useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap"

function LevelTwo(){
    const [selecttype,setSelecttype] = useState(1);
    const [kycstep,setKycstep] = useState();
    const SubmitForm = (e)=>{
        e.preventDefault();
        console.log(kycstep)
        setKycstep(selecttype)
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
                   kycstep == null && <Form onSubmit={(e) => {
                    SubmitForm(e);
                    }}>
                   <h1 className="h3 mb-5 fw-normal text-center">Verification</h1>
                   <div className="form-floating">
                   <select className="form-control" name="cardtype" onChange={(e)=>setSelecttype(e.target.value)}>
                    <option value="" selected disabled>Select Card Type</option>
                    <option value="1">ID Card</option>
                    <option value="1">Passport</option>
                    <option value="1">Driving license</option>
                    </select>
                    <i class="fa fa-shield form-icon"></i>
                    </div>
                    <button className="btn w-100 btn-lg btn-custom mt-5" type="submit" >Proceed</button>
                    </Form>
               }
               {
                        kycstep == 1 && <Form onSubmit={(e) => {
                            SubmitForm(e);
                            }}>
                           <h1 className="h3 mb-5 fw-normal text-center">Verification</h1>
                           <div className="form-group">
                               <label for="idfront"><b>Front Picture</b></label>
                                <input type="file" name="idfront"  className="form-control" id="idfront" placeholder="Residential Address"/>
                           </div>
                           <br/>
                           <div className="form-group">
                               <label for="idback"><b>Back Picture</b></label>
                                <input type="file" name="idback"  className="form-control" id="idback" placeholder="Residential Address"/>
                           </div>
                           <div className="form-floating">
                                </div>
                                <button className="btn w-100 btn-lg btn-custom mt-5" type="submit">Proceed</button>
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
export default LevelTwo