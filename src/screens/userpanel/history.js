import { Container,Row,Col, Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom"
function History(props){
    return (
        <>
 {props.header}
        <section className="dashboard-section">
        <Container>
            <Link to={"/"} className="swap-link"><i class="fa fa-angle-left"></i> SWAP</Link>
        <Row>
                    <div className="text text-center text-box">
                    <h3>Swapping History</h3>
                    </div>
                <Col lg={12}>
                <div className="swap-section bg-section-lg">
                <div className="custom-overlay"></div>

                <div className="swapping">
                    <h3 className="text-right pointer"><i class="fa fa-eye-slash"></i></h3>
                    <h3 className="purple text-center">Total Swapped</h3>
                    <h1 className="text-center total">$0.00</h1>
                    <div className="text-center">
                    </div>
                </div>
                </div>
            </Col>
            <Col lg={12}>
                    <div className="swap-head  text-center" >
                    <div className="text">
                    <h6>History</h6>
                    </div>
                    <img className="mt-1 mb-1" width={60} src={require('../../assets/images/credit-card.png').default}/>
                    <div className="text">
                    <h6>You haven't made any trades yet</h6>
                    <Link to={"/dashboard/swap"} class="btn  btn-lg mt-2 btn-orange">SWAP</Link>
                    </div>
                    </div>
            </Col>
        </Row>
        </Container>
        </section>
        </>
    )
}
export default History