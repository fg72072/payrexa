import { Row,Col, Tab, Tabs, Table } from "react-bootstrap"
import { Link } from "react-router-dom"

function Payment(props){
    return (
        <>
        {props.header}
        <div className="dashboard-section">
            {props.sidebar}
            <div className="dashboard-main">
                <div className="normal-box big-bg">
                    <h3 className="mt-3 mb-3">Payment</h3>
                </div>
                <div className="dashboard-margin">
                <Row>
                    <Col lg={12}>
                    <div class="normal-box">
                        <div className="d-j-flex">
                        <h4>P2P</h4>
                        <button class="custom-btn-sm">+ Add Payment Details</button>
                        </div>
                        <hr/>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <h5 className="mt-4">Payment Details</h5>
                        <hr/>
                        <Table responsive="sm">
                        <thead>
                        <tr>
                            <th>Payment Type</th>
                            <th>Name</th>
                            <th>Account #</th>
                            <th>Bank Name</th>
                            <th>Date Created</th>
                            <th>Action</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Bank Acc</td>
                            <td>Test</td>
                            <td>232323243234234</td>
                            <td>Swiss</td>
                            <td>12/12/2020</td>
                            <td><div className="d-flex c-b-group"><a className="custom-disable-btn pointer">Edit</a><a className="custom-disable-btn red pointer">Delete</a></div></td>
                        </tr>
                        <tr>
                            <td>Bank Acc</td>
                            <td>Test</td>
                            <td>232323243234234</td>
                            <td>Swiss</td>
                            <td>12/12/2020</td>
                            <td><div className="d-flex c-b-group"><a className="custom-disable-btn pointer">Edit</a><a className="custom-disable-btn red pointer">Delete</a></div></td>
                        </tr>
                        <tr>
                            <td>Bank Acc</td>
                            <td>Test</td>
                            <td>232323243234234</td>
                            <td>Swiss</td>
                            <td>12/12/2020</td>
                            <td><div className="d-flex c-b-group"><a className="custom-disable-btn pointer">Edit</a><a className="custom-disable-btn red pointer">Delete</a></div></td>
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
export default Payment