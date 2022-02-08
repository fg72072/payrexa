// import logo from './logo.svg';
import './assets/css/Style.css'
import './assets/css/responsive.css';
import './assets/css/dashboard.css'
import './assets/css/flagicon.css'
import {Header,Footer,UserPanelHeader,FormTopBar, SideBar, WalletSideBar, FaqSideBar,OrderSideBar} from './components';
import {Login,Register,Forgot,Verification,Home,Dashboard,Swap,Wallet,History, Kyc, Security, Payment,Setting,Welcome_DashB,Market, Disableaccount,Accountactivity,AddPayment, EmailVerification,Deposit, P2P, MyAds, MyOrders, Express, UserCenter, PostAds, BuyUSDT, BuyBTC, BuyBNB, BuyETH, SaleUSDT, SaleBTC, SaleBNB, SaleETH, Withdrawal, Overview, Funding, Spot, WalletHistory, TransferHistory, SupportCenter, ChangeEmail, ResetVerifiction, UnlockAccount, Pad, ViewAllLPD, Subscription, ViewAllLP, LaunchPool,Faq, OpenOrder, TradeOrder} from './screens';
import {Accountlogon} from './screens';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { useState } from 'react';


function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route path="/login" element={<Login header={<FormTopBar/>}/>} />
        <Route path="/register" element={<Register header={<FormTopBar/>}/>} />
        <Route path="/phone/verification" element={<Verification header={<FormTopBar/>}/>} />
        <Route path="/email/verification" element={<EmailVerification header={<FormTopBar/>}/>} />
        <Route path="/forgot-password" element={<Forgot header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/kyc" element={<Kyc header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/" element={<Home header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/dashboard" element={<Dashboard header={<Header/>} sidebar={<SideBar/>}/>} />
        <Route path="/security" element={<Security header={<Header/>} sidebar={<SideBar/>}/>} />
        <Route path="/security/disable-account" element={<Disableaccount header={<Header/>} sidebar={<SideBar/>}/>} />
        <Route path="/payment/add" element={<AddPayment header={<Header/>} sidebar={<SideBar/>}/>} />
        <Route path="/security/account-activity" element={<Accountactivity header={<Header/>} sidebar={<SideBar/>}/>} />
        <Route path="/security/device-logon" element={<Accountlogon header={<Header/>} sidebar={<SideBar/>}/>} />
        <Route path="/wallet/deposit" element={<Deposit header={<Header/>} sidebar={<SideBar/>}/>} />
        <Route path="/wallet/withdrawal" element={<Withdrawal header={<Header/>} sidebar={<SideBar/>}/>} />
        <Route path="/wallet/overview" element={<Overview header={<Header/>} sidebar={<WalletSideBar/>}/>} />
        <Route path="/wallet/funding" element={<Funding header={<Header/>} sidebar={<WalletSideBar/>}/>} />
        <Route path="/wallet/spot" element={<Spot header={<Header/>} sidebar={<WalletSideBar/>}/>} />
        <Route path="/wallet/deposit/history" element={<WalletHistory header={<Header/>} sidebar={<WalletSideBar/>}/>} />
        <Route path="/wallet/transfer/history" element={<TransferHistory header={<Header/>} sidebar={<WalletSideBar/>}/>} />
        <Route path="/payment" element={<Payment header={<Header/>} sidebar={<SideBar/>}/>} />
        <Route path="/setting" element={<Setting header={<Header/>} sidebar={<SideBar/>}/>} />
        <Route path="/dashboard/swap" element={<Swap header={<UserPanelHeader/>}/>} />
        <Route path="/dashboard/wallet" element={<Wallet header={<UserPanelHeader/>}/>} />
        <Route path="/dashboard/history" element={<History header={<UserPanelHeader/>}/>} />
        <Route path="/wallet/deposit" element={<Deposit header={<Header/>} sidebar={<SideBar/>}/>} />
        <Route path="/welcome" element={<Welcome_DashB header={<FormTopBar/>} />} />
        <Route path="/market" element={<Market header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/trade/my-adds" element={<MyAds header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/fiat-orders" element={<MyOrders header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/express" element={<Express header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/user-center" element={<UserCenter header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/post-ads" element={<PostAds header={<Header/>} footer={<Footer/>}/>} />

        {/* buy routes */}

        <Route path="/buy/usdt" element={<BuyUSDT header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/buy/btc" element={<BuyBTC header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/buy/bnb" element={<BuyBNB header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/buy/eth" element={<BuyETH header={<Header/>} footer={<Footer/>}/>} />

        {/* sale routes */}

        <Route path="/sale/usdt" element={<SaleUSDT header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/sale/btc" element={<SaleBTC header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/sale/bnb" element={<SaleBNB header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/sale/eth" element={<SaleETH header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/support-center" element={<SupportCenter header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/change/email" element={<ChangeEmail header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/reset/verification" element={<ResetVerifiction header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/unlock/account" element={<UnlockAccount header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/launch/pad" element={<Pad header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/viewall/lpd" element={<ViewAllLPD header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/viewall/lp" element={<ViewAllLP header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/launchpool/:id" element={<LaunchPool header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/subscription/:id" element={<Subscription header={<Header/>} footer={<Footer/>}/>} />
        
        {/* FAQ */}

        <Route path="/faq" element={<Faq header={<Header/>} footer={<Footer/>} sidebar={<FaqSideBar/>} />} />
        {/* orders  */}
        <Route path="/spot/open-order" element={<OpenOrder header={<Header/>} footer={<Footer/>} sidebar={<OrderSideBar/>} />} />
        <Route path="/spot/trade-order" element={<TradeOrder header={<Header/>} footer={<Footer/>} sidebar={<OrderSideBar/>} />} />


        </Routes>
    </Router>
    </>
  );
}

export default App;
