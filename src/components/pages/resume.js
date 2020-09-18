import React, { Component } from "react";
import SinglePagePDFViewer from "../resumePDF/single-page";


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import JustinSuderman from "../../Justin-Suderman.pdf";



export default class Resume extends Component {
    render() {
        return (
            <div className="resume-age" style={{textAlign: "center"}} >
              <h1>Resume</h1>
              <SinglePagePDFViewer pdf={JustinSuderman} />
        
              
            </div>
          );

    } 
  
}