import React, { useState } from "react"

export default function SearchBar(props) {
	const [text, setText] = useState("")
	const onSubmit = (e) => {
		e.preventDefault()
		props.setTerm(text)
		e.target.value = ""
	}

	return (
		<div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
			<form className="w-full max-w-sm" onSubmit={onSubmit}>
				<div className="flex items-center border-b border-green-500 py-2">
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						className="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
						placeholder="Search image"
					/>
					<button
						className="flex-shrink-1 hover:bg-green-400 rounded border-green-400 text-sm border-2 px-2 py-1"
						type="submit"
					>
						Search
					</button>
				</div>
			</form>
		</div>
	)
}
