import { Link } from "react-router-dom";
import {Accordion } from "react-bootstrap";
function FaqSideBar(){
    return(
        <>
        <div className="sidebar faq-sidebar">
              
        <Accordion defaultActiveKey={['0']} alwaysOpen >

            <Accordion.Item eventKey="0">
                <Accordion.Header><i class="fa-solid fa-user"></i> Account Functions</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li>
                            <Link to={"#"}>Guide to Account Functions</Link>
                        </li>

                        <li>
                            <Link to={"#"}>Identity Verification</Link>
                        </li>

                        <li>
                            <Link to={"#"}>Two-factor Authentication</Link>
                        </li>

                        <li>
                            <Link to={"#"}>Email Issues</Link>
                        </li>
                    </ul>
                </Accordion.Body>
                
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header><i class="fa-solid fa-graduation-cap"></i> Tutorials</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li>
                            <Link to={"#"}>Demo 1</Link>
                        </li>

                        <li>
                            <Link to={"#"}>Demo 1</Link>
                        </li>

                        <li>
                            <Link to={"#"}>Demo 1</Link>
                        </li>

                        <li>
                            <Link to={"#"}>Demo 1</Link>
                        </li>
                    </ul>
                </Accordion.Body>
                
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header><i class="fa-solid fa-coins"></i> PayRexa Fan Token</Accordion.Header>
                <Accordion.Body>
                    <ul>
                        <li>
                            <Link to={"#"}>Demo 1</Link>
                        </li>

                        <li>
                            <Link to={"#"}>Demo 1</Link>
                        </li>

                        <li>
                            <Link to={"#"}>Demo 1</Link>
                        </li>

                        <li>
                            <Link to={"#"}>Demo 1</Link>
                        </li>
                    </ul>
                </Accordion.Body>
                
            </Accordion.Item>
            
            
        </Accordion>
                

            </div>
        </>
    )
}
export default FaqSideBar;