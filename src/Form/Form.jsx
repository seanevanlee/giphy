import { useState } from 'react';


export default function Form({ liftGiphyTitle}) {
	const [title, setTitle] = useState('')
	function handleChange(e){
		setTitle(e.target.value)
	}
	function handleSubmit(e){
		e.preventDefault()
		liftGiphyTitle(title)
	}
	return (
	<form onSubmit={handleSubmit}>
		<label>Your GIF:</label>
		<input type="text" name="title" placeholder="GIF PARTY!"
		onChange={handleChange}
		value={title}
		/>
		<button type="submit">Show me a GIF!</button>
		</form>
	);
}

