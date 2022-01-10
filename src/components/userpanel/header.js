import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserPanelHeader(){
  let [ isHidden, setIsHidden ] = useState(true)
    return (
        <>
    <div className="sticky-nav dashboard-header">
        <Container>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand" href="#">
          <img width="50" src={require("../../assets/images/favicon-white.png").default}/>
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
        
        <div className={(isHidden ? "nav-hide": "nav-show") + " collapse d-flex custom-nav"} id="navbarSupportedContent">

          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/dashboard'} className="custom-link nav-link active" aria-current="page" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/dashboard/wallet'} className="custom-link nav-link" href="#">Wallets</Link>
            </li>
            <li className="nav-item">
              <Link to={'/dashboard/history'} className="custom-link nav-link" href="#">History</Link>
            </li>
            <li className="nav-item">
              <a className="custom-link nav-link" href="#">Account</a>
            </li>
          </ul>

        </div>
          <div className="d-flex">
                <Link to={'/dashboard/swap'} class="btn btn-orange swap">
                <i class="fa fa-exchange swap-icon"></i>
                </Link>
          </div>
      </div>
    </nav>
  </Container>
        </div>
        </>
    )
}
export default UserPanelHeader;