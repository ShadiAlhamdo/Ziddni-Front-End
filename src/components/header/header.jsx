import { useState } from "react";

import HeaderLeft from "./HeaderLeft";
import Navbar from "./Navbar";
import HeaderRight from "./HeaderRight";
const Header = () => {
    const [toggel,setToggel]=useState(true);



    return ( 
        <header className="header">
            <HeaderLeft toggel={toggel} setToggel={setToggel}/>
            <Navbar toggel={toggel} setToggel={setToggel}/>
            <HeaderRight/>
        </header>
     );
}
 
export default Header;