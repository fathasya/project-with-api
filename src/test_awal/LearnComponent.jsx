import React, { Component, useEffect } from "react"

const LearnComponent = () => {
	const Time = new Date().toLocaleTimeString()

	// Learn useState
	// will be rendered when data changes
	const [count, setCount] = React.useState(0)
	const [tick, setTick] = React.useState({ Time })

	const updateTime = () => {
		setTick(Time)
	}

	setInterval(updateTime, 1000)

	return (
		<div className="bg-gray-200 inline-block w-full">
			<div className="bg-black p-5 font-bold text-center text-white uppercase">
				<h3>This Clock and Counter Use useState Hooks</h3>
			</div>
			<div className="bg-blue-300 w-full p-5 text-center">
				<p className="font-bold text-lg uppercase leading-8">CLock</p>
				<p className="my-5"> {Time} </p>
				<hr />
				<p className="font-bold text-lg uppercase leading-10 mt-5"> Counter</p>
				<button
					className="px-5 py-2 rounded-lg shadow-lg bg-indigo-600 mx-5"
					onClick={function () {
						setCount(count - 1)
					}}
				>
					-
				</button>

				<span> {count} </span>

				<button
					className="px-5 py-2 rounded-lg shadow-lg bg-indigo-600 m-5"
					onClick={function () {
						setCount(count + 1)
					}}
				>
					+
				</button>
			</div>
			<div className="bg-black p-5 font-bold text-center text-white uppercase">
				<h3>Learn useEffect</h3>
			</div>
			<div className="bg-blue-300 text-center h-screen">
				<h2>P</h2>
			</div>
		</div>
	)
}

export default LearnComponent
