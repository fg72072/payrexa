import { useState } from "react";
import { Modal, Form } from "react-bootstrap"


function KYCModal(props){
    const [step,setStep] = useState(1);
    const [preview1,setPreview1] = useState('');
    const [preview2,setPreview2] = useState('');
    const [preview3,setPreview3] = useState('');

    const handleChangeImage = (e) => {
        if(e.target.files[0]){
            setPreview1({[e.target.name]: URL.createObjectURL(e.target.files[0])})
        }

     }
     const handleChangeImage2 = (e) => {
         console.log('ddsfasdfasfasd'.e);
        if(e.target.files[0]){
            setPreview2({[e.target.name]: URL.createObjectURL(e.target.files[0])})
        }

     }
     const handleChangeImage3 = (e) => {
        if(e.target.files[0]){
            setPreview3({[e.target.name]: URL.createObjectURL(e.target.files[0])})
        }

     }
    return (<>
         <Modal show={props.show} onHide={props.kyc_close} centered className="security-verify-modal">
                    
                

                    <Modal.Body className="box-bg">

                    {/* <i class="fa-solid fa-xmark" onClick={props.kyc_close}></i> */}

                    <div className="modal-title text-center">
                        {
                            step == 1 &&
                            <h3>Personal Information</h3>
                        }
                        {
                            step == 2 &&
                            <h3>Residential Information</h3>
                        }
                         {
                            step == 3 &&
                            <h3>Identity Verification</h3>
                        }

                    </div>
                    {
                        step == 1 &&
                        <div className="first">
                    <Form.Group className="mt-3 " controlId="first">
                        <Form.Label>First Name</Form.Label>
                        <div className='position-relative'>
                        <Form.Control type="text" />
                        </div>
                    </Form.Group>
                        <Form.Group className="mt-3 " controlId="last">
                        <Form.Label>Last Name</Form.Label>
                        <div className='position-relative'>
                        <Form.Control type="text" />
                        </div>
                    </Form.Group>
                    <Form.Group className="mt-3 " controlId="confirm">
                        <Form.Label>Middle Name</Form.Label>
                        <div className='position-relative'>
                        <Form.Control type="text" />
                        </div>
                    </Form.Group>
                    <Form.Group className="mt-3 " controlId="confirm">
                        <Form.Label>Date Of Birth</Form.Label>
                        <div className='position-relative'>
                        <Form.Control type="date" />
                        </div>
                    </Form.Group>
                    </div>
                    }
                    {
                        step == 2 &&
                        <div className="second">
                            <Form.Group className="mt-3 " controlId="addr">
                        <Form.Label>Resident Address</Form.Label>
                        <div className='position-relative'>
                        <Form.Control type="text" />
                        </div>
                        </Form.Group>
                        <div className="d-flex justify-content-between">
                        <Form.Group className="mt-3 " controlId="city">
                            <Form.Label>City</Form.Label>
                            <div className='position-relative'>
                            <Form.Control type="text" />
                            </div>
                        </Form.Group>
                        <Form.Group className="ml-1 mt-3 " controlId="postal">
                            <Form.Label>Postal Code</Form.Label>
                            <div className='position-relative'>
                            <Form.Control type="text" />
                            </div>
                        </Form.Group>
                        </div>
                     
              
                        </div>
                    }
                    {
                        step == 3 &&
                        <>
                        <div className="mt-3">
                        <span className="f-bold ">Upload a photo of Passport</span>
                        </div>

                        <div className="upload-box">
                           
                            <input type="file" style={{display:'none'}} name="passport" accept="image/*" id="passport" onChange={(e)=>handleChangeImage(e)}/>
                            <label className="upload-icon" for="passport">
                            {
                                preview1 != "" ?
                                <img src={preview1['passport']} alt="upload image" width={150} className="upload-img pointer"/>
                                :<i class="fa-solid fa-camera"></i>
                            }
                            </label>
                        </div>
                        <div className="mt-3">
                        <span className="">File size must be between 10Kb and 5120KB in ..jpg/.jpeg/.png/ format.</span>
                        </div>
                        </>
                    }
                    
                    <div className="text-center">
                    {
                        step == 1 &&
                        <button className="mt-5 w-100 custom-icon-btn primary-btn" onClick={(e)=>setStep(2)}>Continue</button>
                    }
                    {
                        step == 2 &&
                        <div className="d-flex mt-5">
                        <button className="custom-icon-btn secondary-btn" onClick={(e)=>setStep(1)}>Back</button>
                        <button className=" custom-icon-btn primary-btn" onClick={(e)=>setStep(3)}>Continue</button>
                        </div>
                    }
                    {
                        step == 3 &&
                        <div className="d-flex mt-5">
                        <button className="custom-icon-btn secondary-btn" onClick={(e)=>setStep(2)}>Back</button>
                        <button className=" custom-icon-btn primary-btn" onClick={(e)=>props.close}>Finish</button>
                        </div>
                    }
                    </div>

                  
                    

                    </Modal.Body>
        
            </Modal>
    </>)
}

export default KYCModal;