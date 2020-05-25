import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({
  image,
  akapit1,
  akapit2,
  akapit3,
  akapit4,
  akapit5,
  akapit6,
  obszary,
  obszary2,
  obszary3,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <section style={{ paddingTop: "30px", paddingBottom: "50px" }}>
        <div className="columns is-12">
          <div className="column">
            <div className="left-right portret">
              <img
                alt={"Moje zdjęcie"}
                className="portret-image"
                src={`${
                  !!image.childImageSharp
                    ? image.childImageSharp.fluid.src
                    : image
                }`}
              />
            </div>
          </div>
          <div className="column">
            <div className="left-right-text">
              <h2 className="has-text-centered main-title">
                Marcin Dobrzyński
              </h2>
              <p
                style={{ fontWeight: "bold", fontSize: 15, marginTop: -32 }}
                className="has-text-centered"
              >
                Psycholog / Psychoterapeuta
              </p>
              <p className="left-right biglet">{akapit1}</p>
            </div>
          </div>
        </div>
        <div className="column is-12">
          <p style={{ padding: 10 }} className="left-right biglet">
            {akapit2}
          </p>
        </div>
      </section>
      <div class="divider div-transparent div-dot"></div>
      <section style={{ paddingTop: "30px", paddingBottom: "50px" }}>
        <div className="columns is-12">
          <div className="column">
            <div className="left-right-text">
              <p className="left-right biglet">{akapit3}</p>
            </div>
          </div>
          <div className="column">
            <div className="left-right-text">
              <p className="left-right biglet">{akapit4}</p>
              <p className="left-right biglet">{akapit5}</p>
            </div>
          </div>
        </div>
      </section>
      <div class="divider div-transparent div-dot"></div>
      <section>
        <div className="column is-12">
          <p style={{ padding: 10 }} className="left-right biglet">
            {akapit6}
          </p>
          <p style={{ padding: 20 }} className="left-right has-text-centered">
            Oferuję swoją pomoc w obszarach:
          </p>
          <div style={{ paddingLeft: 30, paddingTop: 20, paddingBottom: 40 }}>
            {obszary.map((obszar) => (
              <li>{obszar}</li>
            ))}
          </div>
          <div class="divider div-transparent div-dot"></div>
          <p style={{ padding: 20 }} className="left-right has-text-centered">
            Zapraszam również osoby, które:
          </p>
          <div style={{ paddingLeft: 30, paddingTop: 20, paddingBottom: 40 }}>
            {obszary2.map((obszar) => (
              <li>{obszar}</li>
            ))}
          </div>
          <div class="divider div-transparent div-dot"></div>
          <p style={{ padding: 20 }} className="left-right has-text-centered">
            Do kontaktu zachęcam także osoby, które są w trakcie przeżywania
            straty po śmierci kogoś bliskiego i czują że:
          </p>
          <div style={{ paddingLeft: 30, paddingTop: 20, paddingBottom: 40 }}>
            {obszary3.map((obszar) => (
              <li>{obszar}</li>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        akapit1={frontmatter.akapit1}
        akapit2={frontmatter.akapit2}
        akapit3={frontmatter.akapit3}
        akapit4={frontmatter.akapit4}
        akapit5={frontmatter.akapit5}
        akapit6={frontmatter.akapit6}
        obszary={frontmatter.obszary}
        obszary2={frontmatter.obszary2}
        obszary3={frontmatter.obszary3}
        image={frontmatter.image}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        akapit1
        akapit2
        akapit3
        akapit4
        akapit5
        akapit6
        obszary
        obszary2
        obszary3
      }
    }
  }
`;
