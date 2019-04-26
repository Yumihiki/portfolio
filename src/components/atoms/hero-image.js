import React from 'react'
import GatsbyImage from 'gatsby-image'

const HeroImage = ({ node, props }) => {
  if (node.childImageSharp && node.childImageSharp.fuild) {
    // eslint-disable-next-line
    return <GatsbyImage fluid={node.childImageSharp.fuild} {...props} />
  }

  if (node.childImageSharp && node.childImageSharp.fixed) {
    // eslint-disable-next-line
    return <GatsbyImage fixed={node.childImageSharp.fixed} {...props} />
  }

  // eslint-disable-next-line
  return <img src={node.publicURL} {...props} />
}

export default HeroImage