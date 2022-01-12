import { Link } from "react-router-dom";

function SideBar(){
    return(
        <>
        <div className="sidebar">
                <div className="container-fluid">

                <div className="profile-info">
                    <div className="img-section">
                        <h2>WA</h2>
                    </div>
                    <div className="p-footer mt-1">
                        <span>wassi@gmail.com</span>
                        <p>User ID : 4535345</p>
                    </div>
                </div>
                <ul>
                    <li><Link to={'/dashboard'}><i class="fa-regular fa-circle-user"></i><span>Dashboard</span></Link></li>
                    <li><Link to={'/security'}><i class="fa-solid fa-shield"></i><span>Security</span></Link></li>
                    <li><Link to={'/'}><i class="fa-solid fa-pen-to-square"></i><span>Personal Info</span></Link></li>
                    <li><Link to={'/payment'}><i class="fa-brands fa-bitcoin"></i><span>Payment</span></Link></li>
                    <li><Link to={'/setting'}><i class="fa-solid fa-gear"></i><span>Settings</span></Link></li>

                </ul>
                </div>

            </div>
        </>
    )
}
export default SideBar;