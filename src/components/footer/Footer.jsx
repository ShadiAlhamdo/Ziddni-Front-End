
import {Link} from "react-router-dom";

const Footer = () => {
    return ( 
        <footer>
            <p className="footer-text">
                This website Codded & Designed By <span>Shadi Alhamdo</span>
            </p>
            <ul className="links">
                <li className="link">
                    <Link  to='https://www.facebook.com/share/1Tu1X7X8Sf/'><img src="/icons/facebook-logo.png" alt="" /></Link>
                </li>
                <li className="link">
                    <Link  to='https://wa.me/qr/MMILXYAFF7LFE1'><img src="/icons/whatsapp.png" alt="" /></Link>
                </li>
                <li className="link">
                    <Link  to='https://github.com/ShadiAlhamdo'><img src="/icons/github-logo.png" alt="" /></Link>
                </li>
                <li className="link">
                    <Link to='https://www.instagram.com/shadi_alhamdo?igsh=NTdvZXpkeWRuN3N2'><img src="/icons/instagram.png" alt="" /></Link>
                </li>
            </ul>
        </footer>
     );
}
 
export default Footer;