import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { LandingPage, DetailProducts, Add, Edit, Delete } from "./pages"

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/:id",
		element: <DetailProducts />,
	},
])

const Main = () => {
	return <RouterProvider router={router} />
}

export default Main
