import { Row,Col, Tab, Tabs, Table } from "react-bootstrap"
import { Link } from "react-router-dom"


function Setting(props){
    return (
        <>
        {props.header}
        <div className="dashboard-section">
            {props.sidebar}
            <div className="dashboard-main">
                <div className="normal-box big-bg">
                    <h3 className="mt-3 mb-3">Settings</h3>
                </div>
                <div className="dashboard-margin">
                <Row>
                    <Col lg={12}>
                    <div class="normal-box">
                        <h4>Increase your account security</h4>
                        <hr/>
                        
                    </div>
                    </Col>
                </Row>
               
                </div>
            </div>
        </div>
        </>
    )
}
export default Setting