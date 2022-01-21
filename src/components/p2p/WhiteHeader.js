import { Link } from "react-router-dom";

function WhiteHeader(){
    return <>
        <div className="white-header">
            <div className="white-header-box">
            <Link to={'/buy/usdt'} className="h-active">BUY</Link>
             <Link to={'/sale/usdt'}>SELL</Link>
            </div>
            <div className="ul">
                <Link to={'/buy/usdt'}>USDT</Link>
                <Link to={'/buy/btc'}>BTC</Link>
                <Link to={'/buy/bnb'}>BNB</Link>
                <Link to={'/buy/eth'}>ETH</Link>
            </div>
           
        </div>
    </>
}
export default WhiteHeader;