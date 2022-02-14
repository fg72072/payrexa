import { useState } from "react";
import { Modal, Form } from "react-bootstrap"


function KYCLevel2Modal(props){
    const [preview2,setPreview2] = useState('');
    const [preview3,setPreview3] = useState('');

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
         <Modal show={props.kyclevel2show} onHide={props.kyclevel2_close} centered className="security-verify-modal">
                    
                

                    <Modal.Body className="box-bg">

                    {/* <i class="fa-solid fa-xmark" onClick={props.kyc_close}></i> */}

                    <div className="modal-title text-center">
                            <h3>Identity Verification</h3>
                    
                    </div>
                        <div className="mt-3">
                        <span className="f-bold ">Government issued ID Card/Passport/Driver's License</span>
                        </div>

                        <div className="image-upload-flex">
                        <div className="upload-box">
                           
                           <input type="file" style={{display:'none'}} name="front" accept="image/*" id="front" onChange={(e)=>handleChangeImage2(e)}/>
                           <label className="upload-icon" for="front">
                           {
                               preview2 != "" ?
                               <img src={preview2['front']} alt="upload image" width={150} className="upload-img pointer"/>
                               :
                               <div>
                                   <i class="fa-solid fa-camera"></i>
                                   <p className="m-0">Front</p>
                               </div>
                           }
                           </label>
                       </div>
                       <div className="upload-box">
                          
                           <input type="file" style={{display:'none'}} name="back" accept="image/*" id="back" onChange={(e)=>handleChangeImage3(e)}/>
                           <label className="upload-icon" for="back">
                           {
                               preview3 != "" ?
                               <img src={preview3['back']} alt="upload image" width={150} className="upload-img pointer"/>
                               :
                               <div>
                                <i class="fa-solid fa-camera"></i>
                               <p className="m-0">Back</p>
                               </div>
                           }
                           </label>
                       </div>
                        </div>
                        <div className="mt-3">
                        <span className="">File size must be between 10Kb and 5120KB in ..jpg/.jpeg/.png/ format.</span>
                        </div>
                    
                    <div className="text-center">
               
                        <div className="d-flex mt-5">
                        <button className="w-100 custom-icon-btn primary-btn" >Finish</button>
                        </div>
                    </div>

                  
                    

                    </Modal.Body>
        
            </Modal>
    </>)
}

export default KYCLevel2Modal;