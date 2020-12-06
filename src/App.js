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
							<div className="text-center px-6 max-w-sm md:flex-row mx-auto mt-32">
								<svg
									className="mx-auto animate-bounce"
									width="96"
									height="96"
									fill="none"
								>
									<path
										d="M36 28.024A18.05 18.05 0 0025.022 39M59.999 28.024A18.05 18.05 0 0170.975 39"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
									<ellipse
										cx="37.5"
										cy="43.5"
										rx="4.5"
										ry="7.5"
										fill="currentColor"
									></ellipse>
									<ellipse
										cx="58.5"
										cy="43.5"
										rx="4.5"
										ry="7.5"
										fill="currentColor"
									></ellipse>
									<path
										d="M24.673 75.42a9.003 9.003 0 008.879 5.563m-8.88-5.562A8.973 8.973 0 0124 72c0-7.97 9-18 9-18s9 10.03 9 18a9 9 0 01-8.448 8.983m-8.88-5.562C16.919 68.817 12 58.983 12 48c0-19.882 16.118-36 36-36s36 16.118 36 36-16.118 36-36 36a35.877 35.877 0 01-14.448-3.017"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
									<path
										d="M41.997 71.75A14.94 14.94 0 0148 70.5c2.399 0 4.658.56 6.661 1.556a3 3 0 003.999-4.066 12 12 0 00-10.662-6.49 11.955 11.955 0 00-7.974 3.032c1.11 2.37 1.917 4.876 1.972 7.217z"
										fill="currentColor"
									></path>
								</svg>
								<p className="text-3xl md:text-5xl leading-5 ">
									Search word not found
								</p>
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
