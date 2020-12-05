import axios from "axios"
import React, { useState, useEffect, Fragment } from "react"
import ImageCard from "./components/ImageCard"
import SearchBar from "./components/SearchBar"

export default function App() {
	const [images, setImages] = useState([])
	const [isLoading, setIsloading] = useState(true)
	const [term, setTerm] = useState("")

	useEffect(() => {
		axios
			.get(
				`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo`,
			)
			.then((res) => {
				setImages(res.data.hits)
				setIsloading(false)
			})
			.catch((err) => console.log(err))
	}, [term])
	return (
		<div className="bg-gray-100">
			<div class="flex-none pl-4 sm:pl-6 xl:pl-8 flex items-center  lg:border-b-0 lg:w-60 xl:w-72">
				<a class="overflow-hidden w-10 md:w-auto" href="/">
					ye
				</a>
				<img src="./assets/vector.png" alt="" />
			</div>
			<div className="container mx-auto flex-grow-0 ">
				{isLoading ? (
					<div>
						<h1 className="text-6xl text-center mx-auto mt-32 animate-pulse">
							Loading.....
						</h1>
					</div>
				) : (
					<Fragment>
						<SearchBar setTerm={(text) => setTerm(text)} />
						{!isLoading && images.length === 0 && (
							<h1 className="text-5xl text-center mx-auto mt-32 animate-bounce">
								Search word does not exists
							</h1>
						)}
						<div className="grid grid-cols-3 gap-4">
							{images.map((image, index) => (
								<ImageCard key={index} image={image} />
							))}
						</div>
					</Fragment>
				)}
			</div>
		</div>
	)
}
