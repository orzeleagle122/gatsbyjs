import React from "react"
import Button from "../components/Button/Button"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import Post from "../components/Post/Post"

const ContentWrapper = styled.div`
  width: 65%;
  height: calc(100vh - 80px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  h1 {
    font-size: 85px;
    margin: 0;
    width: 40%;
    line-height: 0.9;
  }

  p {
    margin: 20px 0 40px;
    width: 40%;
  }
`

const ImageWrapper = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 35%;
  object-fit: cover;
  height: 100vh;
`

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      <Post />
      <h1>Your new space</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a magna
        diam. Praesent eget dolor laoreet turpis lacinia volutpat a et turpis.
        Donec urna ante, varius sit amet arcu in, eleifend sagittis est.
      </p>
      <Button>estimete project</Button>
    </ContentWrapper>
    {/* <ImageWrapper src={data.file.childImageSharp.fluid.src} srcSet={data.file.childImageSharp.fluid.srcSet} size={data.file.childImageSharp.fluid.sizes} alt='' /> */}
    <ImageWrapper fluid={data.file.childImageSharp.fluid} />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
