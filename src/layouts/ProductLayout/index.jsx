import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductLayout = () => {
	const [data, setData] = useState(null)
	const { id } = useParams()
	const url = `https://fakestoreapi.com/products/${id}`

	const getDetail = async () => {
		const getData = await axios.get(url)
		setData(getData.data)
	}

	useEffect(() => {
		getDetail()
	}, [])

	return (
		<>
			<div className="pl-2 md:pl-4 xl:pl-1 py-5 shadow-xl">
				<div className="max-w-2xl md:max-w-6xl mx-auto flex justify-between items-center">
					<div className="flex items-center">
						<a href="/">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="3"
								className="w-4 h-4 sm:w-6 sm:h-6 mr-2 md:mr-4 xl:mr-8 stroke-red-600 "
							>
								<path
									stroke-linecap="round"
									d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
								/>
							</svg>
						</a>
						<h1 className="text-md sm:text-lg uppercase font-bold text-red-600 pl-2 md:pl-8 md:border-l-[1px] border-l-[1px] border-red-300">
							Detail produk
						</h1>
					</div>

					<div className="flex items-center justify-center">
						<a
							href="/"
							className="pl-2 pr-3 sm:pr-5 py-2 bg-yellow-500 hover:bg-yellow-400 mx-2 sm:mx-5 text-white rounded-lg justify-center flex items-center uppercase text-[10px] sm:text-xs font-semibold"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="white"
								className="w-4 sm:w-5 h-4 sm:h-5 mr-2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
								/>
							</svg>
							Update Produk
						</a>
						<a
							href="/"
							className="pl-2 pr-3 sm:pr-5 py-2 bg-red-600 hover:bg-red-700 mx-2 sm:mx-5 text-white rounded-lg flex items-center justify-center uppercase text-[10px] sm:text-xs font-semibold"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="3"
								stroke="currentColor"
								class="w-4 sm:w-5 h-4 sm:h-5 mr-2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 4.5v15m7.5-7.5h-15"
								/>
							</svg>
							Tambah Produk
						</a>
					</div>
				</div>
			</div>
			{!data && (
				<div className="text-center font-semi-bold pt-5">Loading...</div>
			)}
			{data && (
				<div className="mx-auto py-10 px-10 max-w-2xl ">
					<div className="border-primary mx-auto max-w-2xl shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
						<div className="max-w-xl text-center px-8 items-center">
							<span className="uppercase mb-4 block text-md sm:text-xl h-16 font-semibold">
								{data.title}
							</span>
						</div>

						<div className="my-4 flex justify-center">
							<img src={data.image} alt="produk" className="w-24 sm:w-40"></img>
						</div>
						<div>
							<h2 className="text-red-500 mb-3 text-md sm:text-lg font-bold">
								$ {data.price}
							</h2>
							<p className="text-body-color mb-5 max-w-xl text-justify border-b border-[#F2F2F2] pb-2 text-[12px] sm:text-sm">
								{data.description}
							</p>
						</div>
						<a
							href="#"
							className="bg-red-600 border-primary block w-full rounded-md border p-2 text-center text-sm sm:text-md font-semibold text-white transition hover:bg-opacity-90"
						>
							Masukkan Keranjang
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
			)}
		</>
	)
}

export default ProductLayout
