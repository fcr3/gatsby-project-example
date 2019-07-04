import React,{Component} from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import StyledHero from '../components/StyledHero'
import Contact from '../components/Contact/Contact'

export default function contact({data}) {
	return (
		<Layout>
			<StyledHero
				img={data.contactBcg.childImageSharp.fluid}>

			</StyledHero>
			<Contact />
		</Layout>
	)
}

export const query = graphql`
	query {
		contactBcg:file(relativePath: {
			eq: "connectBcg.jpeg"
		}) {
			childImageSharp{
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
