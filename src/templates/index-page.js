import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import a from "./b.css";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  image,
  jakzaczac,
  slider,
  terapiaonline,
  mainpitch,
}) => (
  <div>
    <section>
      <div>
        <Carousel
          dynamicHeight={false}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          internal={3}
        >
          {slider.map((slide) => (
            <div>
              <img
                src={`${
                  !!slide.image.childImageSharp
                    ? slide.image.childImageSharp.fluid.src
                    : slide.image
                }`}
              />
              <p className="legend key-words">{slide.text}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div>
                    <h1 className="main-title">{mainpitch.title}</h1>
                  </div>
                  <div>
                    <h4 className="main-subtitle">{mainpitch.description}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="divider div-transparent div-dot"></div>
    <section style={{ paddingTop: "30px", paddingBottom: "50px" }}>
      <div className="columns is-12">
        <div className="column">
          <div className="left-right">
            <img
              alt={mainpitch.image1.alt}
              src={`${
                !!mainpitch.image1.image.childImageSharp
                  ? mainpitch.image1.image.childImageSharp.fluid.src
                  : mainpitch.image1.image
              }`}
            />
          </div>
        </div>
        <div className="column">
          <div className="left-right-text">
            <p className="left-right">{mainpitch.description2}</p>
          </div>
        </div>
      </div>
    </section>
    <div class="divider div-transparent div-dot"></div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div>
                    <h2 className="main-title">{jakzaczac.title}</h2>
                  </div>
                  <div>
                    <h3 className="main-subtitle">{jakzaczac.description}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="divider div-transparent div-dot"></div>
    <section style={{ paddingTop: "30px", paddingBottom: "50px" }}>
      <div className="columns is-12">
        <div className="column">
          <div className="left-right-text">
            <h2>{terapiaonline.title}</h2>
            <p className="left-right">{terapiaonline.description}</p>
            <p className="left-right">{terapiaonline.description2}</p>
          </div>
        </div>
        <div className="column">
          <div className="left-right-img-big">
            <img
              alt={terapiaonline.image1.alt}
              src={`${
                !!terapiaonline.image1.image.childImageSharp
                  ? terapiaonline.image1.image.childImageSharp.fluid.src
                  : terapiaonline.image1.image
              }`}
            />
          </div>
        </div>
      </div>
      <div className="columns is-12">
        <div className="column">
          <div className="left-right-text">
            <p className="left-right">{terapiaonline.description3}</p>
          </div>
        </div>
      </div>
    </section>
    <div class="divider div-transparent div-dot"></div>
    <section>
      <div className="column is-12">
        <h3
          style={{ paddingBottom: "25px" }}
          className="main-title has-text-centered"
        >
          Ostatnio na blogu
        </h3>
        <BlogRoll />
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mainpitch: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        slider={frontmatter.slider}
        terapiaonline={frontmatter.terapiaonline}
        jakzaczac={frontmatter.jakzaczac}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jakzaczac {
          title
          description
        }
        terapiaonline {
          title
          description
          description2
          description3
          image1 {
            image {
              childImageSharp {
                fluid(maxHeight: 1500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
        mainpitch {
          title
          description
          description2
          image1 {
            image {
              childImageSharp {
                fluid(maxHeight: 1500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
        slider {
          image {
            childImageSharp {
              fluid(maxHeight: 1500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
      }
    }
  }
`;
