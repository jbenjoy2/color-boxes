import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';
const BoxList = () => {
	const [ boxes, setBoxes ] = useState([]);

	const addBox = (box) => setBoxes((boxes) => [ ...boxes, box ]);

	const removeBox = (id) => setBoxes((boxes) => boxes.filter((box) => box.id !== id));

	return (
		<div>
			<div className="BoxList-form">
				<h2>Pretty Boxes!</h2>
				<NewBoxForm add={addBox} />
			</div>
			<hr />
			<div className="BoxList">
				{boxes.map(({ id, width, height, backgroundColor }) => (
					<Box
						id={id}
						key={id}
						width={width}
						height={height}
						backgroundColor={backgroundColor}
						remove={removeBox}
					/>
				))}
			</div>
		</div>
	);
};

export default BoxList;
