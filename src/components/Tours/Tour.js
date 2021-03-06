import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import {FaMap} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {useStaticQuery, graphql} from 'gatsby'
import PropTypes from 'prop-types'

const getDefaultImg = graphql`
query {
  file(relativePath: {
    eq: "defaultBcg.jpeg"
  }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Tour = ({tour}) => {
	const data = useStaticQuery(getDefaultImg)
	const img = data.file.childImageSharp.fluid
	const {name, price, country, days, slug, images} = tour
	let mainImage = images ? images[0].fluid : img

	return (
			<article className={styles.tour}>
				<div className={styles.imgContainer}>
					<Image fluid={mainImage} className={styles.img} alt="one img"/>
					<AniLink fade className={styles.link} to={`/tours/${slug}`}>
						details
					</AniLink>
				</div>
        <div className={styles.footer}>
					<h3>{name || 'No Name'}</h3>
					<div className={styles.info}>
						<h4 className={styles.country}>
							<FaMap className={styles.icon} />
							{country || 'No Country'}
						</h4>
						<div className={styles.details}>
							<h6>{days || '?'} days</h6>
							<h6>from ${price || '???'}</h6>
						</div>
					</div>
				</div>
			</article>
	)
}

Tour.propTypes = {
	tour: PropTypes.shape({
		name: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
		days: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.object).isRequired
	})
}

export default Tour
