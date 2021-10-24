import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Reference = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const referenceRef = useNav('Reference');

	return (
		<section ref={referenceRef} id='referenceContainer'>
			<div>
				<h3>Reference <i class="fas fa-bookmark"></i></h3>
				<p className="referenceParagraph">
					Citations <br />
					<a href="https://www.statista.com/statistics/248622/rates-of-leading-causes-of-death-in-the-us/">
					[1] Top 10 leading cause of death in the US</a>
					<br />
					<a href="https://www.psychiatry.org/patients-families/alzheimers/what-is-alzheimers-disease">
					[2] What is Alzheimer's Disease (Mental health of patients)</a>
					<br />
					<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1745-7599.2008.00342.x">
					[3] Caregiver burden among dementia patient caregivers: a review of the literature</a>
					<br/>
					<br/>
					Graphics <br />
					<a href='https://www.freepik.com/vectors/people'>People vector created by freepik - www.freepik.com</a>
					<br />
					<a href='https://www.freepik.com/vectors/music'>Senior music vector created by pch.vector - www.freepik.com</a>
		
				</p>
			</div>
		</section>
	);
};

export default Reference;