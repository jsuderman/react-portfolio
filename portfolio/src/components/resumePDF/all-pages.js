import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function AllPages(props) {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const { pdf } = props;
    console.log(props)
    return (
        <Document
            file={pdf}
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}
        >
            {Array.from(new Array(numPages), (el, index) => (
                <Page style={{display: "center"}} key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
        </Document>
    );
}