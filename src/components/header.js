import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LiIcon from '../assets/images/b-trade.png'

function Header(){
  let [ isHidden, setIsHidden ] = useState(true)
  const [token,setToken] = useState(localStorage.getItem("testtoken"));
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

                <li className="nav-item dropdown ">

                  <Link to={"#"} className="custom-link nav-link dropdown-toggle" onClick={()=>setIsHidden(true)} id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Products
                  </Link>

                    <ul class="dropdown-menu dropdown-menu-x-lg" aria-labelledby="navbarDropdown">
                     <Row>
                       <Col lg={6}>
                       <div className="dropdown-heading">
                       <span >Traders</span>
                       </div>
                      <li><Link to={'/buy/usdt'}><img src={LiIcon} />
                      <div>
                    <p>P2P Trade</p>
                    <span>Place limit, market orders and more</span>
                    </div>
                      </Link></li>
                      <li><Link to={'#'}><img src={LiIcon} />
                      <div>
                    <p>Spot Trade</p>
                    <span>Place limit, market orders and more</span>
                    </div>
                      </Link></li>
                      <div className="dropdown-heading">
                       <span >Orders</span>
                       </div>
                      <li><Link to={'/fiat-orders'}><img src={LiIcon} />
                          <div>
                        <p>P2P Orders</p>
                        <span>Place limit, market orders and more</span>
                        </div>
                           </Link></li>
                          <li><Link to={'/spot/open-order'}><img src={LiIcon} /> 
                          <div>
                        <p>Spot Orders</p>
                        <span>Place limit, market orders and more</span>
                        </div>
                          </Link></li>
                       </Col>
                       <Col lg={6}>
                       <div className="dropdown-heading">
                       <span >Everyone</span>
                       </div>
                      <li><Link to={'/buy/usdt'}><img src={LiIcon} />
                      <div>
                    <p>Instant Buy</p>
                    <span>Place limit, market orders and more</span>
                    </div>
                      </Link></li>
                      <li><Link to={'/sale/usdt'}><img src={LiIcon} />
                      <div>
                    <p>Instant Sell</p>
                    <span>Place limit, market orders and more</span>
                    </div>
                      </Link></li>
                      <div className="dropdown-heading">
                       <span >Wallets</span>
                       </div>
                      <li><Link to={'/wallet/spot'}><img src={LiIcon} />
                        <div>
                        <p>Spot Wallet</p>
                        <span>Place limit, market orders and more</span>
                        </div>
                        </Link></li>
                        <li><Link to={'/wallet/funding'}><img src={LiIcon} />
                        <div>
                        <p>Funding Wallet</p>
                        <span>Place limit, market orders and more</span>

                        </div>

                        </Link></li>
                       </Col>
                     </Row>

                    </ul>

                  </li>

                  <li className="nav-item">

                    <Link to={"/market"} className="custom-link nav-link" onClick={()=>setIsHidden(true)}>Market</Link>

                  </li>


                 


                  <li className="nav-item dropdown">

                      <Link to={"#"} className="custom-link nav-link dropdown-toggle" onClick={()=>setIsHidden(true)} id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        Earn
                      </Link>

                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                          <li><Link to={'/launch/pad'}><img src={LiIcon} />
                          <div>
                        <p>Launchpad</p>
                        <span>Place limit, market orders and more</span>
                        </div>
                           </Link></li>
                      

                      </ul>

                    </li>

                    <li className="nav-item dropdown">

                          <Link to={"#"} className="custom-link nav-link dropdown-toggle" onClick={()=>setIsHidden(true)} id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            Company
                          </Link>

                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                         

                              <li> 
                                <Link to={"/support-center"}  onClick={()=>setIsHidden(true)}><img src={LiIcon} />
                                <div>
                                  <p>Support Center</p>
                                </div>
                                </Link>
                              </li>
                              <li> 
                                <Link to={"#"}  onClick={()=>setIsHidden(true)}><img src={LiIcon} />
                                <div>
                                  <p>Contact Us</p>
                                </div>
                                </Link>
                              </li>
                              <li> 
                                <Link to={"#"}  onClick={()=>setIsHidden(true)}><img src={LiIcon} />
                                <div>
                                  <p>Blog</p>
                                </div>
                                </Link>
                              </li>
                              <li> 
                                <Link to={"#"}  onClick={()=>setIsHidden(true)}><img src={LiIcon} />
                                <div>
                                  <p>Get In Touch</p>
                                </div>
                                </Link>
                              </li>



                          </ul>

                          </li>
                    <li className="nav-item">


                    </li>
                </ul>
                

                <div className="d-flex">
                  {
                    console.log('token>>>>>>>>'+token)
                  }
                  <ul className="navbar-nav">
                    {
                      token == 'null' || token == null ?
                      <>
                      <li className="nav-item">

                        <Link to={"/login"} className="custom-btn secondary-btn" onClick={()=>setIsHidden(true)}>Login</Link>

                        </li>

                        <li className="nav-item">

                        <Link to={"/register"} className="custom-btn primary-btn" onClick={()=>setIsHidden(true)}>Register</Link>

                        </li>
                      </>
                      :
                      <>
                      <li className="nav-item dropdown ">

                        <Link to={"#"} className="custom-link nav-link" onClick={()=>setIsHidden(true)} id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fa-regular fa-circle-user"></i>
                        </Link>

                          <ul class="dropdown-menu dropdown-menu-end no-icon-margin" aria-labelledby="navbarDropdown">

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
                      </>
                    }
                  


                
                    
                    



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