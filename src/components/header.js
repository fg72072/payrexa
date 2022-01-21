import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(){
  let [ isHidden, setIsHidden ] = useState(true)
    return (
        <>
        <div className="sticky-nav">

        <Container fluid className="custom-nav">

          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">

              <Link to={"/"} className="navbar-brand">
                <img width="50" src={require("../assets/images/logo.png").default}/>
                <span className="logo-title">PayRexa</span>
              </Link>
              {
                isHidden ? <button className="navbar-toggler" type="button" onClick={()=>setIsHidden(false)} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
              : 
              <button className="navbar-toggler" type="button" onClick={()=>setIsHidden(true)} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x AppNavbar_toggleIconClass_3s9Ll"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              }
              
              <div className={(isHidden ? "nav-hide": "nav-show") + " collapse navbar-collapse d-flex custom-nav"} id="navbarSupportedContent">

                <ul className="navbar-nav  mb-2 mb-lg-0">

                 

                  <li className="nav-item">

                    <Link to={"/market"} className="custom-link nav-link" onClick={()=>setIsHidden(true)}>Market</Link>

                  </li>

                  <li className="nav-item dropdown ">

                      <Link to={"#"} className="custom-link nav-link dropdown-toggle" onClick={()=>setIsHidden(true)} id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Trade
                      </Link>

                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                          <li><Link to={'/buy/usdt'}><img src={require("../assets/images/p2p.png").default} /> P2P Trade</Link></li>
                          <li><Link to={'#'}><img src={require("../assets/images/exchange1.png").default} /> Spot Trade</Link></li>

                        </ul>

                    </li>

                  <li className="nav-item">

                    <Link to={"/login"} className="custom-link nav-link" onClick={()=>setIsHidden(true)}>Login</Link>

                  </li>

                  <li className="nav-item">

                    <Link to={"/register"} className="custom-link nav-link" onClick={()=>setIsHidden(true)}>Register</Link>

                  </li>

                  <li className="nav-item dropdown">

                      <Link to={"#"} className="custom-link nav-link dropdown-toggle" onClick={()=>setIsHidden(true)} id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Wallet
                      </Link>

                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                        <li><Link to={'/wallet/spot'}><img src={require("../assets/images/p2p.png").default} />Spot Wallet</Link></li>
                        <li><Link to={'/wallet/funding'}><img src={require("../assets/images/share.png").default} />Funding Wallet</Link></li>
                       

                      </ul>

                  </li>

                  <li className="nav-item dropdown">

                      <Link to={"#"} className="custom-link nav-link dropdown-toggle" onClick={()=>setIsHidden(true)} id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Orders
                      </Link>

                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                          <li><Link to={'/fiat-orders'}><img src={require("../assets/images/p2p.png").default} /> P2P Orders</Link></li>
                          <li><Link to={'#'}><img src={require("../assets/images/exchange1.png").default} /> Spot Orders</Link></li>
                      

                      </ul>

                    </li>

                </ul>

                <div className="d-flex">

                  <ul className="navbar-nav">

                    


                
                    
                    <li className="nav-item dropdown">

                      <Link to={"#"} className="custom-link nav-link" onClick={()=>setIsHidden(true)} id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-regular fa-circle-user"></i>
                      </Link>

                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">

                          <li><Link to={'/dashboard'}><i class="fa-regular fa-circle-user"></i>Dashboard</Link></li>
                          <li><Link to={'/security'}><i class="fa-solid fa-shield"></i>Security</Link></li>
                          <li><Link to={'/kyc'}><i class="fa-solid fa-pen-to-square"></i>Personal Info</Link></li>
                          <li><Link to={'/payment'}><i class="fa-brands fa-bitcoin"></i>Payment</Link></li>
                          <li><Link to={'/setting'}><i class="fa-solid fa-gear"></i>Settings</Link></li>

                        </ul>

                    </li>


                    <li className="nav-item dropdown">

                      <Link to={"#"} className="custom-link nav-link" onClick={()=>setIsHidden(true)} id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false"> 
                        <i class="fa-regular fa-bell"></i>
                      </Link>

                      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg" aria-labelledby="navbarDropdown">

                        <li className="notification-dropdown">

                          <Link to={'#'}>
                            <p>View All <i class="fa-solid fa-arrow-right-long"></i></p>
                          </Link>

                          </li>

                        <li className="notification-dropdown">

                        <Link to={'#'} className="unread">

                            <p className="f-bold">It's time to buy your first crypto </p>
                            <p>Here are easy steps asdas as asd asjd asijd iqw ads asc aos</p>

                        </Link>

                        </li>


                        <li className="notification-dropdown">

                          <Link to={'#'} className="unread">

                              <p className="f-bold">It's time to buy your first crypto </p>
                              <p>Here are easy steps asdas as asd asjd asijd iqw ads asc aos</p>

                          </Link>

                        </li>



                        <li className="notification-dropdown">

                          <Link to={'#'} className="">

                              <p className="f-bold">It's time to buy your first crypto </p>
                              <p>Here are easy steps asdas as asd asjd asijd iqw ads asc aos</p>

                          </Link>

                        </li>
                        

                      </ul>

                    </li>



                  </ul>

                
                </div>
              </div>
            </div>
          </nav>

        </Container>

        </div>
        </>
    )
}
export default Header;