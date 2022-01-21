import P2P from "../P2P";
import SaleWhiteHeader from "../../../../components/p2p/SaleWhiteHeader";

function SaleUSDT(props){
    
    return <>
    {props.header}
        <P2P whiteheader={<SaleWhiteHeader/>} p2ptype={'sale'}/>
        {props.footer}

    </>
}
export default SaleUSDT;