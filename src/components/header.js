import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import logo from '../images/logofinal.png';
import {Link} from 'react-router-dom'


function Header() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div className='headerContainer' style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <main>
           <button onClick={() => collapseSidebar()}>Explore</button>
        </main>
        <Menu>
          <MenuItem component={<Link to='/' />}> Home</MenuItem>
          <SubMenu label="About Us">
             <MenuItem component={<Link to='/company' />} > Company Profile </MenuItem>
             <MenuItem component={<Link to='/team' />} > The Team </MenuItem>
          </SubMenu>
          <MenuItem component={<Link to='/projects' />} > Projects</MenuItem>
          <MenuItem component={<Link to='/contact' />}> Contact Us</MenuItem>

        </Menu>
        
      </Sidebar>
      
        <h1 className='companyName'>Homes & Homes</h1>
        <img className='logo' src={logo} alt='company logo'/>
      
    
    </div>
  );
}
export default Header;


// import {NavLink} from 'react-router-dom';
// import logo from '../images/logofinal.png';
// import Navbar from 'react'


// function Header(){
//     return (
         
//         // <header>
//         //     <img src={logo} alt='company logo'/>
//         //     <nav>
//         //         <NavLink to='/'>Home</NavLink>
//         //         <NavLink to='/company'>Company Profile</NavLink>
//         //         <NavLink to='/team'>Team</NavLink>
//         //         <NavLink to='/project'>projects</NavLink>
//         //         <NavLink to='/news'>News</NavLink>
//         //         <NavLink to='/contact'>Contact</NavLink>

//         //     </nav>
          
//         // </header>
//     )
// }

// export default Header;