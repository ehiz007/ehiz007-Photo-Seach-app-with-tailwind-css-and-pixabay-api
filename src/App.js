import axios from "axios"
import React, { useState, useEffect, Fragment as div } from "react"
import ImageCard from "./components/ImageCard"
import SearchBar from "./components/SearchBar"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

export default function App() {
	const [images, setImages] = useState([])
	const [isLoading, setIsloading] = useState(true)
	const [term, setTerm] = useState("")
	const [loadingImages, setLoadingImages] = useState(true)

	useEffect(() => {
		axios
			.get(
				`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo`,
			)
			.then((res) => {
				setImages(res.data.hits)
				setIsloading(false)
				setLoadingImages(false)
			})
			.catch((err) => console.log(err))
	}, [term])
	return (
		<div>
			{isLoading ? (
				<div className="container  mx-auto ">
					<h1 className="text-6xl text-center mx-auto mt-32 animate-pulse">
						Loading.....
					</h1>
				</div>
			) : (
				<div className="min-h-screen flex flex-col">
					<div className="container flex-grow mx-auto ">
						<NavBar />
						<SearchBar
							isLoading={isLoading}
							setImages={() => setImages([])}
							setTerm={(text) => setTerm(text)}
							setLoadingImages={() => setLoadingImages(true)}
						/>
						{!isLoading && !loadingImages && images.length === 0 && (
							<div className="flex justify-center max-w-sm md:flex-row mx-auto mt-32">
								<h1 className="text-3xl md:text-5xl text-center">
									Search word does not exists
								</h1>
								<svg
									className="h-20 md:h-40 md:w-40 w-20 animate-bounce"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
						)}
						{loadingImages ? (
							<div className="flex sm:flex-cols md:flex-row justify-center mx-auto mt-20 ">
								<h1 className="text-2xl md:text-4xl text-center font-bold">
									loading pictures
								</h1>
								<svg
									className="animate-spin w-12 h-12"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						) : (
							<div className="grid md:flex:row md:grid-cols-3 gap-4 px-6 mx-auto">
								{images.map((image, index) => (
									<ImageCard key={index} image={image} />
								))}
							</div>
						)}
					</div>
					<Footer />
				</div>
			)}
		</div>
	)
}
