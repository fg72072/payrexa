import P2P from "../P2P";
import WhiteHeader from "../../../../components/p2p/WhiteHeader";

function BuyUSDT(props){
    return <>
    {props.header}

        <P2P whiteheader={<WhiteHeader/>} p2ptype={'buy'}/>
        {props.footer}

    </>
}
export default BuyUSDT;