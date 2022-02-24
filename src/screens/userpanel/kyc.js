import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import KYCModal from "../../components/modals/KYC";
import KYCLevel2Modal from "../../components/modals/KYCLevel2";
import KYCLevel3Modal from "../../components/modals/KYCLevel3";
function Kyc(props){

    const [kycshow, setKycShow] = useState(false);
    const kyc_close = () => setKycShow(false);
    const kyc_show = () => setKycShow(true);

    const [kyclevel2show, setKyclevel2Show] = useState(false);
    const kyclevel2_close = () => setKyclevel2Show(false);
    const kyclevel2_show = () => setKyclevel2Show(true);

    const [kyclevel3show, setKyclevel3Show] = useState(false);
    const kyclevel3_close = () => setKyclevel3Show(false);
    const kyclevel3_show = () => setKyclevel3Show(true);
    return(

        <>
        {props.header}

        <Container >

            <div className="banner-section">

                <div className="heading-border text-center">
                    <h1 className="dual-heading">KYC VERIFICATION</h1>
                    <hr/>
                </div>

            </div>


            <div className="current-features">

                <h3 className="f-bold mb-3">Current Features</h3>
                <img src={require('../../assets/images/block.png').default}/>
                <h4>Your is currently not verified</h4>
                <p>Complete verification to access services on Binance</p>

            </div>

            <Row className="gy-5">

                <Col lg={4}>

                    <div className="box-two box-bg">

                        <div className="box-head">
                            <h5>Level 1 KYC Verication</h5>
                        </div>

                        <div className="box-body">
                            <p>FIRST NAME, LAST NAME, MIDDLE NAME, DATE OF BIRTH</p>
                            <p>RESIDENTIAL ADDRESS, CITY AND POSTAL CODE</p>
                            <p>PASSPORT PHOTOGRAPH</p>
                        </div>

                        <hr/>

                        <div className="box-head">
                            <h5>LEVEL LIMITATIONS</h5>
                        </div>

                        <div className="box-body">
                            <p>DEPOSIT AND TRANSACTIONS OF {">"}= 1000 USDT</p>
                        </div>

                        <button className="custom-icon-btn primary-btn w-100" onClick={kyc_show}>Start Now</button>

                    </div>

                </Col>



                <Col lg={4}>

                    <div className="box-two box-bg">

                        <div className="box-head">
                            <h5>Level 2 KYC Verication</h5>
                           
                        </div>

                        <div className="box-body">
                            <p>FIRST NAME, LAST NAME, MIDDLE NAME, DATE OF BIRTH</p>
                            <p>RESIDENTIAL ADDRESS, CITY AND POSTAL CODE</p>
                            <p>PASSPORT PHOTOGRAPH</p>
                        </div>

                        <hr/>

                        <div className="box-head">
                            <h5>LEVEL LIMITATIONS</h5>
                        </div>

                        <div className="box-body">
                            <p>DEPOSIT AND TRANSACTIONS OF {">"}= 1000 USDT</p>
                        </div>

                        <button className="custom-icon-btn primary-btn w-100" onClick={kyclevel2_show}>Start Now</button>

                    </div>

                </Col>


                
                <Col lg={4}>

                    <div className="box-two box-bg">

                        <div className="box-head">
                            <h5>Level 3 KYC Verication</h5>
                        </div>

                        <div className="box-body">
                            <p>FIRST NAME, LAST NAME, MIDDLE NAME, DATE OF BIRTH</p>
                            <p>RESIDENTIAL ADDRESS, CITY AND POSTAL CODE</p>
                            <p>PASSPORT PHOTOGRAPH</p>
                        </div>

                        <hr/>

                        <div className="box-head">
                            <h5>LEVEL LIMITATIONS</h5>
                        </div>

                        <div className="box-body">
                            <p>DEPOSIT AND TRANSACTIONS OF {">"}= 1000 USDT</p>
                        </div>

                        <button className="custom-icon-btn primary-btn w-100" onClick={kyclevel3_show}>Start Now</button>

                    </div>

                </Col>
                

            </Row>

        </Container>
        <KYCModal kyc_close={kyc_close} show={kycshow}/>
        <KYCLevel2Modal kyclevel2_close={kyclevel2_close} kyclevel2show={kyclevel2show}/>
        <KYCLevel3Modal kyclevel3_close={kyclevel3_close} kyclevel3show={kyclevel3show}/>
        {props.footer}
        </>

    )

}

export default Kyc;