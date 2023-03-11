import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <footer>
            <div>
               <a className='footericon' href='mailto:ify.frontend@gmail.com?'><FontAwesomeIcon size='2x' icon={faEnvelope} /></a>
               <a className='footericon' href='#'><FontAwesomeIcon size='2x' icon={faInstagram} /></a>

                
            </div>
            <p>Address: 123 Ikoyi-Lekki Express Way, Ikoyi, Lagos, Nigeria</p>
            <a className='builder' target="_blank" href="https://ify-jas.github.io/my_react_portfolio/">© An Ifeoma Ezeoke Company</a>
        </footer>
    )
}
export default Footer;