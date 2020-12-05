import React from "react"

export default function ImageCard(props) {
	const { image } = props
	const tags = image.tags.split(",")
	return (
		<div className="max-w-sm rounded bg-white overflow-hidden shadow-lg">
			<img src={image.webformatURL} className="w-full" alt="Loading..." />
			<div className="px-6 py-4">
				<div className="font-bold text-green-500 text-xl mb-2">
					Photo by {image.user}
				</div>
				<ul>
					<li>
						<strong>Views: </strong>
						{image.views}
					</li>
					<li>
						<strong>Downloads: </strong>
						{image.downloads}
					</li>
					<li>
						<strong>Likes: </strong>
						{image.likes}
					</li>
				</ul>
			</div>
			<div className="px-6 py-4">
				{tags.map((tag, index) => (
					<span
						key={index}
						className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mt-1 mb-2"
					>
						#{tag}
					</span>
				))}
			</div>
		</div>
	)
}
