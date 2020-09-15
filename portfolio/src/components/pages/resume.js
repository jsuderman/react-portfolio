import React, { Component } from 'react';
import SinglePagePDFViewer from "../resumePDF/single-page";
import JSresume from "../../Justin-Suderman.pdf";

export default class Resume extends Component {
    render() {
        return (
            <div>
                <div>
                    <SinglePagePDFViewer pdf={JSresume} />
                </div>
                
            </div>
        )
    }
}
