import { Col, Container, Row } from "react-bootstrap";

function Footer(){
    return (
        <>
    <Container>
   
    </Container>
    <section className="footer-section">
    <Container>
   
      <footer class="py-5">
        <Row>
          <Col lg={4} className="footer-first">
            <img width="100" src={require("../assets/images/footer_logo.png").default} className="mb-3"/>
            <p className="text-white footer-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam.
                </p>
          <ul class="list-unstyled d-flex footer-icon">
            <li class=""><a class="link-dark" href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li class=""><a class="link-dark" href="#"><i class="fa-brands fa-tiktok"></i></a></li>
            <li class=""><a class="link-dark" href="#"><i class="fa-brands fa-discord"></i></a></li>
            <li class=""><a class="link-dark" href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
          </ul>
          </Col>

          <Col lg={4} md={6}  className="footer-second col-6">
            <h2 className="text-white">Quick Links</h2>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
            </ul>
          </Col>

          <Col lg={4} md={6}  className="footer-third col-6">
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