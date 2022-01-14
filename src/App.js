// import logo from './logo.svg';
import './assets/css/Style.css'
import './assets/css/responsive.css';
import './assets/css/dashboard.css'
import './assets/css/flagicon.css'
import {Header,Footer,UserPanelHeader,FormTopBar, SideBar} from './components';
import {Login,Register,Forgot,Verification,Home,Dashboard,Swap,Wallet,History, Kyc, Security, Payment,Setting,Welcome_DashB,Market, Disableaccount,Accountactivity,AddPayment, EmailVerification,Deposit} from './screens';
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
        <Route path="/payment" element={<Payment header={<Header/>} sidebar={<SideBar/>}/>} />
        <Route path="/setting" element={<Setting header={<Header/>} sidebar={<SideBar/>}/>} />
        <Route path="/dashboard/swap" element={<Swap header={<UserPanelHeader/>}/>} />
        <Route path="/dashboard/wallet" element={<Wallet header={<UserPanelHeader/>}/>} />
        <Route path="/dashboard/history" element={<History header={<UserPanelHeader/>}/>} />
        <Route path="/welcome" element={<Welcome_DashB header={<FormTopBar/>} />} />
        <Route path="/market" element={<Market header={<Header/>} footer={<Footer/>}/>} />
      
        
        </Routes>
    </Router>
    </>
  );
}

export default App;
