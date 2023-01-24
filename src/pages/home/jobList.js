import React from "react"

const JobList = () => (
  <section>
      <h2>Work Experience</h2>

      <section className="job">
        <h3>
          <a href="https://www.fandom.com/about">Fandom</a>
        </h3>
        <h4>July 2016 - 2023</h4>
        <h4>Engineering Manager (2019-2023)</h4>
        <ul>
          <li>
            Led complex projects for scalable React front-end applications, data systems, and back-end microservices to our 300M monthly unique visitors across multiple engineering groups.
          </li>
          <li>
            Expanded strategy for performance dashboards and observability on our client-side systems.
          </li>
          <li>Led a team of 9 engineers focusing on findability, video, and experimentation. Ensured teams were able to deliver high-quality features to meet business objectives rapidly.
          </li>
          <li>
            Partnered with product leaders to align short-term goals while working with the VP of Engineering to build the correct infrastructure to support the business in the long term.
          </li>
          <li>
            Executed a strategy to unify the front-end platform with consistent tooling and technology.
          </li>
          <li>
            Hired global talent across multiple departments.
          </li>
          <li>
            Developed top engineers into leadership roles by providing individualized mentorship and guidance tailored to the specific motivations and goals of each engineer.
          </li>
        </ul>

        <h4>Staff Engineer (2016-2019)</h4>
        <ul>
          <li>Technical lead for a browser experimentation platform, client-side data management toolkit for personalization, and video platform.
          </li>
          <li>
            Built a fast-to-market editorial platform and Fandom’s React replacement of MediaWiki.
          </li>
          <li>
            Unified client-side performance and analytics systems.
          </li>
          <li>
            Led technical code-sharing groups for new technology and engineering patterns.
          </li>
          <li>
            Worked closely with international engineering, design, and product partners.
          </li>
        </ul>

        <section>
          <h4>Links</h4>
          <ul>
            <li>
              <a href="https://www.fandom.com/fancentral/home">(2023) Centralized Fandom Content App</a>
            </li>
            <li>
              <a href="https://www.fandom.com/video">(2022) Canonical Video Platform</a>
            </li>
            <li>
              <a href="https://www.fandom.com/trivia">(2022) Trivia Application</a>
            </li>
            <li>
              <a href="https://bingebot.fandom.com/">(2021) TV Show Recommendation App</a>
            </li>
            <li>
              <a href="https://www.fandom.com/">(2020) Editorial Platform</a>
            </li>
            <li>
              <a href="https://starwars.fandom.com/wiki/Luke_Skywalker" target="_blank">
                Fandom's MediaWiki Platform
              </a>
            </li>
          </ul>
        </section>
      </section>

      <section className="job">
        <h3>Fireman Creative | Full Stack Software Engineer</h3>
        <h4>July 2015 - July 2016</h4>
        <ul>
          <li>Independently led several completed web projects from design to production </li>
          <li>Collaborated with clients and graphic designers to craft a consistent look and feel of web applications
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
            Built python-powered front-end application to display the largest molecule database
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
                Database App
              </a>
            </li>
          </ul>
        </section>
      </section>

      <section className="job">
        <h3>Pittsburgh Genetics | Full Stack Software Engineer</h3>
        <h4>October 2014 – January 2016</h4>
        <ul>
          <li>Built a genetic population simulator web application used by students and professors across the US
            <ul>
              <li>Teaching tool used across multiple universities</li>
              <li>Utilized multithreading web workers to speed up simultaneous math calculations</li>
            </ul>
          </li>
          <li>
            Utilized multi-threading web workers to speed up simultaneous
            simulations
          </li>
        </ul>
        <section>
          <h4>Links</h4>
          <ul>
            <li>
              <a href="https://eloquent-williams-76e898.netlify.app/">
                Simulator
              </a>
            </li>
          </ul>
        </section>
      </section>

      <section className="job">
        <h3>Independent Consultant | Full Stack Software Engineer</h3>
        <h4>January 2010 – Present</h4>
        <ul>
          <li>(2023) Actively working with Howard Hughes Medical Institute building tools for expanding understanding of genetics</li>
          <li> Worked with professional baseball teams, writers, students, and professors to build web applications
            <ul>
              <li>Built a CMS for San Francisco Giants affiliate team player management</li>
              <li>Built tools to automate audio uploads for a blogger</li>
            </ul>
          </li>

          <li> Advised faculty and staff at the University of Scranton as a Technical Consultant
            <ul>
              <li>Migrated years of content from custom websites to a CMS</li>
              <li>Created a proposal for which Learning Management System the University should use</li>
            </ul>
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
)

export default JobList
