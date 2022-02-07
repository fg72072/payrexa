import { Link } from "react-router-dom";
import OverviewIcon from '../../assets/images/overview-icon.png'
import SpotIcon from '../../assets/images/spot-icon.png'
import FundingIcon from '../../assets/images/funding-icon.png'
function WalletSideBar(){
    return(
        <>
        <div className="sidebar">
                <div className="container-fluid">
                <ul className="mt-3">
                    
                    <li><Link to={'/wallet/overview'}><img src={OverviewIcon}/><span>Overview</span></Link></li>
                    <li><Link to={'/wallet/spot'}><img src={SpotIcon}/><span>Spot</span></Link></li>
                    <li><Link to={'/wallet/funding'}><img src={FundingIcon}/><span>Funding</span></Link></li>

                </ul>
                </div>

            </div>
        </>
    )
}
export default WalletSideBar;