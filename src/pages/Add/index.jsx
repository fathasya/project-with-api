import React, { useState } from "react"
import { InputElement, Button } from "../../components/atoms"

const Add = () => {
	const [add, setAdd] = useState({})
	const url = "https://fakestoreapi.com/products"

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setAdd((values) => ({ ...values, [name]: value }))
	}

	// ini dah bnr blm? di consolenya gada komen apa2 :)
	const handleAddSubmit = async () => {
		const data = await fetch(url, {
			method: "POST",
			body: JSON.stringify({
				title: add.title,
				price: add.price,
				description: add.description,
				category: add.category,
			}),
		})
		const getData = await data.json()
		setAdd(getData)
		// .then((res) => res.json())
		// .then((json) => console.log(json))
		console.log(getData)
	}

	return (
		<>
			<div className="w-full max-h-fit p-10 grid place-items-center">
				<form
					onSubmit={handleAddSubmit}
					className="max-w-xl mx-auto p-10 bg-white shadow-xl rounded-lg"
				>
					<h1 className="text-center text-gray-700 font-bold uppercase text-2xl my-5">
						Tambah Produk Baru
					</h1>
					<InputElement
						type="text"
						placeholder="Title"
						name="title"
						value={add.title || ""}
						onChange={handleChange}
					/>
					<InputElement
						type="text"
						placeholder="Price"
						name="price"
						value={add.price || ""}
						onChange={handleChange}
					/>
					<InputElement
						type="text"
						placeholder="Description"
						name="description"
						value={add.description || ""}
						onChange={handleChange}
					/>
					<InputElement
						type="text"
						placeholder="Category"
						name="category"
						value={add.category || ""}
						onChange={handleChange}
					/>
					<input
						type="file"
						name="productPict"
						id=""
						placeholder="Product Picture"
						className="block mt-4 mb-8"
					/>
					<Button>Tambah Produk</Button>
				</form>
			</div>
		</>
	)
}

export default Add
