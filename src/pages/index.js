import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

export default () => (
	<Layout>
		<SimpleHero>
			<Banner
				title="continue exploring"
				info="Lorem consectetur adipisicing elit, \
				sed do eiusmod tempor incididunt ut labore et \
				dolore magna aliqua. Ut enim ad minim veniam."
				>
				<Link to="/tours"
							className="btn-white">
					explore tours
				</Link>
			</Banner>
		</SimpleHero>

		<About />
		<Services />

	</Layout>
)
