import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Task = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const taskRef = useNav('Task');

	return (
		<section ref={taskRef} id='taskContainer'>
			<img
				src='https://source.unsplash.com/random/600x600/?nature,water'
				alt='unsplash-img'
			/>
			<div>
				<h3>TASK</h3>
				<p>This is the task section</p>
			</div>
		</section>
	);
};

export default Task;
