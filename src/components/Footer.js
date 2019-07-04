import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.links}>
				{links.map((item, index) => {
					return (
						<AniLink swipe direction="Right" duration={0.3}  
							key={index} to={item.path}>{item.text}</AniLink>
					)
				})}
			</div>

			<div className={styles.icons}>
				{socialIcons.map((item,index) => {
					return (
						<a key={index} href={item.url} target="_blank"
							 rel="noopener noreferrer">
							 {item.icon}
						</a>
					)
				})}
			</div>

			<div className={styles.copyright}>
				copyright &copy; backroads travel company
				{` ${new Date().getFullYear()}`} all
			</div>

		</footer>
	)

}

export default Footer
