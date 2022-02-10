function MobileHeader(){

      
  function openNav() {

    document.getElementById("mySidenav").style.width = "100%";

  }

  function closeNav() {
      
      document.getElementById("mySidenav").style.width = "0";

 }

    return(

        <>

    <div className="mobile-header">
        <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onClick={(e)=>closeNav()}>&times;</a>

        <ul class="menu-list">

            <li>
                <a href="#" class="menu-link">Products</a>
            </li>

            <li>

                <a href="#" class="menu-link">Market</a>

            </li>

            <li>

                <a href="#" class="menu-link">Earn</a>

            </li>

            <li>

                <a href="#" class="menu-link">Company</a>

            </li>




        </ul>


        </div>

    <div class="open-btn">

        <div>

            <img width="50" src={require("../assets/images/logo.png").default}/>

        </div>

        <span onClick={(e)=>openNav()} id="open-btn-hide">
            <i class="fa fa-bars"></i>
        </span>

    </div>
   </div>

        </>

    )

}

export default MobileHeader;