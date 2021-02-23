import React from 'react';
import './Box.css';

const Box = ({ id, backgroundColor = 'green', width = 3, height = 3, remove }) => {
	return (
		<div className="Box">
			<div style={{ height: `${height}em`, width: `${width}em`, backgroundColor }} />
			<button onClick={() => remove(id)} className="Box-btn">
				Delete
			</button>
		</div>
	);
};

export default Box;
