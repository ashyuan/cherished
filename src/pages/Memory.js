import React, { Component } from 'react';
import { useNav } from '../customHooks/useNav';
import UploadWidget from "./memory-components/UploadWidget"
import './Page.css';


const Memory = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	/* Nav */
	const memoryRef = useNav('Memory');

	return (
		<section ref={memoryRef} id='memoryContainer'>
			{/* <img
				src='https://source.unsplash.com/random/600x600/?nature,water'
				alt='unsplash-img'
			/> */}
			<div>
				<h3>MEMORY</h3>
				<p>This is the memory section</p>
				<div className="upload-widget"> <UploadWidget /> </div>
			</div>
		</section>
	);
};


export default Memory;