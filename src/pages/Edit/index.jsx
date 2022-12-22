import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { InputElement, Button } from "../../components/atoms"

const Edit = () => {
	const [update, setUpdate] = useState(null)
	const { id } = useParams()
	const url = `https://fakestoreapi.com/products/${id}`

	// mau nampilin data yg awalnya dulu di form ceritanya
	// tp gatau knpa ga tampil wkwk
	const getDetail = async () => {
		const getData = await axios.get(url)
		setUpdate(getData)
		console.log(setUpdate)
	}

    // kalo mau lgsg tampilin isi yg updatenya di form codenya lgsg gini bukan?
    // tp hasil di console nya undefined :)
    // const getDetail = async () => {
    //     const response = await fetch(url, {
    //         method: "PUT",
    //         body: JSON.stringify({
    //           title: "test product",
    //           price: 13.5,
    //           description: "lorem ipsum set",
    //           image: "https://i.pravatar.cc",
    //           category: "electronic",
    //         }),
    //       })
        //   const data = response.json()
        //   console.log(data.update)
        //   setUpdate(data)
    // }


	useEffect(() => {
		getDetail()
	}, [])



    // aku maunya abis tampilin data awal,
	// trs klo data di formnya brubah isinya bakal di update disini
	const handleChange = (e) => {
        // pake code 1 bisa
	    const name = e.target.name
	    const value = e.target.value
	    setUpdate((values) => ({ ...values, [name]: value }))

        // pake code 2 gabisa wkwk salah apa?
        // const handleChange = async (e) => {
        //     const response = await fetch(url, {
        //         method: "PUT",
        //         body: JSON.stringify({
        //             name: e.target.name,
        //             value: e.target.value
        //         }),
        //     })
        //     const data = response.json()
        //     console.log(data.update)
        //     setUpdate(data)
	  }


    //   trs alert value updatednya pke ini
	  const handleSubmit = (e) => {
	    e.preventDefault()
	    alert(
	        'title : ' +
	        update.title +
	        '\nprice : ' +
	        update.price +
	        '\ndesc: ' +
	        update.description +
	        '\ncategory: ' +
	        update.category
	    )
	  }

	return (
		<>
			<div className="w-full p-10 grid place-items-center">
				{!update && (
					<div className="text-center font-semi-bold pt-5">Loading...</div>
				)}
				{update && (
					<form
						onSubmit={handleSubmit}
						className="max-w-xl mx-auto p-10 bg-white shadow-xl rounded-lg"
					>
						<h1 className="text-center text-gray-700 font-bold uppercase text-2xl my-5">
							update Produk
						</h1>
						<InputElement
							type="text"
							name="title"
                            // value="test"
							value={update.title}
							onChange={handleChange}
						/>
						<InputElement
							type="text"
							name="price"
							value={update.price}
							onChange={handleChange}
						/>
						<InputElement
							type="text"
							name="description"
							value={update.description}
							onChange={handleChange}
						/>
						<InputElement
							type="text"
							name="category"
							value={update.category}
							onChange={handleChange}
						/>
						<Button>Submit</Button>
					</form>
				)}
			</div>
		</>
	)
}

export default Edit
