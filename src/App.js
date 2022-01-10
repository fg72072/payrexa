// import logo from './logo.svg';
import './assets/css/Style.css'
import {Header,Footer,UserPanelHeader} from './components';
import {Login,Register,Forgot,Verification,LevelOne,LevelTwo,Home,Dashboard,Swap,Wallet,History} from './screens';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { useState } from 'react';


function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route path="/login" element={<Login header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/register" element={<Register header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/verification" element={<Verification header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/forgot-password" element={<Forgot header={<Header/>} footer={<Footer/>}/>} />
        <Route path="/level-one" element={<LevelOne />} />
        <Route path="/level-two" element={<LevelTwo />} />
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
