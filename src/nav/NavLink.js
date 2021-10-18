import React, { useContext } from 'react';
import { NavContext } from '../context/NavContext';

const NavLink = ({ navLinkId, scrollToId, display}) => {
	const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

	const handleClick = () => {
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<span
			id={navLinkId}
			className={activeNavLinkId === navLinkId ? 'activeClass' : ''}
			onClick={handleClick}
		>
			{display}
		</span>
	);
};

export default NavLink;
