const HeaderLeft = ({toggel,setToggel}) => {
    return ( 
        <div className="header-left">
                <div className="header-logo">
                    <img  className="bi bi-logo" src="/Images/logo.png" alt="" />
                    <strong>Ziddni</strong>
                </div>
                <div onClick={()=>setToggel(prev=> !prev)} className="header-menu">
                    {toggel ? <img  src="/icons/cancel.png" alt="" />:<img  src="/icons/menu.png" alt="" />}
                </div>
            </div>
     );
}
 
export default HeaderLeft;
