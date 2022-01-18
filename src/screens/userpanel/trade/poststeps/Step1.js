
function PostStep1(){
    return (<>
    <div className="form-tabs">
                 <Nav variant="pills" defaultActiveKey="link-1">
                <Nav.Item>
                    <Nav.Link eventKey="link-1" >I want to Buy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" >I want to Sell</Nav.Link>
                </Nav.Item>
                </Nav>
        </div>
        
    <h4>Asset</h4>
            <ul>
                <li>
                    <input type="radio"/>
                    <span>USDT</span>
                </li>
                <li>
                    <input type="radio"/>
                    <span>USDT</span>
                </li>
                <li>
                    <input type="radio"/>
                    <span>USDT</span>
                </li>
                <li>
                    <input type="radio"/>
                    <span>USDT</span>
                </li>
                <li>
                    <input type="radio"/>
                    <span>USDT</span>
                </li>
                <li>
                    <input type="radio"/>
                    <span>USDT</span>
                </li>
            </ul>
            <h4 className="mt-5">With Cash</h4>
            <ul>
                <li>
                    <input type="radio"/>
                    <span>USDT</span>
                </li>
                <li>
                    <input type="radio"/>
                    <span>USDT</span>
                </li>
                <li>
                    <input type="radio"/>
                    <span>USDT</span>
                </li>
                <li>
                    <input type="radio"/>
                    <span>USDT</span>
                </li>
                <li>
                    <input type="radio"/>
                    <span>USDT</span>
                </li>
                <li>
                    <input type="radio"/>
                    <span>USDT</span>
                </li>
            </ul>
            <hr/>

            <ul className="post-footer-ul">
                <li>
                    <h4>Your Price</h4>
                    <h4>$ 450.00</h4>
                </li>
                <li>
                    <h4>Your Price</h4>
                    <h4>$ 450.00</h4>
                </li>
                <li>
                    <h4>Your Price</h4>
                    <input type="radio"/>
                    <span>Floating</span>
                   <div>
                   <input type="radio"/>
                    <span>Fixed</span>
                   </div>
                </li>
                <li>
                    <h4>Your Price</h4>
                    <h4>$ 450.00</h4>
                </li>
            </ul>
    </>)
}
export default PostStep1;