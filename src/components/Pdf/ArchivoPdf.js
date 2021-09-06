import React from 'react';
import {decode as base64_decode, encode as base64_encode} from 'base-64';

export default function ArchivoPdf() {

  const archivoUrl = "https://apros-qa.net.pe/armandoparedes/wp-content/uploads/2021/08/Pasaje-Laureles-Cuadernillo-de-planos.pdf";

  let encoded = base64_encode(archivoUrl);

  // let decoded = base64_decode(encoded);

  return (
    <section>
      <pre>{JSON.stringify(encoded)}</pre>
      {/*<pre>{JSON.stringify(decoded)}</pre>*/}
      <iframe src={base64_decode(encoded)} frameborder="0" style={{height: '800px',width: '800px', outline: '1px solid red'}}></iframe>
    </section>
  );

}