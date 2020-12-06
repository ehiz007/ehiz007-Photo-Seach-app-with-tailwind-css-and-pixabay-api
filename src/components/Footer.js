import React from "react"

function Footer() {
	return (
		<footer className="relative w-full border mt-10 border-t border-gray-200 bg-gray-50  py-4 md:py-10 px-4 sm:px-6 lg:px-12 text-md leading-6">
			<div className="max-w-container mx-auto font-bold text-center space-y-4 md:space-y-0 md:flex md:justify-center">
				<h1 className="text-gray mr-4">&copy; 2020 Copyright Photo App.</h1>
				<h1 className="mt-2">
					Designed by :
					<a
						href="https://twitter.com/Ehiz_briel"
						className="font-medium text-gray-900 hover:text-gray-500 transition-colors duration-150"
					>
						<span> @Ehiz_briel</span>
					</a>
				</h1>
			</div>
		</footer>
	)
}

export default Footer
