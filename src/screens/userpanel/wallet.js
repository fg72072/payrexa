import { Container,Row,Col, Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom"
function Wallet(props){
    return (
        <>
 {props.header}
        <section className="dashboard-section">
        <Container>
            <Link to={"/"} className="swap-link"><i class="fa fa-angle-left"></i> SWAP</Link>
        <Row>
                    <div className="text text-center text-box">
                    <h3>My Wallets</h3>
                    <h4>Manage wallet activities here</h4>
                    </div>
                <Col lg={12}>
                <div className="swap-section bg-section-lg">
                <div className="custom-overlay"></div>

                <div className="swapping">
                    <h3 className="text-right pointer"><i class="fa fa-eye-slash"></i></h3>
                    <h3 className="purple text-center">Wallet Balance</h3>
                    <h1 className="text-center total">$0.00</h1>
                    <div className="text-center">
                    <button class="btn  btn-lg mt-4 btn  btn-lg mt-4 btn-orange" type="button">SET WITHDRAWAL PIN</button>
                    </div>
                </div>
                </div>
            </Col>
            <Col lg={12}>
                <div className="search-box">
                <InputGroup className="mb-3">
                <FormControl
                placeholder="Search"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                <i class="fa fa-search"></i>
                </Button>
                </InputGroup>
                </div>
                <Row>
                    <Col lg={4}>
                    <div className="d-box text-center" style={{background:"#c38e0a"}}>
                    <img width={60} src={require('../../assets/images/BNB.svg').default}/>
                    <div className="text">
                    <h6>BNB - Binance</h6>
                    <span>0.00</span>
                    </div>
                    </div>
                    </Col>
                    <Col lg={4}>
                    <div className="d-box text-center" style={{background:"#058554"}}>
                    <img width={60} src={require('../../assets/images/DOGE.svg').default}/>
                    <div className="text">
                    <h6>DOGE - Doge-coin</h6>
                    <span>0.00</span>
                    </div>
                    </div>
                    </Col>
                    <Col lg={4}>
                    <div className="d-box text-center" style={{background:"#1160bb"}}>
                    <img width={60} src={require('../../assets/images/USDT.svg').default}/>
                    <div className="text">
                    <h6>USDT - Tether</h6>
                    <span>0.00</span>
                    </div>
                    </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        </Container>
        </section>
        </>
    )
}
export default Wallet