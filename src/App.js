// import logo from './logo.svg';
import './assets/css/Style.css'
import './assets/css/flagicon.css'
import {Header,Footer,UserPanelHeader,FormTopBar} from './components';
import {Login,Register,Forgot,Verification,Home,Dashboard,Swap,Wallet,History, Kyc} from './screens';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { useState } from 'react';


function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route path="/login" element={<Login header={<FormTopBar/>}/>} />
        <Route path="/register" element={<Register header={<FormTopBar/>}/>} />
        <Route path="/verification" element={<Verification header={<FormTopBar/>}/>} />
        <Route path="/forgot-password" element={<Forgot header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/kyc" element={<Kyc header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/" element={<Home header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/dashboard" element={<Dashboard header={<UserPanelHeader/>}/>} />
        <Route path="/dashboard/swap" element={<Swap header={<UserPanelHeader/>}/>} />
        <Route path="/dashboard/wallet" element={<Wallet header={<UserPanelHeader/>}/>} />
        <Route path="/dashboard/history" element={<History header={<UserPanelHeader/>}/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
