import React from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';

const Nav = () => {
	return (
		<nav>
			<span class="appName"> ELC Hackathon </span>
			<i class="fas fa-hand-holding-heart fa-3x"></i>
			{navLinks.map(({ navLinkId, scrollToId, display}, idx) => (
				<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} display={display} />
			))}
		</nav>
	);
};

export default Nav;
