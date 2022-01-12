import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(){
  let [ isHidden, setIsHidden ] = useState(true)
    return (
        <>
        <div className="sticky-nav">
        <Container>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              <Link to={"/dashboard/swap"} className="custom-link nav-link active" onClick={()=>setIsHidden(true)}>Dashboard</Link>
            </li>
            <li className="nav-item">
            <Link to={"/"} className="custom-link nav-link" onClick={()=>setIsHidden(true)}>Invest & Earn</Link>
            </li>
            <li className="nav-item">
            <Link to={"/about"} className="custom-link nav-link" onClick={()=>setIsHidden(true)}>About Us</Link>
            </li>
            <li className="nav-item">
            <Link to={"/blog"} className="custom-link nav-link" onClick={()=>setIsHidden(true)}>Blog</Link>
            </li>
            <li className="nav-item">
            <Link to={"/login"} className="custom-link nav-link" onClick={()=>setIsHidden(true)}>Login</Link>
            </li>
            <li className="nav-item">
            <Link to={"/register"} className="custom-link nav-link" onClick={()=>setIsHidden(true)}>Register</Link>
            </li>
          </ul>

          <div className="d-flex">
            <div className="social-links-section">
              <a target="_blank" href="https://facebook.com/obiexfinance">
              <i class="fa-brands fa-facebook"></i>
              </a>
              <a target="_blank" href="https://t.me/joinchat/U5jIDQ3cSYYdabGr">
              <i class="fa-brands fa-telegram"></i>
                </a>
                <a target="_blank" href="https://twitter.com/obiexfinance">
                <i class="fa-brands fa-twitter"></i>
                  </a><a
                target="_blank" href="https://instagram.com/obiexfinance">
                  <i class="fa-brands fa-instagram"></i>
                  </a>
                  </div>
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