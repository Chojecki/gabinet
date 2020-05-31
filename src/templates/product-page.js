import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../components/Layout";

export const ProductPageTemplate = ({ image, image2 }) => (
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
      <h1 className="bigtit" style={{ color: "white" }}>
        Oferta
      </h1>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div>
                    <h1 className="main-title">Konsultacja psychologiczna</h1>
                  </div>
                  <div>
                    <p className="left-right">
                      Służy wstępnemu zdiagnozowaniu problemu, rozpoznaniu
                      trudności, ich przyczyn oraz oczekiwań w celu doboru
                      optymalnej formy pomocy. To od trzech do pięciu spotkań,
                      doraźna pomoc, wsparcie w rozwiązaniu trudnej sytuacji,
                      początek szczegółowej diagnozy i wstęp do możliwej,
                      dłuższej pracy terapeutycznej.{" "}
                    </p>
                    <p style={{ color: "grey" }} className="main-subtitle">
                      Koszt: 50 min/130 zł
                    </p>
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
                    <h1 className="main-title">Psychoterapia indywidualna</h1>
                  </div>
                  <div>
                    <p className="left-right">
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
                    </p>
                    <p style={{ color: "grey" }} className="main-subtitle">
                      Koszt: 50 min/130 zł
                    </p>
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
      <h2 className="has-text-centered main-title">Terapia on-line</h2>
      <div className="column">
        <div className="left-right">
          <img
            alt={image2.alt}
            src={`${
              !!image2.childImageSharp
                ? image2.childImageSharp.fluid.src
                : image2
            }`}
          />
        </div>
      </div>
      <div className="column">
        <div className="left-right-text">
          <p className="left-right">
            Biorąc pod uwagę utrudnienia w przemieszczaniu się, odległość od
            gabinetu, czy potrzebę pozostania w domu, tradycyjny kontakt w
            gabinecie może być nieosiągalny. Wyjściem z takiej sytuacji są
            spotkania on- line. Jest to stosunkowo nowy sposób dostarczania
            pomocy psychologicznej jednak wiele badań potwierdza skuteczność
            takiej formy terapii. Statystyki pokazały, że dzięki terapii online
            można uzyskać znaczną poprawę zdrowia psychicznego i dobrego
            samopoczucia. Psychoterapia ta korzysta z podobnych czynników
            leczących co terapia twarzą w twarz. Jest to m.in. komunikacja w
            czasie rzeczywistym, kontakt wzrokowy, sojusz terapeutyczny oraz
            niektóre elementy mowy ciała. Podczas połączenia terapeuta i pacjent
            widzą siebie i słyszą. Do kontaktu wykorzystywane są bezpieczne
            systemy komunikacji audio-wideo. Przed spotkaniem ustalone zostaną
            wszelkie niezbędne informacje na temat tego, w jaki sposób nawiązać
            połączenie z terapeutą.
          </p>
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
      <ProductPageTemplate
        image={frontmatter.image}
        image2={frontmatter.image2}
      />
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
        image2 {
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
