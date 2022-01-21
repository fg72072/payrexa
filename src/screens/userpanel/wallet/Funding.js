import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { MDBDataTableV5 } from 'mdbreact';
import BTCImage from '../../../assets/images/btc.svg'
import { Link } from "react-router-dom";
import DepositIcon from '../../../assets/images/deposit-drop-icon.png';
import WithdrawIcon from '../../../assets/images/withdraw-icon.png';
import TransferIcon from '../../../assets/images/transefer-icon.png';
import TransferModal from "../../../components/modals/Transfer";

function Funding(props){
    const [transfershow, setTransfershow] = useState(false);

    const transfer_close = () => setTransfershow(false);
    const transfer_show = () => setTransfershow(true);

    const [datatable, setDatatable] = useState({
        columns: [
          {
            label: 'Assets',
            field: 'assets',
            width: 150,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'assets',
            },
          },
          {
            label: 'Total Ammount',
            field: 'total_ammount',
            width: 200,
          },
          {
            label: 'Available',
            field: 'available',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'Frozen',
            field: 'frozen',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'BTC Value',
            field: 'value',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'Action',
            field: 'action',
            sort: 'asc',
            width: 100,
          },
        ],
        rows: [
         
          {
            assets: <><div className="td-image-flex"><img src={BTCImage}/><div className="span-div"><span>BTC</span><span>Bitcoin</span></div></div></>,
            total_ammount: '0.0000000',
            available: '0.0000000',
            frozen: '0.0000000',
            value: '0.0000000',
            action: <div className="td-image-flex"><Link to={'/buy/usdt'} className="anchor">Buy / Sale</Link>
            <li className="dropdown table-dropdown">
                    <Link to={"#"} className=" dropdown-toggle"  id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-ellipsis"></i>
                    </Link>

                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                        <li><img src={DepositIcon}/><Link to={'/wallet/deposit'}> Deposit</Link></li>
                        <li><img src={WithdrawIcon}/><Link to={'/wallet/withdraw'}>Withdraw</Link></li>
                        <li><img src={TransferIcon}/><Link to={'#'} onClick={transfer_show}>Transfer</Link></li>

                    </ul>

                    </li>
            </div>,
          },
          {
            assets: <><div className="td-image-flex"><img src={BTCImage}/><div className="span-div"><span>BTC</span><span>Bitcoin</span></div></div></>,
            total_ammount: '0.0000000',
            available: '0.0000000',
            frozen: '0.0000000',
            value: '0.0000000',
            action: <div className="td-image-flex"><Link to={'/buy/usdt'} className="anchor">Buy / Sale</Link>
            <li className="dropdown table-dropdown">
                    <Link to={"#"} className=" dropdown-toggle"  id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-ellipsis"></i>
                    </Link>

                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                        <li><img src={DepositIcon}/><Link to={'/wallet/deposit'}> Deposit</Link></li>
                        <li><img src={WithdrawIcon}/><Link to={'/wallet/withdraw'}>Withdraw</Link></li>
                        <li><img src={TransferIcon}/><Link to={'#'} onClick={transfer_show}>Transfer</Link></li>

                    </ul>

                    </li>
            </div>,
          },
          {
            assets: <><div className="td-image-flex"><img src={BTCImage}/><div className="span-div"><span>BTC</span><span>Bitcoin</span></div></div></>,
            total_ammount: '0.0000000',
            available: '0.0000000',
            frozen: '0.0000000',
            value: '0.0000000',
            action: <div className="td-image-flex"><Link to={'/buy/usdt'} className="anchor">Buy / Sale</Link>
            <li className="dropdown table-dropdown">
                    <Link to={"#"} className=" dropdown-toggle"  id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-ellipsis"></i>
                    </Link>

                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                        <li><img src={DepositIcon}/><Link to={'/wallet/deposit'}> Deposit</Link></li>
                        <li><img src={WithdrawIcon}/><Link to={'/wallet/withdraw'}>Withdraw</Link></li>
                        <li><img src={TransferIcon}/><Link to={'#'} onClick={transfer_show}>Transfer</Link></li>

                    </ul>

                    </li>
            </div>,
          },
        ],
      });
    
    return (
        <>
        {props.header}
        <div className="dashboard-section">

            {props.sidebar}
            <div className="dashboard-main">
                <div className="text-btn-flex normal-box big-bg">
                    <h3 className="">Funding</h3>
                    <div className="">
                        <Link to={'/wallet/deposit'} className="custom-btn primary-btn">Deposit</Link>
                        <Link to={'/wallet/withdraw'} className="custom-btn secondary-btn">Withdraw</Link>
                        <button className="custom-btn secondary-btn" onClick={transfer_show}>Transfer</button>
                        <button className="custom-btn secondary-btn">History</button>
                    </div>
                </div>
                <div className="dashboard-margin">
                <div className="text-btn-flex normal-box">
                    <div>
                    <div className="mb-3 d-flex align-items-center">
                    <h5 className="">Estimated Balance</h5>
                    <button className="ml-1 custom-btn secondary-btn"><i className="fa fa-eye-slash" style={{marginRight:'5px'}}></i><span>Hide Balance</span></button>
                    </div>
                    <h5>0.00000000 BTC</h5>
                    </div>
                    <div className="">
                        <Link to={'/buy/usdt'} className="custom-btn primary-btn">Buy</Link>
                        <Link to={'/sale/usdt'} className="custom-btn secondary-btn">Sale</Link>
                    </div>
                    
                </div>
                </div>

                <div className="dashboard-margin">
                <MDBDataTableV5
                hover
                entriesOptions={[5, 20, 25]}
                entries={5}
                pagesAmount={4}
                data={datatable}
                pagingTop
                searchTop
                searchBottom={false}
                />
                </div>
            </div>
        </div>
        <TransferModal transfershow={transfershow} transfer_close={transfer_close}/>

        </>
    )

}
export default Funding;