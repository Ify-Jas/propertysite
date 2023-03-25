import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faTwitter} from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <footer>
            <div>
               <a className='footericon' href='https://ify-jas.github.io/my_react_portfolio/'><FontAwesomeIcon size='2x' icon={faTwitter} /></a>
               <a className='footericon' href='https://ify-jas.github.io/my_react_portfolio/'><FontAwesomeIcon size='2x' icon={faInstagram} /></a>

                
            </div>
            <p>Address: 123 Ikoyi-Lekki Express Way, Ikoyi, Lagos, Nigeria</p>
            <a rel="noreferrer" className='builder' target="_blank" href="https://ify-jas.github.io/my_react_portfolio/">© An Ifeoma Ezeoke Company</a>
        </footer>
    )
}
export default Footer;