import { useState } from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faList, faHouse, faBuilding, faScrewdriverWrench, faBriefcase, faEnvelopesBulk, faPeopleGroup, faSleigh} from '@fortawesome/free-solid-svg-icons'

function Sidebarmain() {
  const { collapseSidebar} = useProSidebar();
  // const [isCollapse, setIsCollapse] = useState(!collapseSidebar)
     
  // const handleClick = () => {
  //   if(isCollapse){
  //     setIsCollapse(false);
  //   } else {
  //     setIsCollapse(true);
  //   }
  // }
 

  return (
    <div className='headerContainer' style={{ display: 'flex', height: '100%' }}>
      <Sidebar className='sidebar'>
        <main>
           <FontAwesomeIcon className='menuIcon' onClick={()=> collapseSidebar()} icon={faList} size='3x' />
        </main>
        <Menu>
          <MenuItem component={<Link to='/' />}> <FontAwesomeIcon icon={faHouse} size='2x' /> Home</MenuItem>
          <SubMenu icon={<FontAwesomeIcon icon={faBuilding} size='2x' />} label="About Us">
             <MenuItem component={<Link to='/company' />} > <FontAwesomeIcon icon={faBuilding} size='2x' /> Company Profile </MenuItem>
             <MenuItem component={<Link to='/team' />} > <FontAwesomeIcon icon={faPeopleGroup} size='2x' /> The Team </MenuItem>
          </SubMenu>
          <MenuItem component={<Link to='/services' />} > <FontAwesomeIcon icon={faScrewdriverWrench} size='2x' /> Services</MenuItem>
          <MenuItem component={<Link to='/projects' />} > <FontAwesomeIcon icon={faBriefcase} size='2x' /> Projects</MenuItem>
          <MenuItem component={<Link to='/contact' />}> <FontAwesomeIcon icon={faEnvelopesBulk} size='2x' /> Contact Us</MenuItem>

        </Menu>
        
      </Sidebar>
    
    </div>
  );
}
export default Sidebarmain;


