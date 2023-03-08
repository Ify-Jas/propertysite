import {Navlink} from 'react-router-dom';


function Header(){
    return (
        <header>
            <Navlink to='/'>Home</Navlink>
            <Navlink to='/company'>Company Profile</Navlink>
            <Navlink to='/team'>Team</Navlink>
            <Navlink to='/project'>projects</Navlink>
            <Navlink to='/news'>News</Navlink>
            <Navlink to='/contact'>Contact</Navlink>
        </header>
    )
}

export default Header;