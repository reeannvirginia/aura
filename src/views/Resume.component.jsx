import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const pdf = process.env.PUBLIC_URL + '/assets/resume.pdf';

  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log(numPages, 'success');
  };

  return (
    <div className="resume">
      <Document file={pdf} onLoadError={e => console.error('something', e)} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>
      <a href={pdf}>Click here for my pdf</a>
    </div>
  );
};

export default Resume;
