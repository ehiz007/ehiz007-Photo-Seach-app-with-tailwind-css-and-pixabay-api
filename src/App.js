import axios from "axios"
import React, { useState, useEffect, Fragment } from "react"
import ImageCard from "./components/ImageCard"
import SearchBar from "./components/SearchBar"
import NavBar from "./components/NavBar"
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
		<div>
			<div className="container  mx-auto ">
				{isLoading ? (
					<div>
						<h1 className="text-6xl text-center mx-auto mt-32 animate-pulse">
							Loading.....
						</h1>
					</div>
				) : (
					<Fragment>
						<NavBar />
						<SearchBar setTerm={(text) => setTerm(text)} />
						{!isLoading && images.length === 0 && (
							<h1 className="text-5xl text-center mx-auto mt-32 animate-bounce">
								Search word does not exists
							</h1>
						)}
						<div className="grid md:flex:row md:grid-cols-3 gap-4 px-6 mx-auto">
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
