import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import logo from '../pics/girl-icon.jpg'

const Home = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const homeRef = useNav('Home');

	return (
		<section ref={homeRef} id='homeContainer'>
			<img src= {logo} alt='a girl smiling' />
			<div>
				<h3>Your virtual caregiver <i class="far fa-heart"></i></h3>
				<p className="homeIntro">
					Sometimes we forget what things we need to do,
					and the important people and moments around us. But don't worry.
					Cherished can help, and let's walk through our daily lives together!
				</p>
			</div>
		</section>
	);
};

export default Home;
