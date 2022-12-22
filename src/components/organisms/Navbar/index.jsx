import React, { useState } from "react"
import Alphadev from "../../../assets/img/alpha-dev.jpg"
import NavItems from "../../Constants/NavItems"
import { IconMenu, IconClose } from "../../../assets"

const Navbar = () => {
	const [toogle, setToogle] = useState(false)
	return (
		<>
			<header
				// x-data="{navbarOpen: false}"
				className="bg-white fixed z-50 w-full shadow-sm"
			>
				<div className="container mx-auto">
					<div className="relative px-4 flex items-center justify-between">
						<div className="w-60 sm:w-40 sm:mr-8 max-w-6xl flex">
							<img src={Alphadev} alt="logo" className="w-16" />
							<a
								href="/Home"
								className="w-full py-5 font-bold text-lg uppercase text-red-600"
							>
								AlphaDev
							</a>
						</div>
						<IconMenu
							onClick={() => setToogle((state) => !state)}
							className="h-6 w-6 text-gray-900 sm:hidden"
						/>
						<div className="hidden sm:flex w-full items-center justify-between px-4">
							<div>
								<ul className="block sm:flex">
									{NavItems.map((item, i) => (
										<li>
											<a
												key={i}
												href={item.href}
												className="text-dark active:text-red-600 hover:text-red-600 flex py-2 text-base font-medium sm:ml-5 sm:inline-flex"
											>
												{item.name}
											</a>
										</li>
									))}
									<li className="sm:hidden">
										<a
											href="/Login"
											className="text-dark active:text-red-600 hover:text-red-600 flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
										>
											Sign In
										</a>
									</li>
									<li className="sm:hidden">
										<a
											href="/Regist"
											className="text-dark active:text-red-600 hover:text-red-600 flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
										>
											Sign Up
										</a>
									</li>
								</ul>
							</div>
							<div className="hidden sm:flex items-center">
								<a
									href="/Login"
									type="button"
									className="sm:mx-5 lg:mx-10 cursor-pointer text-dark border-b-2 border-gray-600 hover:border-red-600 leading-7 px-1 hover:text-red-600 font-medium"
								>
									Sign in
								</a>
								<a
									href="/Regist"
									type="button"
									className="cursor-pointer rounded-full shadow-xl py-2 sm:px-5 md:px-8 bg-red-600 hover:bg-red-700 text-white font-medium"
								>
									Sign Up
								</a>
							</div>
						</div>
					</div>
				</div>
				{toogle && (
					<div className="sm:hidden fixed flex items-start justify-end z-50 inset-0">
						<div className="relative py-5 pr-5  pl-10 shadow-lg rounded-md bg-white w-3/6">
							<div className="flex justify-end">
								<IconClose
									onClick={() => setToogle((state) => !state)}
									className="h-6 w-6 text-gray-900 md:hidden"
								/>
							</div>
							<div className="">
								<ul className="block sm:hidden">
									{NavItems.map((item, i) => (
										<li>
											<a
												key={i}
												href={item.href}
												className="text-dark active:text-red-600 hover:text-red-600 flex py-2 text-base font-medium sm:ml-5 sm:inline-flex"
											>
												{item.name}
											</a>
										</li>
									))}
									<li className="sm:hidden">
										<a
											href="/Login"
											className="text-dark active:text-red-600 hover:text-red-600 flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
										>
											Sign In
										</a>
									</li>
									<li className="sm:hidden">
										<a
											href="/Regist"
											className="text-dark active:text-red-600 hover:text-red-600 flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
										>
											Sign Up
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				)}
			</header>
		</>
	)
}

export default Navbar
