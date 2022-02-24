import { Col, Container,Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Disableaccount(props){

    return(

        <>
        {props.header}
        <div className="dashboard-section">
            {props.sidebar}
            <div className="dashboard-main">

                    <div className="back-link">
                        <Link to={'/security'}><i class="fa-solid fa-angle-left"></i> Security</Link>
                    </div>

                    <h3>Disable Account</h3>
                    <p>To increase your account security. it is recommended that you enable 2FA</p>
                


                <Row className="align-items-center">

                    <Col lg={3} md={4}>

                                <img src={require("../../assets/images/delete-user.png").default} style={{width:"100%"}}/>

                    </Col>

                    <Col lg={9} md={8} className="disable-warnings">

                        
                        <h3>Disable Your Account</h3>

                        <ul>

                                <li>Lorem Ipsum insert here anything</li>
                                <li>Lorem Ipsum insert here anything</li>
                                <li>Lorem Ipsum insert here anything</li>
                                <li>Lorem Ipsum insert here anything</li>

                        </ul>

                        <Link to={'#'} className="custom-btn primary-btn">Disable Your Account</Link>

                    </Col>

                </Row>
                
            </div>
        </div>
        </>

    )


}

export default Disableaccount;