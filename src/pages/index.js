import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./home.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`josh`, `rogan`, `joshuarogan`]} />
    <section>
      <h2>Work Experience</h2>

      <section className="job">
        <h3>
          <a href="https://www.fandom.com/about">Fandom</a> | Full Stack
          Software Engineer (Tech Lead)
        </h3>
        <h4>July 2016 - Present</h4>
        <ul>
          <li>
            Develop front-end apps and back-end microservices at scale to serve
            our 200M uniques
          </li>
          <li>
            Technical lead for Fandom’s next-generation contribution platform
          </li>
          <li>
            Mentor junior engineers from{" "}
            <a href="https://thelastmile.org/">Last Mile</a>
          </li>
          <li>Work closely with product to align goals</li>
          <li>
            Lead technical code sharing groups for new technology and patterns
          </li>
          <li>
            Rolled out WordPress as a Service (Laravel+Webpack+WP) for a
            fast-to-market editorial solution
          </li>
          <li>with international teams</li>
          <li>
            Make decisions based on data and run A/B tests to validate ideas
          </li>
        </ul>
        <section>
          <h4>Links</h4>
          <ul>
            <li>
              <a href="https://makingit.fandom.com/wiki/4198323/meet-your-makers">
                Fandom's next generation platform
              </a>
            </li>
            <li>
              <a href="https://www.fandom.com/">Wordpress as a Service</a>
            </li>
          </ul>
        </section>
      </section>

      <section className="job">
        <h3>Fireman Creative | Full Stack Software Engineer</h3>
        <h4>July 2015 - July 2016</h4>
        <ul>
          <li>Independently led several web projects end-to-end</li>
          <li>
            Collaborated with clients and graphic designers to craft a
            consistent look and feel of web applications
          </li>
          <li>
            Generated monthly SEO and analytical progress reports to track
            progress
          </li>
          <li>
            Created a new container-based deployment process that greatly sped
            up development flows
          </li>
          <li>
            Implemented automated alerts and scripts to restart crashed
            applications and servers
          </li>
        </ul>
        <section>
          <h4>Projects</h4>
          <ul>
            <li>
              <a href="https://ae7.com/">AE7</a>
            </li>
            <li>
              <a href="https://jccpgh.org/">JCC Pittsburgh</a>
            </li>
            <li>
              <a href="http://contedesign.net/">Conte Design</a>
            </li>
          </ul>
        </section>
      </section>

      <section className="job">
        <h3>
          Pittsburgh Quantum Repository Group | Full Stack Software Engineer
        </h3>
        <h4>January 2015 – January 2016</h4>
        <ul>
          <li>
            Built python-powered front-end application to display the largest
            molecule database
          </li>
          <li>
            Utilized WebGL technology to create 3D visualizations of molecules
          </li>
          <li>Built and maintained a MongoDB server</li>
        </ul>

        <section>
          <h4>Links</h4>
          <ul>
            <li>
              <a href="https://pqr.pitt.edu/mol/XLYOFNOQVPJJNP-UHFFFAOYSA-N">
                Datbase App
              </a>
            </li>
          </ul>
        </section>
      </section>

      <section className="job">
        <h3>Pittsburgh Genetics | Full Stack Software Engineer</h3>
        <h4>October 2014 – January 2016</h4>
        <ul>
          <li>Built a genetic population simulator web application</li>
          <li>
            Utilized multi-threading web workers to speed up simultaneous
            simulations
          </li>
        </ul>
        <section>
          <h4>Links</h4>
          <ul>
            <li>
              <a href="http://popgensimulator.pitt.edu/graphs/allele">
                Simulator
              </a>
            </li>
          </ul>
        </section>
      </section>

      <section className="job">
        <h3>Independent Consultant | Full Stack Software Engineer</h3>
        <h4>January 2012 – Present</h4>
        <ul>
          <li>
            Worked with professional baseball teams, writers, students, and
            professors to build web applications
          </li>
        </ul>
        <section>
          <h4>Links</h4>
          <ul>
            <li>
              <a href="http://efnback.droplet.joshuarogan.com/">
                Application for a study at the University of Pittsburgh Medical
                Center{" "}
              </a>
            </li>
          </ul>
        </section>
      </section>
    </section>

    <section>
      <h2>Skill Sets</h2>
      <ul>
        <li>
          Front-End
          <ul>
            <li>React, redux, wepback, styled components</li>
          </ul>
        </li>
        <li>
          Back-End
          <ul>
            <li>
              Java (gradle, guice, jackson, jersey, jooq, liquibase), Python,
              PHP (Laravel, Composer, WP), Node.js
            </li>
          </ul>
        </li>
        <li>
          Database
          <ul>
            <li>MySQL, MongoDB</li>
          </ul>
        </li>
        <li>
          Ops
          <ul>
            <li>Kubernetes, VCL, AWS</li>
          </ul>
        </li>
        <li>
          Data Engineering
          <ul>
            <li>Sklearn, tensorflow, pandas</li>
          </ul>
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
