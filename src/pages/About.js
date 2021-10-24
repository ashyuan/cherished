import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import aboutSenior from '../pics/about.jpg'

const About = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const aboutRef = useNav('About');

	return (
		<section ref={aboutRef} id='aboutContainer'>
			<img
				src={aboutSenior}
				className="aboutSeniorIcon"
				alt='four seniors with their caregivers'
			/>
			<div>
				<h3><i class="far fa-question-circle"></i> About Alzheimer's Disease </h3>
				<p className="aboutParagraph">
					Alzheimer's is the most common cause of dementia [1], which results in gradual
					memory loss and other cognitive impairment, disrupting one's daily life activities.
				</p>
				<br />
				<p className="aboutParagraph"> 
					Recent studies have shown it being the top 10 leading cause of death in the United States [2].
					Particularly in the early stages of the illness, people with Alzheimer's are at high risk of suffering from
					depression, and the frustration and hopelessness only worsens as recalling people and events becomes more and more difficult.
				</p>
				<br />
				<p className="aboutParagraph"> 
					Over 75% of those with dementia require extensive care, which leads to immense stress on caregivers. Many studies have found [3] that caregivers
					of those with dementia have the highest levels of burden than all other caregivers.
				</p>
			</div>
		</section>
	);
};

export default About;
