import React from "react"
import ProductItems from "../../Constants/ProductItems"

const PricingProduct = (props) => {
	return (
		<>
			<section id="Product" className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[80px] lg:pb-[90px]">
				<div className="container mx-auto">
					<div className="mx-4 flex flex-wrap">
						<div className="w-full px-4">
							<div className="mx-auto mt-10 mb-[60px] max-w-[510px] text-center lg:mb-20">
								<h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
									Our Product
								</h2>
								<p className="text-body-color text-base">
									There are many variations of passages of Lorem Ipsum available
									but the majority have suffered alteration in some form.
								</p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
						<ProductItems/>
					</div>
				</div>
			</section>
		</>
	)
}

export default PricingProduct
