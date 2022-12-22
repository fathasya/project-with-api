import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { LandingPage, DetailProducts, Add, Edit, Delete } from "./pages"
// import ProductItems from "./components/Constants/ProductItems"

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/:id",
		element: <DetailProducts />,
	},
	{
		path: "/Add",
		element: <Add/>,
	},
	{
		path: "/Edit/:id",
		element: <Edit/>,
	},
	{
		path: "/Delete",
		element: <Delete/>,
	},
])

const Main = () => {
	return <RouterProvider router={router} />
}

export default Main
