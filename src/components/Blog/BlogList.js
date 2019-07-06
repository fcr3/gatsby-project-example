import React from 'react'
import BlogCard from './BlogCard'
import Title from '../Title'
import {useStaticQuery, graphql} from 'gatsby'
import styles from '../../css/blog.module.css'

const getPost = graphql`
query {
  posts: allContentfulPost(sort: {
    fields: createdAt, order:DESC
  }) {
    edges {
      node {
        published(formatString:"MMMM DD YYYY")
        createdAt(formatString: "LLLL")
        title
        slug
        id:contentful_id
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
}
`

const BlogList = () => {
  const {posts} = useStaticQuery(getPost)
  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="blog" />
      <div className={styles.center}>
        {
          posts.edges.map(({node}) => {
            return (
              <BlogCard key={node.id} blog={node} />
            )
          })
        }
      </div>
    </section>
  )
}

export default BlogList
