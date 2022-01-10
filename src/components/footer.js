import { Col, Container, Row } from "react-bootstrap";

function Footer(){
    return (
        <>
    <Container>
    <div className="popup">
                <div className="d-j-flex">
                <h1>Don't be shy, message us anytime. We're<br/>looking for ward to speaking with you</h1>
                <button class="btn  btn-crypto  btn-orange btn-padding" type="button">Get in <b>Touch</b></button>
                </div>
            </div>
    </Container>
    <section className="footer-section">
    <Container>
   
      <footer class="py-5">
        <Row>
          <Col sm="12" lg="4">
            <img width="100" src={require("../assets/images/footer_logo.png").default}/>
            <p className="text-white footer-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam.
                </p>
          <ul class="list-unstyled d-flex footer-icon">
            <li class=""><a class="link-dark" href="#"><i class="fa fa-facebook-f"></i></a></li>
            <li class=""><a class="link-dark" href="#"><i class="fa fa-telegram"></i></a></li>
            <li class=""><a class="link-dark" href="#"><i class="fa fa-twitter"></i></a></li>
            <li class=""><a class="link-dark" href="#"><i class="fa fa-instagram"></i></a></li>
          </ul>
          </Col>

          <Col sm="12" lg="4" md={6}>
            <h2 className="text-white">Quick Links</h2>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
            </ul>
          </Col>

          <Col sm="12" lg="4" md={6}>
          <h2 className="text-white">Contact Us</h2>
          <p className="text-white footer-text">
                <b>ABC,Your Address, NYC, <br/> USA</b>
          </p>
          <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">info@example.com</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">+1 (333) 32423423</a></li>
            </ul>
          </Col>
        </Row>
        <hr class="hr"/>
        <p className="text-white footer-text text-center">
          &copy; 2021 Pluton. All Rights Reserved.
        </p>
      </footer>
    </Container>
    </section>
        </>
    )
}
export default Footer;