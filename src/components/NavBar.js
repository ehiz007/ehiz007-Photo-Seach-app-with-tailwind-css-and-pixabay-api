import React from "react"

function NavBar() {
	return (
		<nav className="mt-3 ">
			<div class="flex-none pl-4 sm:pl-6 xl:pl-8 flex items-center lg:border-b-0 lg:w-60 xl:w-72 transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
				<img
					className="w-auto bg-green-400 mr-2 h-14 "
					src="https://raw.githubusercontent.com/ehiz007/ehiz007-Photo-Seach-app-with-tailwind-css-and-pixabay-api/e9bfecd80d9b94ee3f3544e209cd4a48ec65a89e/public/vector.svg"
					alt="loading"
				/>
				<a href="/">
					<span className="text-xl font-bold font-serif text-overflow-truncate">
						Photo Search App
					</span>
				</a>
			</div>
		</nav>
	)
}

export default NavBar
