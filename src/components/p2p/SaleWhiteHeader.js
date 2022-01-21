import { Link } from "react-router-dom";

function SaleWhiteHeader(){
    return <>
        <div className="white-header">
            <div className="white-header-box">
            <Link to={'/buy/usdt'} >BUY</Link>
             <Link to={'/sale/usdt'} className="h-active">SELL</Link>
            </div>
            <div className="ul">
                <Link to={'/sale/usdt'}>USDT</Link>
                <Link to={'/sale/btc'}>BTC</Link>
                <Link to={'/sale/bnb'}>BNB</Link>
                <Link to={'/sale/eth'}>ETH</Link>
            </div>
           
        </div>
    </>
}
export default SaleWhiteHeader;