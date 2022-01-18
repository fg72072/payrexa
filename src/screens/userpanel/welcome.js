import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function Welcome_DashB(props){

    return(

        <>
        
         {props.header}

        <Container >
            <Link to={'/dashboard'} className="anchor flex-end">Dashboard</Link>
            <div className="banner-section">

                <div className="heading-border text-center">
                    <h1 className="dual-heading">Welcome To <span>PayRexa</span></h1>
                    <hr/>
                    <p>Start your crypto journey with a partner you can trust</p>
                </div>

            </div>


            <div className="text-center welcome-sc">
                <h1 className="dual-heading-sm">Get Started With Your Crypto Journey</h1>

                <div>

                    <img src={require("../../assets/images/welcome.png").default}/>

                </div>

                <a class="custom-btn primary-btn" href="#">Learn More <i class="fa-solid fa-arrow-right"></i></a>

            </div>





        </Container>

       

        </>

    )

}

export default Welcome_DashB;