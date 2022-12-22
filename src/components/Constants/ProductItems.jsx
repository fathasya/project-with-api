import { useEffect, useState } from "react"
// import Card from "../molecules/Card"

const ProductItems = (props) => {
	const url = "https://fakestoreapi.com/products"
	const [products, setProducts] = useState([])

	const getDataProduct = async () => {
		const response = await fetch(url)
		const dataProduct = await response.json()
		setProducts(dataProduct)
	}

	useEffect(() => {
		getDataProduct()
	})

	return (
		<>
			{products.map((produk) => {
				return (
					<Card
						key={produk.id}
						title={produk.title}
						price={produk.price}
						description={produk.description}
						image={produk.image}
                        id={produk.id}
					/>
				)
			})}
		</>
	)
}

const Card = (props) => {
	return (
		<div className="mx-auto max-w-fit ">
			<div className="border-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
                <div className="max-w-[200px] text-center px-8 items-center">
                    <span className="uppercase mb-4 block text-xs h-16 overflow-hidden text-ellipsis font-semibold">
                        {props.title}
                    </span>
                </div>

				<div className="my-4 flex justify-center">
                    <img src={props.image} alt="produk" className="w-20 h-20" ></img>
                </div>
                <div>
                <h2 className="text-red-500 mb-3 text-xs font-bold">
					$ {props.price}
				</h2>
				<p className="text-body-color text-ellipsis overflow-hidden max-h-8 mb-5 max-w-[200px] border-b border-[#F2F2F2] pb-2 text-[10px]">
					{props.description}
				</p>
                </div>
				<a
					href={`/${props.id}`}
					className="bg-red-600 border-primary block w-full rounded-md border p-2 text-center text-xs font-semibold text-white transition hover:bg-opacity-90"
				>
					Detail Produk
				</a>
				<div>
					<span className="absolute right-0 top-7 z-[-1]">
						<svg
							width="77"
							height="172"
							viewBox="0 0 77 172"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
							<defs>
								<linearGradient
									id="paint0_linear"
									x1="86"
									y1="0"
									x2="86"
									y2="172"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="red" stopOpacity="0.09" />
									<stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</span>
					<span className="absolute right-4 top-4 z-[-1]">
						<svg
							width="41"
							height="89"
							viewBox="0 0 41 89"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="38.9138"
								cy="87.4849"
								r="1.42021"
								transform="rotate(180 38.9138 87.4849)"
								fill="red"
							/>
							<circle
								cx="38.9138"
								cy="74.9871"
								r="1.42021"
								transform="rotate(180 38.9138 74.9871)"
								fill="red"
							/>
							<circle
								cx="38.9138"
								cy="62.4892"
								r="1.42021"
								transform="rotate(180 38.9138 62.4892)"
								fill="red"
							/>
							<circle
								cx="38.9138"
								cy="38.3457"
								r="1.42021"
								transform="rotate(180 38.9138 38.3457)"
								fill="red"
							/>
							<circle
								cx="38.9138"
								cy="13.634"
								r="1.42021"
								transform="rotate(180 38.9138 13.634)"
								fill="red"
							/>
							<circle
								cx="38.9138"
								cy="50.2754"
								r="1.42021"
								transform="rotate(180 38.9138 50.2754)"
								fill="red"
							/>
							<circle
								cx="38.9138"
								cy="26.1319"
								r="1.42021"
								transform="rotate(180 38.9138 26.1319)"
								fill="red"
							/>
							<circle
								cx="38.9138"
								cy="1.42021"
								r="1.42021"
								transform="rotate(180 38.9138 1.42021)"
								fill="red"
							/>
							<circle
								cx="26.4157"
								cy="87.4849"
								r="1.42021"
								transform="rotate(180 26.4157 87.4849)"
								fill="red"
							/>
							<circle
								cx="26.4157"
								cy="74.9871"
								r="1.42021"
								transform="rotate(180 26.4157 74.9871)"
								fill="red"
							/>
							<circle
								cx="26.4157"
								cy="62.4892"
								r="1.42021"
								transform="rotate(180 26.4157 62.4892)"
								fill="red"
							/>
							<circle
								cx="26.4157"
								cy="38.3457"
								r="1.42021"
								transform="rotate(180 26.4157 38.3457)"
								fill="red"
							/>
							<circle
								cx="26.4157"
								cy="13.634"
								r="1.42021"
								transform="rotate(180 26.4157 13.634)"
								fill="red"
							/>
							<circle
								cx="26.4157"
								cy="50.2754"
								r="1.42021"
								transform="rotate(180 26.4157 50.2754)"
								fill="red"
							/>
							<circle
								cx="26.4157"
								cy="26.1319"
								r="1.42021"
								transform="rotate(180 26.4157 26.1319)"
								fill="red"
							/>
							<circle
								cx="26.4157"
								cy="1.4202"
								r="1.42021"
								transform="rotate(180 26.4157 1.4202)"
								fill="red"
							/>
							<circle
								cx="13.9177"
								cy="87.4849"
								r="1.42021"
								transform="rotate(180 13.9177 87.4849)"
								fill="red"
							/>
							<circle
								cx="13.9177"
								cy="74.9871"
								r="1.42021"
								transform="rotate(180 13.9177 74.9871)"
								fill="red"
							/>
							<circle
								cx="13.9177"
								cy="62.4892"
								r="1.42021"
								transform="rotate(180 13.9177 62.4892)"
								fill="red"
							/>
							<circle
								cx="13.9177"
								cy="38.3457"
								r="1.42021"
								transform="rotate(180 13.9177 38.3457)"
								fill="red"
							/>
							<circle
								cx="13.9177"
								cy="13.634"
								r="1.42021"
								transform="rotate(180 13.9177 13.634)"
								fill="red"
							/>
							<circle
								cx="13.9177"
								cy="50.2754"
								r="1.42021"
								transform="rotate(180 13.9177 50.2754)"
								fill="red"
							/>
							<circle
								cx="13.9177"
								cy="26.1319"
								r="1.42021"
								transform="rotate(180 13.9177 26.1319)"
								fill="red"
							/>
							<circle
								cx="13.9177"
								cy="1.42019"
								r="1.42021"
								transform="rotate(180 13.9177 1.42019)"
								fill="red"
							/>
							<circle
								cx="1.41963"
								cy="87.4849"
								r="1.42021"
								transform="rotate(180 1.41963 87.4849)"
								fill="red"
							/>
							<circle
								cx="1.41963"
								cy="74.9871"
								r="1.42021"
								transform="rotate(180 1.41963 74.9871)"
								fill="red"
							/>
							<circle
								cx="1.41963"
								cy="62.4892"
								r="1.42021"
								transform="rotate(180 1.41963 62.4892)"
								fill="red"
							/>
							<circle
								cx="1.41963"
								cy="38.3457"
								r="1.42021"
								transform="rotate(180 1.41963 38.3457)"
								fill="red"
							/>
							<circle
								cx="1.41963"
								cy="13.634"
								r="1.42021"
								transform="rotate(180 1.41963 13.634)"
								fill="red"
							/>
							<circle
								cx="1.41963"
								cy="50.2754"
								r="1.42021"
								transform="rotate(180 1.41963 50.2754)"
								fill="red"
							/>
							<circle
								cx="1.41963"
								cy="26.1319"
								r="1.42021"
								transform="rotate(180 1.41963 26.1319)"
								fill="red"
							/>
							<circle
								cx="1.41963"
								cy="1.4202"
								r="1.42021"
								transform="rotate(180 1.41963 1.4202)"
								fill="red"
							/>
						</svg>
					</span>
				</div>
			</div>
		</div>
	)
}

export default ProductItems
