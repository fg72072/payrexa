import { Link } from "react-router-dom";
import {Accordion } from "react-bootstrap";
function OrderSideBar(){
    return(
        <>
        <div className="sidebar faq-sidebar">
              
        <Accordion defaultActiveKey={['0']} alwaysOpen >

            <Accordion.Item eventKey="0">
                <Accordion.Header><i class="fa-solid fa-wallet"></i> Spot Order</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li>
                            <Link to={"/spot/open-order"}>Open Orders</Link>
                        </li>
                        <li>
                            <Link to={"/spot/open-order"}>Order History</Link>
                        </li>
                        <li>
                            <Link to={"/spot/open-order"}>Trade History</Link>
                        </li>
                      
                    </ul>
                </Accordion.Body>
                
            </Accordion.Item>
        </Accordion>
                

            </div>
        </>
    )
}
export default OrderSideBar;