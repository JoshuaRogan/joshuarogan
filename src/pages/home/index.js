import React from "react"
import styled from 'styled-components';

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import JobList from "./jobList"
import "./home.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`josh`, `rogan`, `joshuarogan`]} />
    <JobList />

    <section>
      <h2>Skill Sets</h2>
      <table>
        <tr>
          <th>Tech</th>
          <th>Skill Set</th>
        </tr>
        <tr>
          <td> Frontend</td>
          <td>JavaScript, TypeScript, React, Redux, Webpack, Rollup, Immutable, Styled Components, Yarn, IndexedDB, LocalStorage, and WebWorkers</td>
        </tr>
        <tr>
          <td>Backend</td>
          <td>Java (Gradle, Guice, Jackson, Jersey, Jooq, Liquibase), Python, PHP (Laravel, Composer, WP), and Node.js</td>
        </tr>
        <tr>
          <td>Analytics</td>
          <td>Google Analytics, Mode, and Internal Data Warehouse</td>
        </tr>
          <tr>
          <td>Database</td>
          <td>MySQL, MongoDB, and Athena</td>
        </tr>
          <tr>
          <td>Ops</td>
          <td>Kubernetes, AWS, GCS, and Varnish Control Language (CDN language), Jenkins</td>
        </tr>
          <tr>
          <td>Data Engineering</td>
          <td>SKLearn, Tensorflow, Pandas, and Jupyter Notebook</td>
        </tr>
      </table>

    </section>

    <section>
      <h2>Personal Projects</h2>
      <section>
        <h3>MLB Stats Project</h3>
        <p>Baseball has been one of the strongest influences on my life. I grew up watching it nearly every night with my Dad and playing all year long (in some form) through high school. I love the all of the nuances in the sport. As a baseball evangelical, I spend every free moment taking in baseball. From the front office economics to the 9th inning ejection, I simply can’t get enough. This derangement (I wanted to say passion but my girlfriend disagreed), has led me down the analytics rabbit hole that each team’s front office is competing against one another to uncover some novel stat ignored by moneyball.
        </p>
          <h4>pitchFX Data Analysis</h4>
          <p>Major league baseball has been releasing data of every single pitch thrown for the last 5+ years. This dataset doesn't just contain the velocity and angle but includes things like launch angle, vertical break, horizontal break, release rotation, height the pitch was released at, exit velocity and much more. </p>
          <p>I've been looking for a project to utilized machine learning techniques and this dataset was begging to be analyzed. </p>
          <p>I had used some basic machine learning tools in the past such as linear support vector machines, and k-nearest neighbor's. But I really want to try to our neural networks. My initial findings indicated that LSVM outperformed neural networks in speed and accuracy. I'm skeptical of these results and wonder if I have a flaw in the setup of my neural network</p>
          <p>I started building a UI that allows the user to position a pitch in a virtual strike zone, give it velocity, breaking, and angle variables and the app will determine the likelihood of a hit. </p>
          <ul>
            <li> <a href="https://github.com/JoshuaRogan/mlb-pitch-app/blob/master/ml/guess_pitch_type.py" target="_blank">Guess Pitch Type (ML - NN)</a></li>
            <li> <a href="https://github.com/JoshuaRogan/mlb-pitch-app/blob/master/ml/guess_pitch_type_sklearn.py" target="_blank">Guess Pitch Type (ML - Sklearn)</a></li>
            <li> <a href="https://mlb-ranking.readthedocs.io/en/latest/results/first-draft.html" target="_blank">Jaccard Simliarity of Players</a></li>
          </ul>
      </section>

      <section>
        <h3>Political Article Analyzer</h3>
        <p>I find myself more and more frustrated in my search for fair news. The internet lends itself to creating "click-bait" like article titles which isn't great in the search for truth. I started creating a tool that can detect the political leaning of individual articles through natural language processing techniques. Currently, I am attempting to first analyze text and <a
          href="https://github.com/JoshuaRogan/lrc-articles/blob/master/scrapper/learning/sentiment_analyzer.py">determine the publisher</a> by computing term frequency–inverse document frequency among other things. Next, I would like to investigate sentiment analysis of images. I believe each news outlet choose less flattering images of their "opponent" and I'm curious if the data bears that out. </p>
        <p>I also discovered there is an API that attempts to do this: <a href="https://www.allsides.com/media-bias/media-bias-ratings" target="_blank">AllSides</a>. I find their ratings quite fair and will use that as a sample set to compare my results. </p>
        <p>Some of the code lives in this <a href="https://github.com/JoshuaRogan/lrc-articles/tree/master/scrapper">repo</a></p>
        <p>There is a small front end app I'm using to collect data: <a href="https://lrc.netlify.com/">Left-Right-Center Data Collection</a>. If you find an article very biased you can copy/paste the link and rate it. </p>
      </section>
    </section>
  </Layout>
)

export default IndexPage
