import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';


export default class Nav extends Component {
    render() {
        return (
            <div>
                <div style={{ height: '300px', position: 'relative' }}>
                    <Layout style={{ background: 'url(https://images.unsplash.com/photo-1553649084-3e42773ff0e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center / cover' }}>
                        <Header transparent title="Justin Suderman" style={{ color: 'white' }}>
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
                        <Content />
                    </Layout>
                </div>
            </div>
        )
    }
}
