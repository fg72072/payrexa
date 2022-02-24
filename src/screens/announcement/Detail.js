import {Form, Row,Col} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";


function AnnouncementDetail(props){
    const query = new URLSearchParams(window.location.search);
    return(

        <>
        
            {props.header}



           

            <div className="dashboard-section order-body-width">

                {props.sidebar}

                <div className="dashboard-main">

                <div className="normal-box big-bg big-faq faq-resp-flex">

                    <div>
                    <Link to={"/announcement"} className="normal-anchor">
                        <i class="fa-solid fa-chevron-left"></i>
                        <h3>Announcement</h3>
                        </Link>
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

                    <div className="">

                        <Row className="gy-4">
                        <Col lg={9}>
                            <div className="mt-5">
                            <h3>New Cryptocurrency Listing</h3>
                            <ul className="self-aticle-ul">
                                <li>
                                    <Link to={'#'}>Every Wednesday Is WinBUSDday - Trade BUSD-Margined Futures to Win BUSD</Link><span className="span">2022-01-09</span>
                                </li>
                                <li>
                                    <Link to={'#'}>PayRexa Will List Alchemy Pay (ACH) and Immutable X (I MX)</Link><span className="span">2022-01-09</span>
                                </li>
                                <li>
                                    <Link to={'#'}>PayRexa Adds CTXC, DUSK, GXS, HOT, LINA, SFP on Cross Margin and AUTO, CTXC, CVP, CVX, LSK, VIDT on Isolated Margin</Link><span className="span">2022-01-09</span>
                                </li>
                                <li>
                                    <Link to={'#'}>PayRexa Loans Adds Collateral Assets AVAX & SOL, Launches Tiered Interest Rates</Link><span className="span">2022-01-09</span>
                                </li>
                                <li>
                                    <Link to={'#'}>Wallet Maintenance for Multiple Networks</Link><span className="span">2022-01-09</span>
                                </li>
                            </ul>
                            </div>
                            </Col>
                            <Col lg={3} className="position-relative">
                            <div className="mt-5 right-side-bar-faq">
                            <h3>Latest Articles</h3>
                            <ul className="ul">
                                <li>
                                    <Link to={'#'}>Binance Secure Asset Fund for Users (SAFU) Valued at $1BN</Link>
                                </li>
                                <li>
                                    <Link to={'#'}>Binance Secure Asset Fund for Users (SAFU) Valued at $1BN</Link>
                                </li>
                                <li>
                                    <Link to={'#'}>Binance Secure Asset Fund for Users (SAFU) Valued at $1BN</Link>
                                </li>
                                <li>
                                    <Link to={'#'}>Binance Secure Asset Fund for Users (SAFU) Valued at $1BN</Link>
                                </li>
                                <li>
                                    <Link to={'#'}>Binance Secure Asset Fund for Users (SAFU) Valued at $1BN</Link>
                                </li>
                             
                            </ul>
                            </div>
                            </Col>

                        </Row>
                    </div>



                </div>
            
            </div>

          

        </>

    )

}

export default AnnouncementDetail