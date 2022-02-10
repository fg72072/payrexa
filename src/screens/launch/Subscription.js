import { useState } from "react";
import { Container,Row,Col,Form,Dropdown,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import LeagueImage from "../../assets/images/league.png";
import VoxiesImage from "../../assets/images/voxies.jpg";
import Logo from "../../assets/images/logo.png"



function Subscription(props){

    
    return (
        <>
        {props.header}

            {props.sidebar}
            <div className="dashboard-main">
                <div className="normal-box big-bg">
                <div class=" d-flex justify-content-between align-items-center">
                    <div className="back-link m-0">
                    <Link to={'/launch/pad'}><i class="fa-solid fa-angle-left"></i> Launchpad</Link>
                    </div>
              
                
                </div>
                </div>
               
            </div>
               
            <div className=" dashboard-main support-padding">
               <div className="dashboard-margin">
                <Row>
                    <Col lg={12}>
                   <Row>
                        <Col lg={2}>
                    <img src={LeagueImage} className="pad-img"/>
                    </Col>
                    <Col lg={10}>
                        <Row>
                            <Col lg={12}>
                            <div className="detail-flex-top">
                                <div>
                                <h4>League of Kindoms</h4>
                                <p>A Blockchain MMO Strategy Game.</p>
                                </div>
                                <div className="flex-direction-colum">
                                <span>Time Left Until subscription start</span>
                                <div className="pad-flex mt-0">
                                <div className="pad-time">
                                <span className="f-bold">08 </span><span>Days</span>
                                </div>
                                <div className="pad-time">
                                <span className="f-bold">08 </span><span>Hours</span>
                                </div>
                                <div className="pad-time">
                                <span className="f-bold">08 </span><span>Minutes</span>
                                </div>
                                
                                </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <button className="custom-btn primary-btn">Website</button>
                                <button className="custom-btn primary-btn">Whitepaper</button>
                                <button className="custom-btn primary-btn">View detailed rules</button>
                                <button className="custom-btn primary-btn">LOKA Research Report</button>
                                <button className="custom-btn primary-btn">FAQ</button>

                            </div>
                        
                            </Col>
                           
                        </Row>
                        
                    </Col>
                        </Row>
                    </Col>
                    <Col lg={12}>
                    <div className="pad-detail-flex">
                        <div className="div">
                            <span>Type</span>
                            <span className="f-bold">Subscription</span>
                        </div>
                        <div className="div">
                            <span>Sale Price</span>
                            <span className="f-bold">1 LOKA = 0.00033971 BNB</span>
                        </div>
                        <div className="div">
                            <span>Tokens Offered</span>
                            <span className="f-bold">25,000,000.0000 LOKA</span>
                        </div>
                        <div className="div">
                            <span>Single Initial Investment</span>
                            <span className="f-bold">Single Initial Investment</span>
                        </div>
                        <div className="div">
                            <span>Hard cap per user</span>
                            <span className="f-bold">93750 LOKA = 31.8478 BNB (≈ 12036 USD)</span>
                        </div>
                    </div>
                    </Col>
                 
                </Row>
               </div>
               <div className="dashboard-margin mt-5">
                   <div className="d-flex justify-content-between align-items-center">
                   <h3>Subscription Timeline</h3>
                   <Link to={'/history/subscription'} className="anchor">Launchpad History</Link>
                   </div>
                   <ul className="time-line-ul">
                       <li>
                           <div className="tab-section">
                           <div className="icon-section icon-done">
                           <i class="fa-solid fa-check"></i>
                           </div>
                           <div className="stick">
                           </div>
                           </div>
                           <div className="text">
                           <span className="first">BNB Holding Calculation Period</span>
                           <span className="second">2022-01-12 05:00</span>
                           </div>
                       </li>
                       <li>
                           <div className="tab-section">
                           <div className="icon-section icon-done">
                           <i class="fa-solid fa-check"></i>
                           </div>
                           <div className="stick">
                           </div>
                           </div>
                           <div className="text">
                           <span className="first">Subscription Period</span>
                           <span className="second">2022-01-12 05:00</span>
                           </div>
                       </li>
                       <li>
                           <div className="tab-section">
                           <div className="icon-section icon-done">
                           <i class="fa-solid fa-check"></i>
                           </div>
                           <div className="stick">
                           </div>
                           </div>
                           <div className="text">
                           <span className="first">Calculation Period</span>
                           <span className="second">2022-01-12 05:00</span>
                           </div>
                       </li>
                       <li>
                           <div className="tab-section">
                           <div className="icon-section icon-note-done">
                           4
                           </div>
                           </div>
                           <div className="text">
                           <span className="first">Final Token Distribution</span>
                           <span className="second">2022-01-12 05:00</span>
                           <div className="custom-width">
                           <span>
                           The allocation calculation is complete. We will deduct the corresponding BNB from your account based on your final LOKA allocation, which will be transferred to your spot account along with your remaining BNB.
                           </span>
                           </div>
                           </div>
                       </li>
                   </ul>
               </div>
               <div className="dashboard-margin">
                   <h3>League of Kingdoms - A Blockchain MMO Strategy Game.</h3>
                   <Row>
                       <Col lg={9}>
                          <div className="text-breaker">
                          <h4>Project Introduction</h4>
                           <p>League of Kingdoms is a free-to-play, MMO war strategy game on the blockchain. The main gameplay of League of Kingdoms is similar to a traditional RTS (Real-time strategy), but it is powered by blockchain technology and ownership is central to the core concepts of the game. As an alliance-based tactical strategy game, players can build kingdoms, raise armies, form alliances, and compete on the battlefields. All the lands in the game are non-fungible tokens and can be owned by users.</p>
                            <p>Players do not require any prior experience or knowledge with cryptocurrencies to play the game and do not need to own Land NFTs to farm resources that can be tokenized into NFTs. With the adoption of the LOKA token, League of Kingdoms will be able to have greater player adoption, inclusion, and activation as players can effectively own, propose, vote and earn on the game platform.</p>
                            <p>
                            LOKA is League of Kingdoms' native governance token and some will be utilized for as the currency inside the League of Kingdoms game franchise and will be utilized for all in-game store purchases, such as purchasing special packages, skins, goods. The LOKA ($LOKA) token will be used as a NFT booster to create, upgrade, and acquire special NFT assets, including but not limited to upcoming Drago and Skin NFTs. The LOKA ($LOKA) token will be also used to propose and vote on on-chain governance proposals to determine future features, policies, content, and/or parameters of the platform. Last but not the least LOKA tokens can also be earned by playing the in-game competition and/or achieving special tasks — for example after each Continent vs. Continent (CvC) battle, winners will be rewarded with LOKA tokens (and potentially rarer NFT item rewards!) depending on the performance during the battle.
                            </p>
                          </div>
                          <div className="text-breaker">
                              <h4>Key Features and Highlights</h4>
                              <p>PvE adventures: Players can build kingdoms and train soldiers to fight monsters and enemy kingdoms in the game world.</p>
                              <p>
                              Alliance building: Players are strongly encouraged to join an alliance to get help, socialize, and share support with like-minded gamers around the globe. Only with unity and a strong bond can they excel in the competitions and challenges.
                              </p>
                              <p>
                              Competitive matches: Users will be able to engage in alliance versus alliance (PvP) matches to earn LOKA rewards. The CvC will be the first type of competition to offer LOKA bounty.
                              </p>
                              <p>
                              Vibrant NFT economy: League of Kingdoms has a unique game economy built around its iconic Land NFT. Gamers can own the Lands where they play the game and cultivate the Lands to earn rewards. On top of the Lands, gamers can farm various resources that they can tokenize into NFTs to trade.
                              </p>
                          </div>
                          <div className="text-breaker">
                          <h4>LOKA Token Sale and Economics</h4>
                                  <div className="token-sale-section">
                                  <div className="with-background">
                                      <span>Hard Cap</span>
                                  </div>
                                  <div className="with-background">
                                      <span>4000000 USD</span>
                                  </div>
                                  </div>
                                  <div className="token-sale-section">
                                  <div className="without-background">
                                      <span>Total Token Supply</span>
                                  </div>
                                  <div className="without-background">
                                      <span>500000000 LOKA</span>
                                  </div>
                                  </div>
                                  <div className="token-sale-section">
                                  <div className="with-background">
                                      <span>Initial Circulating Supply</span>
                                  </div>
                                  <div className="with-background">
                                      <span>10.14% of Total Token Supply</span>
                                  </div>
                                  </div>
                                  <div className="token-sale-section">
                                  <div className="without-background">
                                      <span>Public Sale Token Price</span>
                                  </div>
                                  <div className="without-background">
                                      <span>0.16 USD (price in BNB will be determined prior to the start of subscription)</span>
                                  </div>
                                  </div>
                                  <div className="token-sale-section">
                                  <div className="with-background">
                                      <span>Tokens Offered</span>
                                  </div>
                                  <div className="with-background">
                                      <span>25000000 LOKA</span>
                                  </div>
                                  </div>
                                  <div className="token-sale-section">
                                  <div className="without-background">
                                      <span>Hard Cap Per User</span>
                                  </div>
                                  <div className="without-background">
                                      <span>15000 USD (price in BNB will be determined prior to the start of subscription)</span>
                                  </div>
                                  </div>
                                  <div className="token-sale-section">
                                  <div className="with-background">
                                      <span>Token Sale Vesting Period</span>
                                  </div>
                                  <div className="with-background">
                                      <span>No lockup</span>
                                  </div>
                                  </div>
                                  <div className="token-sale-section">
                                  <div className="without-background">
                                      <span>Token Type</span>
                                  </div>
                                  <div className="without-background">
                                      <span>ERC20</span>
                                  </div>
                                  </div>
                                  <div className="token-sale-section">
                                  <div className="with-background">
                                      <span>Token Distribution</span>
                                  </div>
                                  <div className="with-background">
                                      <span>After the end of token sale</span>
                                  </div>
                                  </div>
                                  
                          </div>
                       </Col>
                       <Col lg={3}>
                           <div className="social-sticky">
                           <h4 className="mt-1">Social Channels</h4>
                           <ul className="social-ul-pad">
                               <li>
                                   <a href="#" target="_blank">
                                   <i class="fa-brands fa-telegram"></i>
                                       <span>https://t.me/LoK_global</span>
                                   </a>
                               </li>
                               <li>
                                   <a href="#" target="_blank">
                                   <i class="fa-brands fa-twitter"></i>
                                       <span>https://twitter.com/LeagueKing</span>
                                   </a>
                               </li>
                               <li>
                                   <a href="#" target="_blank">
                                   <i class="fa-brands fa-medium"></i>
                                       <span>https://medium.com/league-o</span>
                                   </a>
                               </li>
                           </ul>
                           </div>
                       </Col>
                   </Row>
               </div>
            </div>
            {props.footer}

        </>
    )

}
export default Subscription;