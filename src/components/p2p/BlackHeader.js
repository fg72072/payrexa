import { Link } from "react-router-dom";

function BlackHeader(){
    return <>
    <div className="black-header">
            <div className="d-flex">
                <Link to={'/express'}>Express</Link>
                <Link to={'/buy/usdt'}>P2P Trade</Link>
            </div>
            <div className="d-flex">
                <Link to={'/fiat-orders'}>Orders</Link>
                <Link to={'/user-center'}>P2P User Center</Link>
                <li className="dropdown more-list">
                    <Link to={"#"} className=" dropdown-toggle"  id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    More
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