import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { MDBDataTableV5 } from 'mdbreact';
import BTCImage from '../../../assets/images/btc.svg'
import { Link } from "react-router-dom";
import DepositIcon from '../../../assets/images/deposit-drop-icon.png';
import WithdrawIcon from '../../../assets/images/withdraw-icon.png';
import TransferIcon from '../../../assets/images/transefer-icon.png';
import TransferModal from "../../../components/modals/Transfer";

function Spot(props){
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
            label: 'In Order',
            field: 'in_order',
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
            in_order: <Link to={'#'} className="anchor">0.0000000</Link>,
            value: '0.0000000',
            action: <div className="td-image-flex">
            <Link to={'/wallet/deposit'} className="anchor">Deposit</Link>
            <Link to={'/wallet/withdrawal'} className="anchor">Withdraw</Link>
            <li className="dropdown table-dropdown p-0 m-0">
                    <Link to={"#"} className="anchor"  id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Trade
                    </Link>

                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                        <li><Link to={'#'}> BTC/AUD</Link></li>
                        <li><Link to={'#'}>BTC/BIDR</Link></li>
                        <li><Link to={'#'}>BTC/BRL</Link></li>

                    </ul>

             </li>
            <Link to={'#'} onClick={transfer_show} className="anchor">Transfer</Link>
            </div>,
          },
          {
            assets: <><div className="td-image-flex"><img src={BTCImage}/><div className="span-div"><span>BTC</span><span>Bitcoin</span></div></div></>,
            total_ammount: '0.0000000',
            available: '0.0000000',
            in_order: <Link to={'#'} className="anchor">0.0000000</Link>,
            value: '0.0000000',
            action: <div className="td-image-flex">
            <Link to={'/wallet/deposit'} className="anchor">Deposit</Link>
            <Link to={'/wallet/withdrawal'} className="anchor">Withdraw</Link>
            <li className="dropdown table-dropdown p-0 m-0">
                    <Link to={"#"} className="anchor"  id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Trade
                    </Link>

                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                        <li><Link to={'#'}> BTC/AUD</Link></li>
                        <li><Link to={'#'}>BTC/BIDR</Link></li>
                        <li><Link to={'#'}>BTC/BRL</Link></li>

                    </ul>

             </li>
            <Link to={'#'} onClick={transfer_show} className="anchor">Transfer</Link>
            </div>,
          },
          {
            assets: <><div className="td-image-flex"><img src={BTCImage}/><div className="span-div"><span>BTC</span><span>Bitcoin</span></div></div></>,
            total_ammount: '0.0000000',
            available: '0.0000000',
            in_order: <Link to={'#'} className="anchor">0.0000000</Link>,
            value: '0.0000000',
            action: <div className="td-image-flex">
            <Link to={'/wallet/deposit'} className="anchor">Deposit</Link>
            <Link to={'/wallet/withdrawal'} className="anchor">Withdraw</Link>
            <li className="dropdown table-dropdown p-0 m-0">
                    <Link to={"#"} className="anchor"  id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Trade
                    </Link>

                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">

                        <li><Link to={'#'}> BTC/AUD</Link></li>
                        <li><Link to={'#'}>BTC/BIDR</Link></li>
                        <li><Link to={'#'}>BTC/BRL</Link></li>

                    </ul>

             </li>
            <Link to={'#'} onClick={transfer_show} className="anchor">Transfer</Link>
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
                    <h3 className="">Spot</h3>
                    <div className="">
                        <Link to={'/wallet/deposit'} className="custom-btn primary-btn">Deposit</Link>
                        <Link to={'/wallet/withdrawal'} className="custom-btn secondary-btn">Withdraw</Link>
                        <button className="custom-btn secondary-btn" onClick={transfer_show}>Transfer</button>
                        <Link to={'/wallet/deposit/history'} className="custom-btn secondary-btn">History</Link>
                    </div>
                </div>
                <div className="dashboard-margin">
                <div className="text-btn-flex normal-box">
                    <div>
                    <div className="mb-3 d-flex align-items-center">
                    <h5 className="">Spot balance</h5>
                    <button className="ml-1 custom-btn secondary-btn"><i className="fa fa-eye-slash" style={{marginRight:'5px'}}></i><span>Hide Balance</span></button>
                    </div>
                    <h5>0.00000000 BTC ≈ $0.000000</h5>
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
export default Spot;