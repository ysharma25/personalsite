import React from 'React';
import './style.css';


const SideNav = (props) => {
return (
    <div className="navbar">
        <a href=”#section”>About</a>
        <a href=”#section”>Experience</a>
        <a href=”#section”>Project</a>
    </div>
 );
};

export default SideNav;

// import React from 'react';
// import {
// Nav,
// NavLink,
// Bars,
// NavMenu,
// NavBtn,
// NavBtnLink,
// } from './NavbarElements';

// const Navbar = () => {
// return (
// 	<>
// 	<Nav>
// 		<Bars />

// 		<NavMenu>
// 		<NavLink to='/about' activeStyle>
// 			About
// 		</NavLink>
// 		<NavLink to='/events' activeStyle>
// 			Experiences
// 		</NavLink>
// 		<NavLink to='/annual' activeStyle>
// 			Projects
// 		</NavLink>
// 		<NavLink to='/team' activeStyle>
// 			Resume
// 		</NavLink>
		
		
// 		</NavMenu>
// 		<NavBtn>
// 		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
// 		</NavBtn>
// 	</Nav>
// 	</>
// );
// };

// export default Navbar;
