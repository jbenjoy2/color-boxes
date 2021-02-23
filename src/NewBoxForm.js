import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ add }) => {
	const INITIAL_STATE = {
		height          : '',
		width           : '',
		backgroundColor : ''
	};

	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name] : value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		add({ ...formData, id: uuid() });
		setFormData(INITIAL_STATE);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="width">Box Width</label>
				<input
					id="width"
					type="text"
					name="width"
					placeholder="Width"
					value={formData.width}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor="height">Box height</label>
				<input
					id="height"
					type="text"
					name="height"
					placeholder="height"
					value={formData.height}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor="backgroundColor">Box color</label>
				<input
					id="backgroundColor"
					type="text"
					name="backgroundColor"
					placeholder="color"
					value={formData.backgroundColor}
					onChange={handleChange}
				/>
			</div>
			<button>Add box!</button>
		</form>
	);
};

export default NewBoxForm;
