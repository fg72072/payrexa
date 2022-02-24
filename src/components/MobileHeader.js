import { useState } from "react";
import { Link } from "react-router-dom";
function MobileHeader(){

      
  function openNav() {

    document.getElementById("mySidenav").style.width = "250px";

  }

  function closeNav() {
      
      document.getElementById("mySidenav").style.width = "0";

 }
    const [navlink,setNavlink] = useState(0);

    return(

        <>

    <div className="mobile-header">
        <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onClick={(e)=>closeNav()}>&times;</a>

        <ul class="menu-list">
            <li className="li">

                <a href="#" class="menu-link" onClick={navlink == 1 ? (e)=>setNavlink(0) :(e)=>setNavlink(1)}>Products</a>
                <ul className={navlink == 1 ? "inner-ul show-dropdown" : "inner-ul hide-dropdown"}>
                    <li>
                        <Link to={"/buy/usdt"}>
                            P2P Trade
                        </Link>
                    </li>
                    <li>
                        <Link to={"/spot/trade"}>
                            Spot Trade
                        </Link>
                    </li>
                    <li>
                        <Link to={"/fiat-orders"}>
                            P2P Orders
                        </Link>
                    </li>
                    <li>
                        <Link to={"/spot/open-order"}>
                            Spot Orders
                        </Link>
                    </li>
                    <li>
                        <Link to={"/buy/usdt"}>
                            Instant Buy
                        </Link>
                    </li>
                    <li>
                        <Link to={"/sale/usdt"}>
                            Instant Sell
                        </Link>
                    </li>
                    <li>
                        <Link to={"/wallet/spot"}>
                            Spot Wallet
                        </Link>
                    </li>
                    <li>
                        <Link to={"/wallet/funding"}>
                            Funding Wallet
                        </Link>
                    </li>
                </ul>

            </li>
            <li className="li">
            <Link to={"/market"}>Market</Link>

            </li>

            <li className="li">

                <a href="#" class="menu-link" onClick={navlink == 2 ? (e)=>setNavlink(0) :(e)=>setNavlink(2)}>Earn</a>
                <ul className={navlink == 2 ? "inner-ul show-dropdown" : "inner-ul hide-dropdown"}>
                    <li>
                        <Link to={"/launch/pad"}>
                            Launchpad
                        </Link>
                    </li>
                </ul>
            </li>

            <li className="li">
                <a href="#" class="menu-link" onClick={navlink == 3 ? (e)=>setNavlink(0) :(e)=>setNavlink(3)}>Company</a>
                <ul className={navlink == 3 ? "inner-ul show-dropdown" : "inner-ul hide-dropdown"}>
                    <li>
                        <Link to={"/support-center"}>
                            Support Center
                        </Link>
                    </li>
                    <li>
                    <Link to={"#"}>
                            Contact Us
                        </Link>
                    </li>
                    <li>
                    <Link to={"#"}>
                            Blog
                        </Link>
                    </li>
                    <li>
                    
                    <Link to={"#"}>
                            Get In Touch
                        </Link>
                    </li>

                    
                      
                </ul>

            </li>




        </ul>


        </div>

    <div class="open-btn">

        <div>

            <img width="50" src={require("../assets/images/logo.png").default}/>

        </div>

        <div className="d-flex align-items-center">
        <li className="nav-item dropdown mobile-drop">
        <Link to={"#"} className="custom-link nav-link"  id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        <span><i class="fa-regular fa-circle-user"></i></span>
        </Link>

        <ul class="dropdown-menu dropdown-menu-end no-icon-margin" aria-labelledby="navbarDropdown">

            <li><Link to={'/dashboard'}><i class="fa-regular fa-circle-user"></i>Dashboard</Link></li>
            <li><Link to={'/security'}><i class="fa-solid fa-shield"></i>Security</Link></li>
            <li><Link to={'/kyc'}><i class="fa-solid fa-pen-to-square"></i>Personal Info</Link></li>
            <li><Link to={'/payment'}><i class="fa-brands fa-bitcoin"></i>Payment</Link></li>
            <li><Link to={'/setting'}><i class="fa-solid fa-gear"></i>Settings</Link></li>

        </ul>

        </li>
        <span  id="open-btn-hide">
            <i class="fa fa-bars" onClick={(e)=>openNav()}></i>
        </span>
        </div>
        

    </div>
   </div>

        </>

    )

}

export default MobileHeader;