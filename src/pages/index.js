import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import {graphql} from 'gatsby'

export default ({data}) => (
	<Layout>
		<StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
			<Banner
				title="continue exploring"
				info="Lorem consectetur adipisicing elit, \
				sed do eiusmod tempor incididunt ut labore et \
				dolore magna aliqua. Ut enim ad minim veniam."
				>
				<AniLink to="/tours" swipe direction="Right" duration={0.3}
							className="btn-white">
					explore tours
				</AniLink>
			</Banner>
		</StyledHero>

		<About />
		<Services />

	</Layout>
)

export const query = graphql`
	query {
		defaultBcg:file(relativePath: {
			eq: "defaultBcg.jpeg"
		}) {
			childImageSharp{
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
