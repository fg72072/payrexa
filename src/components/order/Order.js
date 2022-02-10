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
                            <Link to={"/spot/trade-order"}>Order History</Link>
                        </li>
                        <li>
                            <Link to={"/spot/user-trade"}>Trade History</Link>
                        </li>
                      
                    </ul>
                </Accordion.Body>
                
            </Accordion.Item>
                <ul className="li-flex">
                    <li><Link to={'/fiat-orders'} target="_blank"><div><i class="fa-solid fa-user-group first-icon"></i><span>P2P Order</span></div><i class="second-icon fa-solid fa-up-right-from-square"></i></Link></li>
                </ul>
        </Accordion>
                

            </div>
        </>
    )
}
export default OrderSideBar;