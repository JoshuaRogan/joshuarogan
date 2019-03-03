import React from "react"

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
            <li>Sklearn, tensorflow, pandas, AWs Glue</li>
          </ul>
        </li>
      </ul>
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
          <p>I wish I had this in an organized state but they exist in these repos: <a
            href="https://github.com/JoshuaRogan/mlb-pitch-app">MLB Pitch App</a> and <a href="https://github.com/mlb-ranking">MLB Stats 2</a></p>
      </section>

      <section>
        <h3>Political Article Analyzer</h3>
        <p>I find myself more and more frustrated in my search for fair news. The internet lends itself to creating "click-bait" like article titles which isn't great in the search for truth. I started creating a tool that can detect the political leaning of individual articles through natural language processing techniques. Currently, I am attempting to first analyze text and <a
          href="https://github.com/JoshuaRogan/lrc-articles/blob/master/scrapper/learning/sentiment_analyzer.py">determine the publisher</a> by computing term frequency–inverse document frequency among other things. Next, I would like to investigate sentiment analysis of images. I believe each news outlet choose less flattering images of their "opponent" and I'm curious if the data bears that out. </p>
        <p>I also discovered there is an API that attempts to do this: <a href="https://www.allsides.com/media-bias/media-bias-ratings" target="_blank">AllSides</a>. I find their ratings quite fair and will use that as a sample set to compare my results. </p>
      <p>Some of the code lives in this <a href="https://github.com/JoshuaRogan/lrc-articles/tree/master/scrapper">repo</a></p>
      </section>
    </section>
  </Layout>
)

export default IndexPage
