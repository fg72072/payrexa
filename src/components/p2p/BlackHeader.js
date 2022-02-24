import { Link } from "react-router-dom";

function BlackHeader(){
    return <>
    <div className="black-header">
            <div className="d-flex">
                <Link to={'/express'}>Express</Link>
                <Link to={'/buy/usdt'}>P2P Trade</Link>
            </div>
            <div className="d-flex">
                <Link to={'/fiat-orders'} className="black-header-anchor"><i class="fa-solid fa-file-lines"></i><span>Orders</span></Link>
                <Link to={'/user-center'} className="black-header-anchor"><i class="fa-solid fa-users"></i><span>P2P User Center</span></Link>
                <li className="dropdown more-list">
                    <Link to={"#"} className="black-header-anchor black-header-anchor-dropdown dropdown-toggle"  id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-ellipsis-vertical"></i><span>More</span>
                    </Link>

                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                        <li><Link to={'/post-ads'}> Post new Ad</Link></li>
                        <li><Link to={'/trade/my-adds'}>My Ads</Link></li>

                    </ul>

                    </li>
            </div>
        </div>
    </>
}
export default BlackHeader;