import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <>
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <p className="logo-title">Marcin Dobrzyński</p>
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div
                style={{ background: "white" }}
                className="navbar-start has-text-centered"
              >
                <Link className="navbar-item" to="/about">
                  O mnie
                </Link>
                <Link className="navbar-item" to="/products">
                  Oferta
                </Link>
                <Link className="navbar-item" to="/blog">
                  Blog
                </Link>
                <Link className="navbar-item" to="/contact">
                  Kontakt
                </Link>
              </div>
              <div
                style={{ background: "white", paddingBottom: 10 }}
                className="navbar-end has-text-centered"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>
                      ☎️ m.dobrzynski@o2.pl | 790546231
                    </p>
                  </div>
                  <p style={{ paddingTop: 5 }}>
                    ⌛️ Godziny otwarcia: 15:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
};

export default Navbar;
