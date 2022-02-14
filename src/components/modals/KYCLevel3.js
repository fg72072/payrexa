import { useState } from "react";
import { Modal, Form } from "react-bootstrap"


function KYCLevel3Modal(props){
    const [preview3,setPreview3] = useState('');
     const handleChangeImage3 = (e) => {
        if(e.target.files[0]){
            setPreview3({[e.target.name]: URL.createObjectURL(e.target.files[0])})
        }

     }
    return (<>
         <Modal show={props.kyclevel3show} onHide={props.kyclevel3_close} centered className="security-verify-modal">
                    
                

                    <Modal.Body className="box-bg">

                    {/* <i class="fa-solid fa-xmark" onClick={props.kyc_close}></i> */}

                    <div className="modal-title text-center">
                            <h3>Identity Verification</h3>
                    
                    </div>
                        <div className="mt-3">
                        <span className="f-bold ">30 second live video verification</span>
                        </div>

                       <div className="upload-box">
                          
                           <input type="file" style={{display:'none'}} name="back" accept="video/*" id="back" onChange={(e)=>handleChangeImage3(e)}/>
                           <label className="upload-icon" for="back">
                           {
                               preview3 != "" ?
                            //    <video src={preview3['back']} alt="upload image" width={300} height={130} className="upload-img pointer" controls/>
                               <i class="fa-solid fa-video"></i>
                               :
                               <div>
                               <i class="fa-solid fa-video"></i>
                               </div>
                           }
                           </label>
                        </div>
                        <div className="mt-3">
                        <span className="">File size must be between 1MB and 10MB in ..mp4/3gp format.</span>
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

export default KYCLevel3Modal;