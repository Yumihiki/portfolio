import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import InViewMonitor from "react-inview-monitor";
import SectionTitle from "@components/atoms/section_title";
import HeroImage from "@components/atoms/hero-image";

const Section = styled.section`
  ${tw`w-full bg-white`};
`

const Blog = (props) => {
  if(0 === props.totalCout) {
    return null
  }
  return (
    <Section>
      <InViewMonitor
        classNameNotInView='inview-section-hidden'
        classNameInView='inview-section-active'
      >
        <div className="container mx-auto">
          <SectionTitle title={`Blog`} subtitle="最新記事一覧" />
          <div className="lg:flex justify-center w-full mt-6 mb-10">

            {props.posts.map(({ node }) => (
              <div key={node.fields.slug} className="mx-2 lg:flex lg:w-1/4">
                <div className="shadow-lg my-2">
                  <Link to={`/post/${node.fields.slug}`}>
                    <HeroImage node={node.frontmatter.hero} props={{ alt: node.frontmatter.title }} />
                  </Link>
                  <div　className="px-4 py-4">
                    <Link to={`/post/${node.fields.slug}`} className="block text-black hover:text-grey-darkest font-bold text-lg mb-2 no-underline">{node.frontmatter.title}{" "}</Link>
                      <p className="text-grey-darker text-sm">{node.frontmatter.description}{" "}</p>
                      <div className="mt-4 text-right">
                        <Link to={`/post/${node.fields.slug}`} className="inline-block bg-indigo text-white no-underline py-2 px-3 hover:bg-indigo-dark">More</Link>
                      </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </InViewMonitor>
    </Section>
  )
}

export default Blog