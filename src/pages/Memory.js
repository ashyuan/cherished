import React, { Component } from 'react';
import { useNav } from '../customHooks/useNav';
import UploadWidget from "./memory-components/UploadWidget"
import DisplayImages from "./memory-components/DisplayImages"
import './Page.css';
import memories from '../pics/memories.jpg'


const Memory = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	/* Nav */
	const memoryRef = useNav('Memory');

	return (
		<section ref={memoryRef} id='memoryContainer' className="memory-section">
			<img src= {memories} alt='a photo wall with pictures of different family members' />
			<div className="memory-container">
				<h3>Memories and People <i class="fas fa-camera-retro"></i> </h3>
				<div className="upload-container"> 
					<p>Upload your memories and those you cherish: </p>
					<div className="upload-widget"> <UploadWidget /> </div>
					
				    <div className="row"> <DisplayImages /> 
						
					</div>
				</div>
			</div>
		</section>
	);
};


export default Memory;



