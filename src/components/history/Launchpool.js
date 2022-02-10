import { Link } from "react-router-dom";
import {Accordion } from "react-bootstrap";
function LaunchPoolSideBar(){
    return(
        <>
        <div className="sidebar faq-sidebar">
              
                <ul className="li-flex">
                    <li><Link to={'/history/lottery/PROCESSING'}><div><span>Lottery</span></div></Link></li>
                    <li><Link to={'/history/flashsale'}><div><span>FlashSale</span></div></Link></li>
                    <li><Link to={'/history/launchpool/rewards'}><div><span>Launchpool Order</span></div></Link></li>
                    <li><Link to={'/history/subscription'}><div><span>Subscription Order</span></div></Link></li>

                </ul>

            </div>
        </>
    )
}
export default LaunchPoolSideBar;