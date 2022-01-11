import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Kyc(props){


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

            <Row>

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

                        <button className="custom-icon-btn primary-btn w-100">Start Now</button>

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

                        <button className="custom-icon-btn primary-btn w-100" disabled>Start Now</button>

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

                        <button className="custom-icon-btn primary-btn w-100" disabled>Start Now</button>

                    </div>

                </Col>
                

            </Row>

        </Container>

        {props.footer}
        </>

    )

}

export default Kyc;