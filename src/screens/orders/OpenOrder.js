import { useEffect, useState } from "react";
import {Form, Row,Col,Table} from "react-bootstrap";
import { Link } from "react-router-dom";


function OpenOrder(props){

   
    // sidebar.addEventListener("click", function() { 
       
    // });
    // useEffect((e)=>{
    //     var myMovie = document.getElementsByClassName("order-head-mobile")[0];
    //     myMovie.addEventListener('click', function (event) {
    //     var sidebar = document.getElementsByClassName("mobile-left-side-bar")[0];
    //         document.getElementsByClassName("dashboard-main")[0].classList.add("overlay")
    //         sidebar.classList.remove("close-order-sidebar")
    //         sidebar.classList.add("show-order-sidebar")
    //     });
      
        
    // },[])
    // useEffect((e)=>{
    //         var overlay = document.getElementsByClassName("overlay")[0];
    //         overlay.addEventListener('click', function (event) {
    //             var sidebar = document.getElementsByClassName("mobile-left-side-bar")[0];
    //             document.getElementsByClassName("dashboard-main")[0].classList.remove("overlay")
    //             sidebar.classList.remove("show-order-sidebar")
    //             sidebar.classList.add("close-order-sidebar")
    //         });
          
    // })
    return(

        <>
        
            {props.header}



           

            <div className="dashboard-section order-body-width">

                {props.sidebar}

                <div className="dashboard-main">

                <div className="normal-box big-bg order-head-mobile" >
                    <div>
                    <span>Spot</span>
                    <h3>Open Orders</h3>
                    </div>
                    <i class="fa-solid fa-angle-right open-order-sidebar"></i>
                </div>
                <div className="dashboard-margin">
                    <div className="order-btn-flex-resp">
                    <button className="custom-btn primary-btn">All</button>
                    <button className="custom-btn secondary-btn">Limit Order</button>
                    <button className="custom-btn secondary-btn">Stop-Limit Order</button>
                    <button className="custom-btn secondary-btn">Limit-Maker</button>
                    </div>
                </div>
                <div className="mt-3 table-responsive">
                <Table>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Pair</th>
                            <th>Type</th>
                            <th>Side</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Filled</th>
                            <th>Total</th>
                            <th>Trigger Conditions</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>2022-1-1 12:12:12</td>
                            <td>LUNA/USDT</td>
                            <td>Limit</td>
                            <td><span className="text-red">Sell</span></td>
                            <td>84.15</td>
                            <td>0.99</td>
                            <td></td>
                            <td>84.15 USDT</td>
                            <td>----------</td>
                        </tr>
              
                        </tbody>
                    </Table>
                </div>
                </div>
             
            
            </div>

          

        </>

    )

}

export default OpenOrder