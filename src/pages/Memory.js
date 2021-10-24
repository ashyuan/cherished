import React, { Component } from 'react';
import { useNav } from '../customHooks/useNav';
import UploadWidget from "./memory-components/UploadWidget"
import DisplayImages from "./memory-components/DisplayImages"
import './Page.css';


const Memory = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	/* Nav */
	const memoryRef = useNav('Memory');

	return (
		<section ref={memoryRef} id='memoryContainer' className="memory-section">
			<div className="memory-container">
				<h3>MEMORIES</h3>
				<div className="upload-container"> 
					<p>Upload your memories</p>
					<div className="upload-widget"> <UploadWidget /> </div>
					<div className="display"> <DisplayImages /> </div>
				</div>
			</div>
		</section>
	);
};


export default Memory;



