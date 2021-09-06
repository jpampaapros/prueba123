import React from 'react';
// import DocViewer, { PDFRenderer , PNGRenderer } from "react-doc-viewer";
// import PDFViewer from 'pdf-viewer-reactjs'

import { PDFObject }  from 'react-pdfobject'

export default function ViewerPdf() {

  // const docs = [
  //   { uri: "https://apros-qa.net.pe/armandoparedes/wp-content/uploads/2021/08/Pasaje-Laureles-Cuadernillo-de-planos.pdf" }
  // ];

  return (
    <section>
      {/*<DocViewer*/}
      {/*  pluginRenderers={[PDFRenderer, PNGRenderer]}*/}
      {/*  documents={docs} />*/}
      {/*<PDFViewer*/}
      {/*  document={{*/}
      {/*    url: 'https://apros-qa.net.pe/armandoparedes/wp-content/uploads/2021/08/Pasaje-Laureles-Cuadernillo-de-planos.pdf',*/}
      {/*  }}*/}
      {/*/>*/}
      <PDFObject url='https://apros-qa.net.pe/armandoparedes/wp-content/uploads/2021/08/Pasaje-Laureles-Cuadernillo-de-planos.pdf' />
      {/*<object*/}
      {/*  data="https://apros-qa.net.pe/armandoparedes/wp-content/uploads/2021/08/Pasaje-Laureles-Cuadernillo-de-planos.pdf"*/}
      {/*  type="application/pdf"*/}
      {/*  title="file"*/}
      {/*  width="480"*/}
      {/*  height="600"*/}
      {/*/>*/}
    </section>
  );

}