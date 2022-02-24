import { useState } from "react"
import { Row,Col, Tab, Tabs, Table,Modal,Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import CanvasJSReact from "../../assets/canvasjs.react";
function Dashboard(props){
    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
        animationEnabled: true,
        height: 100,
        title: {
            text: ""
        },
        subtitles: [{
            text: "",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Euro", y: 5 },
                { name: "USDT", y: 31 }
            ]
        }]
    }
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        {props.header}
        
        

                <Modal show={show} onHide={handleClose} centered className="security-verify-modal">
                    
                {/* <Modal.Header closeButton className="">
                
                </Modal.Header> */}

                        <Modal.Body className="box-bg">

                        <i class="fa-solid fa-xmark" onClick={handleClose}></i>

                        <div className="modal-title text-center">
                            <h3>Security Verification</h3>
                            <p>Enable 2FA, Email Authentication, to increase your account security</p>
                        </div>

                        <div className="modal-box-verify text-center">

                            <Link to={'/security'}>

                                <img src={require("../../assets/images/emails.png").default} />
                                <p>Enable Email Verication</p>

                            </Link>

                            <Link to={'/security'}>

                                <img src={require("../../assets/images/verification.png").default} />
                                <p>Enable Phone Verication</p>

                            </Link>

                        </div>


                        <Link to={'/'} className="custom-icon-btn primary-btn">Continue</Link>
                        

                        </Modal.Body>
                        
                </Modal>

        <div className="dashboard-section">

            {props.sidebar}

            <div className="dashboard-main">
                <div className="normal-box big-bg">
                    <h3>Welcome to PayRexa</h3>
                    <p>Just a few more steps and you're good to go!</p>


                    <div class="verification">


                        <div class="verification-item">

                            <div class="verification-circle circle-done">
                                1
                            </div>

                            
                            <div className="verification-content">

                                <p className="f-bold">Register Account</p>

                            </div>

                        </div>

                        <hr class="verification-hr" />

                        <div class="verification-item">

                            <div class="verification-circle">
                                2
                            </div>

                            <div className="verification-content">

                            <p className="f-bold">2FA</p>
                            <Link to={'#'} className="custom-btn primary-btn m-0" onClick={handleShow}>Verify</Link>

                            </div>

                        </div>

                        <hr class="verification-hr" />

                        <div class="verification-item">

                            <div class="verification-circle">
                                3
                            </div>

                            <div className="verification-content">

                                <p className="f-bold">Deposit Funds</p>

                            </div>

                            </div>

                    </div>


                </div>

                <div className="dashboard-margin">
                <Row className="gy-5">
                    <Col lg={7}>
                    <div className="normal-box">
                    <div className="box-top">
                    <h4>Balance Details</h4>
                    <div className="d-j-flex">
                    <Link to={'/wallet/deposit'} class="custom-btn-sm">Deposit</Link>
                    <Link to={'/wallet/withdrawal'} class="custom-btn-sm-sec">Withdraw</Link>
                    </div>
                    </div>

                    <div className="box-tabs">
                    <Tabs defaultActiveKey="Spot" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Spot" title="Spot">
                        <div className="balance-details">
                            <div className="text-center position-relative">
                            <h6>Account Balance</h6>
                            <i class="fa fa-eye-slash balance-icon"></i>
                            </div>
                            <div className="total-balance text-center">
                                <h2>0.00</h2><span>BTC</span>
                            </div>
                            <CanvasJSChart options = {options}/>
                            <div className="bar-section ">
                                <div className="text-center w-100">
                                    <h6>Estimate Value</h6>
                                    <h2>$ 0.00</h2>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="P2P" title="P2P">
                    <div className="balance-details">
                            <div className="text-center position-relative">
                            <h6>Account Balance</h6>
                            <i class="fa fa-eye-slash balance-icon"></i>
                            </div>
                            <div className="total-balance text-center">
                                <h2>0.00</h2><span>BTC</span>
                            </div>
                            <div className="bar-section">
                                <div>
                                    <h6>Estimate Value</h6>
                                    <h2>$ 0.00</h2>
                                </div>
                                <div>
                                    <h6>Estimate Value</h6>
                                    <h2>$ 0.00</h2>
                                </div>
                                <div>
                                    <h6>Estimate Value</h6>
                                    <h2>$ 0.00</h2>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    </Tabs>
                    </div>
                    </div>
                    </Col>
                    <Col lg={5}>
                    <div className="normal-box">
                    <div className="box-tabs">
                    <Tabs defaultActiveKey="Activity" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Activity" title="Activity">
                        <div className="activity-section">
                            <div className="activity-box">
                                <div>
                                <p className="title">Mobile</p>
                                <span>Mumbai, India</span>
                                </div>
                                <div>
                                <p>24/12/2020</p>
                                <span>2021-12-20 14:45:34</span>
                                </div>
                            </div>
                            <div className="activity-box">
                                <div>
                                <p className="title">Mobile</p>
                                <span>Mumbai, India</span>
                                </div>
                                <div>
                                <p>24/12/2020</p>
                                <span>2021-12-20 14:45:34</span>
                                </div>
                            </div>
                            <div className="activity-box">
                                <div>
                                <p className="title">Mobile</p>
                                <span>Mumbai, India</span>
                                </div>
                                <div>
                                <p>24/12/2020</p>
                                <span>2021-12-20 14:45:34</span>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Device" title="Device">
                    <div className="activity-section">
                            <div className="activity-box">
                                <div>
                                <p className="title">Device</p>
                                <span>Mumbai, India</span>
                                </div>
                                <div>
                                <p>Sumsung</p>
                                <span>2021-12-20 14:45:34</span>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    </Tabs>
                    <Link to={'/security/disable-account'} className="red pointer disable-btn">Disable Account</Link>
                    </div>
                    </div>
                    </Col>
                </Row>
                </div>
                <div className="dashboard-margin">
                <div class="normal-box">
                    <h4>Announcement</h4>
                    <hr/>
                    <div className="announcement-section">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <span className="flex-end">24/12/2020</span>
                        <hr/>
                    </div>
                    <div className="announcement-section">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <span className="flex-end">24/12/2020</span>
                        <hr/>
                    </div>
                    <div className="announcement-section">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <span className="flex-end">24/12/2020</span>
                        <hr/>
                    </div>
                </div>
                </div>
                <div className="dashboard-margin">
                <Row className="gy-5">
                    <Col lg={5}>
                    <div class="normal-box">
                        <h4>Increase your account security</h4>
                        <hr/>
                        <div className="security-section">
                            <ul>
                                <li><span>Enable 2FA</span> <a>ON</a></li>
                                <li><span>Identification Verication</span> <a>Verify</a></li>
                                <li><span>Anti-phishing Code</span> <a>Setup</a></li>
                                <li><span>Turn-on Withdrawal Whitelist</span> <a>Turn on</a></li>

                            </ul>
                        </div>
                    </div>
                    </Col>
                    <Col lg={7}>
                    <div class="normal-box">
                        <h4>Open Orders</h4>
                        <hr/>
                        <Table responsive="sm">
                        <thead>
                        <tr>
                            <th>Pair Date</th>
                            <th>Type/Side Trigger Conditions</th>
                            <th>Price Ammount</th>
                            <th>Total Filled</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>12/12/2020</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                            <td>Lorem</td>
                      
                        </tr>
                        </tbody>
                    </Table>
                    </div>
                    </Col>
                </Row>
               
                </div>
            </div>
        </div>
        </>
    )
}
export default Dashboard