import {Form, Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";


function Faq(props){

    return(

        <>
        
            {props.header}



           

            <div className="dashboard-section">

                {props.sidebar}

                <div className="dashboard-main">

                <div className="normal-box big-bg big-faq">

                    <div>
                        <h1>FAQ</h1>
                    </div>

                    <div>
                        <Form>

                            <Form.Group className="mb-3 " controlId="search">
                                
                                    <div className="position-relative search">
                                    <Form.Control type="text" placeholder="Search"/>
                                    <Link to={"/support/search"} className="form-search-btn custom-btn-sm">Search</Link>

                                    </div>

                            </Form.Group>


                        </Form>
                    </div>

                </div>

                    <div className="my-5">
                        <h3 className="mb-4">Account Functions</h3>

                        <Row className="gy-4">

                            <Col lg={4}>

                                <div className="faq-categories">
                                    <Link to={'#'}>Guide to Account Functions</Link>
                                </div>

                            </Col>

                            <Col lg={4}>

                                <div className="faq-categories">
                                    <Link to={'#'}>Guide to Account Functions</Link>
                                </div>

                            </Col>

                            <Col lg={4}>

                                <div className="faq-categories">
                                    <Link to={'#'}>Guide to Account Functions</Link>
                                </div>

                            </Col>

                            <Col lg={4}>

                                <div className="faq-categories">
                                    <Link to={'#'}>Guide to Account Functions</Link>
                                </div>

                            </Col>

                            <Col lg={4}>

                                <div className="faq-categories">
                                    <Link to={'#'}>Guide to Account Functions</Link>
                                </div>

                            </Col>

                            <Col lg={4}>

                                <div className="faq-categories">
                                    <Link to={'#'}>Guide to Account Functions</Link>
                                </div>

                            </Col>


                            <Col lg={4}>

                                <div className="faq-categories">
                                    <Link to={'#'}>Guide to Account Functions</Link>
                                </div>

                            </Col>

                            <Col lg={4}>

                                <div className="faq-categories">
                                    <Link to={'#'}>Guide to Account Functions</Link>
                                </div>

                            </Col>

                        </Row>
                    </div>

                    <div className="my-5">
                        <h3 className="mb-4">Popular articles</h3>

                        <ul className="faq-list">
                            <li><Link to={"#"}>Why Can’t I Receive Emails from Binance</Link></li>

                            <li><Link to={"#"}>Why Can’t I Receive Emails from Binance</Link></li>

                            <li><Link to={"#"}>Why Can’t I Receive Emails from Binance</Link></li>

                            <li><Link to={"#"}>Why Can’t I Receive Emails from Binance</Link></li>
                            
                            <li><Link to={"#"}>Why Can’t I Receive Emails from Binance</Link></li>

                            <li><Link to={"#"}>Why Can’t I Receive Emails from Binance</Link></li>

                            <li><Link to={"#"}>Why Can’t I Receive Emails from Binance</Link></li>

                            <li><Link to={"#"}>Why Can’t I Receive Emails from Binance</Link></li>
                            
                            <li><Link to={"#"}>Why Can’t I Receive Emails from Binance</Link></li>
                        </ul>

                    </div>

                </div>
            
            </div>

          

        </>

    )

}

export default Faq