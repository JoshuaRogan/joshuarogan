/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <nav style={{ textAlign: "center" }}>
            <div className="image" />
            <h1>Hello World!</h1>
            <p>
              I am currently working as a full stack software engineer at Fandom
              in San Francisco. At Fandom, I help support our massive platform
              of over 200 million unique visitors covering 400K fan powered
              communities. I serve as the technical lead for the next-generation
              contribution platform.{" "}
            </p>
            <p>
              You can reach me at{" "}
              <a href="mailto:JoshJRogan@gmail.com">JoshJRogan@gmail.com</a>
            </p>

            <section className="nav">
              {/*<Link to='/about'>About</Link>*/}
              <a
                href="https://drive.google.com/file/d/1uWDOIMp7PmTAG_Dcf5yjro0WkzU2N2Fw/view?usp=sharing"
                target="_blank"
              >
                Résumé
              </a>
              <a
                href="https://www.linkedin.com/in/joshuarogan/"
                target="_blank"
              >
                {" "}
                Linkedin
              </a>
              <a href="https://github.com/JoshuaRogan" target="_blank">
                {" "}
                Github
              </a>
              <a href="https://goo.gl/photos/cxYAM6NLKC78Upky5" target="_blank">
                Photography
              </a>
            </section>
          </nav>

          <main>{children}</main>

          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
