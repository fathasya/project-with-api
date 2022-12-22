import React from "react"
import { Navbar, Hero, About, PricingProduct, Footer } from "../../components/organisms"

const Home = () => {
	return (
		<div className="w-full bg-dark">
			<Navbar />
			<Hero />
			<About />
			<PricingProduct />
			<Footer />
		</div>
	)
}

export default Home
