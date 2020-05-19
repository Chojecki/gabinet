import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import zl from "../../static/img/zl.png";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const ContactPageTemplate = ({
  image,
  akapit1,
  akapit2,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <section style={{ paddingTop: "30px", paddingBottom: "50px" }}>
        <div className="columns is-12">
          <div className="column">
            <div className="left-right-text">
              <h2 className="has-text-centered main-title">
                Marcin Dobrzyński
              </h2>
              <p className="left-right has-text-centered">
                {"Tu będzie adres"}
              </p>
              <p className="left-right has-text-centered">{akapit1}</p>
              <p className="left-right has-text-centered">{akapit2}</p>
              <a
                style={{ display: "flex", justifyContent: "center" }}
                href="https://www.znanylekarz.pl/marcin-dobrzynski/psychoterapeuta-psycholog/warszawa"
                target="_blank"
              >
                <img style={{ width: "50%" }} src={zl} />
              </a>
            </div>
          </div>
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
        </div>
      </section>
    </>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        akapit1={frontmatter.akapit1}
        akapit2={frontmatter.akapit2}
        image={frontmatter.image}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
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
      }
    }
  }
`;
