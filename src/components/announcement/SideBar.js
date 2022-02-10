import { Link } from "react-router-dom";
import {Accordion } from "react-bootstrap";
function AnnouncementSideBar(){
    return(
        <>
        <div className="sidebar faq-sidebar">

               
                <ul className="li-flex">
                    <li>
                        <Link to={'#'}><div><i class="fa-brands fa-bitcoin first-icon"></i><span>New Cryptocurrency Listing</span></div></Link>
                    </li>
                    <li>
                        <Link to={'#'}><div><i class="fa-solid fa-bell first-icon"></i><span>Latest PayRexa News</span></div></Link>
                    </li>
                    <li>
                        <Link to={'#'}><div><i class="fa-solid fa-gift first-icon"></i><span>Latest Activities</span></div></Link>
                    </li>
                 
                </ul>
                

            </div>
        </>
    )
}
export default AnnouncementSideBar;