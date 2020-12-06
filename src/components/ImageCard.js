import React from "react"

export default function ImageCard(props) {
	const { image } = props
	const tags = image.tags.split(",")

	return (
		<div className="max-w-sm rounded mx-auto  bg-white overflow-hidden shadow-lg">
			<img src={image.webformatURL} className="w-full" alt="Loading..." />
			<div className="px-6 py-4">
				<div className="flex justify-between mb-2">
					<div className="font-semibold text-green-500 text-lg">
						Photo by {image.user}
					</div>
					<div>
						<span className="">
							<a href={image.pageURL} download>
								<svg
									className="w-5 h-5 text-blue-600"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
									/>
								</svg>
							</a>
						</span>
					</div>
				</div>
				<ul>
					<li className="flex">
						<svg
							className="w-4 h-5 mr-1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
							<path
								fillRule="evenodd"
								d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
								clipRule="evenodd"
							/>
						</svg>
						<strong>Views: </strong>
						{image.views}
					</li>
					<li className="flex">
						<svg
							className="w-4 h-5 mr-1 text-black"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
							/>
						</svg>
						<strong>Downloads: </strong>
						{image.downloads}
					</li>
					<li className="flex">
						<svg
							className="w-4 h-5 mr-1 text-red-600"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
								clipRule="evenodd"
							/>
						</svg>
						<strong>Likes: </strong>
						{image.likes}
					</li>
				</ul>
			</div>
			<div className="px-6 py-4 sm:flex-cols flex-grow-1">
				{tags.map((tag, index) => (
					<span
						key={index}
						className="inline-block italic bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mt-1 mb-1"
					>
						#{tag}
					</span>
				))}
			</div>
		</div>
	)
}
