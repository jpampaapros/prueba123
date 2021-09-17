import React from 'react';
// import FileViewer from 'react-file-viewer';
import "./Pdf.css";
import loadable from '@loadable/component'

const FileViewer = loadable(() => import('react-file-viewer'))

export default function Wiewpdf() {

  const file = "https://innovaciontec1223.com/wp-content/uploads/2021/09/Ugarte-y-Moscoso-370-Brochure-1.pdf"

  const type = 'pdf'

  return (
    <div>
      <FileViewer
        fileType={type}
        filePath={file} />
      {/*<iframe src="https://apros-qa.net.pe/armandoparedes/wp-content/uploads/2021/08/Pasaje-Laureles-Cuadernillo-de-planos.pdf" frameborder="0" width={100} height={500}></iframe>*/}
    </div>

    // <section>
    //   <script src="https://documentcloud.adobe.com/view-sdk/main.js"></script>
    //   <script type="text/javascript">
    //     document.addEventListener("adobe_dc_view_sdk.ready", function(){
    //     var adobeDCView = new AdobeDC.View({clientId: "9b0c67a3beb64d75b823d766392d3ab9", divId: "adobe-dc-view"});
    //     adobeDCView.previewFile({
    //     content:{location: {url: "https://apros-qa.net.pe/armandoparedes/wp-content/uploads/2021/08/Pasaje-Laureles-Cuadernillo-de-planos.pdf"}},
    //     metaData:{fileName: "Bodea Brochure.pdf"}
    //   }, {});
    //   });
    //   </script>
    // </section>
  );

}