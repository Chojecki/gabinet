import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const ProductPageTemplate = ({ image }) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        height: "90vh",
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2 className="main-title" style={{ color: "white" }}>
        Oferta
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div>
                    <h1 className="main-title">
                      Konsultacja psychologiczna (dostępna również on-line)
                    </h1>
                  </div>
                  <div>
                    <h3 className="main-subtitle">
                      Służy wstępnemu zdiagnozowaniu problemu, rozpoznaniu
                      trudności, ich przyczyn oraz oczekiwań w celu doboru
                      optymalnej formy pomocy. To od trzech do pięciu spotkań,
                      doraźna pomoc, wsparcie w rozwiązaniu trudnej sytuacji,
                      początek szczegółowej diagnozy i wstęp do możliwej,
                      dłuższej pracy terapeutycznej.{" "}
                    </h3>
                    <p className="main-subtitle">Koszt: 50 min/130 zł</p>
                  </div>
                </div>
              </div>
            </div>
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
                    <h1 className="main-title">
                      Psychoterapia indywiduwalna (dostępna również online)
                    </h1>
                  </div>
                  <div>
                    <h3 className="main-subtitle">
                      W procesie tym terapeuta towarzyszy pacjentowi w
                      rozwiązywaniu problemów życiowych i emocjonalnych, pomaga
                      zrozumieć i zmieniać schematyczne, nieświadome, często
                      destrukcyjne sposoby myślenia, przeżywania i działania.
                      Niektóre metody kładą większy nacisk na pozbycie się
                      konkretnych objawów, inne nakierowane są na funkcjonowanie
                      w relacjach czy poradzenie sobie z traumatyczną
                      przeszłością. Uczestniczenie w terapii umożliwia zmianę
                      stosunku do samego siebie i bardziej świadome budowanie
                      relacji z innymi ludźmi. Podczas terapii niezwykle istotne
                      jest nastawienie pacjenta – jego determinacja i
                      zaangażowanie pozwolą w znacznym stopniu przyspieszyć
                      proces i powrót do pełni sił.
                    </h3>
                    <p className="main-subtitle">Koszt: 50 min/130 zł</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate image={frontmatter.image} />
    </Layout>
  );
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
