import React, { useState } from 'react';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import "./Pdf.css"

export default function Pdfvieweer() {

  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
        <div id="pdfviewer" className="pdfviewmobile">
          <Viewer
            fileUrl="https://innovaciontec1223.com/wp-content/uploads/2021/09/Ugarte-y-Moscoso-370-Brochure-1.pdf"
          />
        </div>
      </Worker>
    </div>
  );

}