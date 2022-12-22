import React from "react"

const Hero = () => {
	return (
		<>
			{/* <!-- ====== Hero Section Start --> */}
			<div id="Home" className="relative bg-white pt-[120px] pb-[50px] lg:pt-[120px]">
				<div className="container mx-auto">
					<div className="mx-4 flex flex-wrap">
						<div className="w-full px-4 lg:w-3/6">
							<div className="hero-content">
								<h1 className="text-dark mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[52px]">
									Create <br />
									Startup Website <br />
									with <span className="text-red-600">AlphaDev.</span>
								</h1>
								<p className="text-body-color mb-8 max-w-[480px] text-base">
									With <span className="text-red-600 font-bold">AlphaDev</span>,
									business and students thrive together. Business can perfectly
									match their staffing to changing demand throughout the dayed.
								</p>
								<div className="clients pt-16">
									<h6 className="text-body-color mb-2 flex items-center text-xs font-normal">
										Some Of Our Clients
										<span className="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
									</h6>
									<div className="flex items-center">
										<div className="mr-4 w-full py-3">
											<img
												src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
												alt="ayroui"
											/>
										</div>
										<div className="mr-4 w-full py-3">
											<img
												src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
												alt="graygrids"
											/>
										</div>
										<div className="mr-4 w-full py-3">
											<img
												src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
												alt="uideck"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="hidden lg:flex px-4 w-full lg:w-3/6">
							<div className="lg:ml-auto lg:text-center">
								<div className="relative z-10 inline-block pt-11 lg:pt-0">
									<img
										src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-01.png"
										alt="hero"
										className="max-w-md lg:ml-auto"
									/>
									<span className="absolute -left-8 -bottom-8 z-[-1]">
										<svg
											width="93"
											height="93"
											viewBox="0 0 93 93"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="2.5" cy="2.5" r="2.5" fill="red" />
											<circle cx="2.5" cy="24.5" r="2.5" fill="red" />
											<circle cx="2.5" cy="46.5" r="2.5" fill="red" />
											<circle cx="2.5" cy="68.5" r="2.5" fill="red" />
											<circle cx="2.5" cy="90.5" r="2.5" fill="red" />
											<circle cx="24.5" cy="2.5" r="2.5" fill="red" />
											<circle cx="24.5" cy="24.5" r="2.5" fill="red" />
											<circle cx="24.5" cy="46.5" r="2.5" fill="red" />
											<circle cx="24.5" cy="68.5" r="2.5" fill="red" />
											<circle cx="24.5" cy="90.5" r="2.5" fill="red" />
											<circle cx="46.5" cy="2.5" r="2.5" fill="red" />
											<circle cx="46.5" cy="24.5" r="2.5" fill="red" />
											<circle cx="46.5" cy="46.5" r="2.5" fill="red" />
											<circle cx="46.5" cy="68.5" r="2.5" fill="red" />
											<circle cx="46.5" cy="90.5" r="2.5" fill="red" />
											<circle cx="68.5" cy="2.5" r="2.5" fill="red" />
											<circle cx="68.5" cy="24.5" r="2.5" fill="red" />
											<circle cx="68.5" cy="46.5" r="2.5" fill="red" />
											<circle cx="68.5" cy="68.5" r="2.5" fill="red" />
											<circle cx="68.5" cy="90.5" r="2.5" fill="red" />
											<circle cx="90.5" cy="2.5" r="2.5" fill="red" />
											<circle cx="90.5" cy="24.5" r="2.5" fill="red" />
											<circle cx="90.5" cy="46.5" r="2.5" fill="red" />
											<circle cx="90.5" cy="68.5" r="2.5" fill="red" />
											<circle cx="90.5" cy="90.5" r="2.5" fill="red" />
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
