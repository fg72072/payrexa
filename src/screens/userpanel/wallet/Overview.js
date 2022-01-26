import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import OverviewModal from '../../../components/modals/Overview'
import TransferModal from "../../../components/modals/Transfer";
function Overview(props){
    const [transfershow, setTransfershow] = useState(false);

    const transfer_close = () => setTransfershow(false);
    const transfer_show = () => setTransfershow(true);

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        {props.header}
        <div className="dashboard-section">

            {props.sidebar}
            <div className="dashboard-main">
                <div className="normal-box big-bg">
                    <h3 className="">Wallet Overview</h3>
                    <div className="mt-4">
                        <Link to={'/wallet/deposit'} className="custom-btn primary-btn">Deposit</Link>
                        <Link to={'/wallet/withdrawal'} className="custom-btn secondary-btn">Withdraw</Link>
                        <button className="custom-btn secondary-btn" onClick={transfer_show}>Transfer</button>
                        <Link to={'/wallet/deposit/history'} className="anchor" >Transaction History</Link>
                    </div>
                </div>
                <div className="dashboard-margin">
                <div className="normal-box">
                    <div className="mb-3 d-flex align-items-center">
                    <h5 className="">Estimated Balance</h5>
                    <button className="ml-1 custom-btn secondary-btn"><i className="fa fa-eye-slash" style={{marginRight:'5px'}}></i><span>Hide Balance</span></button>
                    </div>
                    <h5>0.00000000 BTC = $0.000000</h5>
                </div>
                </div>

                <div className="dashboard-margin">
                <div className="normal-box">
                    <Row>
                        <Col lg={12}>
                        <div className="wallet-spot">
                        <div>
                        <h5 className="">Spot</h5>
                        <h6>0.000000000 BTC</h6>
                        </div>
                        <div className="text-with-button">
                        <p className="">This is your spot trading account. Simply transfer finds to start trading <br/>on the world's leading crypto exchange instantly!</p>
                        <div>
                            <Link to={'/wallet/withdrawal'} className="custom-btn secondary-btn">Withdraw</Link>
                            <button className="custom-btn secondary-btn" onClick={transfer_show}>Transfer</button>
                        </div>
                        </div>
                        </div>
                        <div className="wallet-spot">
                        <div>
                        <h5 className="">Funding</h5>
                        <h6>0.000000000 BTC</h6>
                        </div>
                        <div className="text-with-button">
                        <p className="">Buy Crypto with cash to start trading!</p>
                        <div>
                            <Link to={'/buy/usdt'} className="custom-btn secondary-btn">Buy/Sale</Link>
                            <Link to={'/wallet/deposit'} className="custom-btn secondary-btn">Deposit</Link>
                            <Link to={'/wallet/withdrawal'} className="custom-btn secondary-btn">Withdraw</Link>
                            <button className="custom-btn secondary-btn" onClick={transfer_show}>Transfer</button>
                        </div>
                        </div>
                        </div>
                        </Col>
                    </Row>
                    {/* <OverviewModal show={show} handleclose={handleClose}/> */}
                    <TransferModal transfershow={transfershow} transfer_close={transfer_close}/>

                </div>
                </div>
            </div>
        </div>
        </>
    )

}
export default Overview;