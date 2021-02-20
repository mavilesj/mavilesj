import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (

       
      <div>
        
        <div className="text-center">
        
        <h1 id="colorlib-logo"><a href="index.html">Miguel Aviles Jenkins</a></h1>
        <span className="email"><i className="icon-mail"></i> mavilesj@gmail.com</span>
        <nav id="colorlib-main-menu">
       
              <ul>
              <div style={{backgroundImage: 'url(images/img_bg.jpg)'}} />
                <li><a href="https://www.instagram.com/mavilesj/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/miguel-aviles-jenkins-96206bbb/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
              </ul>
            </nav>
       </div>
       
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Systems Information Engineer from Costa Rica</p>
                    <p></p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p> JavaScript,React,HTML,CSS, Python, PHP</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Mobile Dev</h3>
                    <p>Kotlin and Swift UI</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Software Testing</h3>
                    <p>ISTQB Certified Tester</p>
                    <p>Scrum Master Certified</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}