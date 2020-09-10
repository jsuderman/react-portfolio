import React, { Component } from 'react';
import { Header, Navigation, Drawer, Grid, Cell, Layout } from 'react-mdl';
import "./style.css";

export default class Nav extends Component {
    render() {
        return (
            <div>
                <div style={{ height: '400px', position: 'relative' }}>
                    <Layout>
                        <Header className="layout-color" title={<span><span style={{ color: 'black' }}>Justin Suderman / </span><strong>Portfolio</strong></span>}>
                            <Navigation>
                                <a href="/">Home</a>
                                <a href="/about">About Me</a>
                                <a href="/projects">Projects</a>
                                <a href="/resume">Resume</a>
                                <a href="/contact">Contact</a>
                            </Navigation>
                        </Header>
                        <Drawer title="Justin Suderman">
                            <Navigation>
                                <a href="/">Home</a>
                                <a href="/about">About Me</a>
                                <a href="/projects">Projects</a>
                                <a href="/resume">Resume</a>
                                <a href="/contact">Contact</a>
                            </Navigation>
                        </Drawer>
                        <div>
                            <Grid className="home-grid">
                                <Cell col={12}>
                                    <div className="headline-text">
                                        <h1>Full Stack Web Developer</h1>
                                        {/* <hr /> */}
                                        <p> HTML | CSS | Javascript | ReactJS | NodeJS | Express | mySQL | MongoDB </p>
                                        <div className="social-links">
                                            {/*git hub link*/}
                                            <a href="https://github.com/jsuderman/" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-github-square fa-5x" aria-hidden="true"></i>
                                            </a>
                                            {/*linkedin link*/}
                                            <a href="https://www.linkedin.com/in/justin-suderman-a411471a6/" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-linkedin-square fa-5x" aria-hidden="true"></i>
                                            </a>
                                            {/*twitter link*/}
                                            <a href="https://www.twitter.com/justinsuderman" target="_blank" rel="noopener noreferrer">
                                                <i class="fa fa-twitter-square fa-5x" aria-hidden="true"></i>
                                            </a>

                                        </div>
                                    </div>
                                </Cell>
                            </Grid>
                        </div>
                    </Layout>

                </div>


            </div>
        )
    }
}
