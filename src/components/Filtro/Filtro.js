import React from 'react';
import * as queryString from "query-string";
import { Link } from "gatsby"

export default function Filtro() {

/*
   const location = "https://localhost:8000&unopar=unos&dospar=secondParam"

  // const { parameter1, parameter2 } = queryString.parse("https://localhost:8000/?parameter1=firstParam&parameter2=secondParam");

  let parameter1 = "";
  let parameter2 = "";

  if((typeof window !== `undefined`)){

    // let location = window.location.href;

    let params = new URLSearchParams(location);
    parameter1 = params.get("unopar");
    parameter2 = params.get("dospar");
  }

  console.log(parameter1);
  console.log(parameter2);
* */


  var params = "";
  var parameter1 = "";

  if((typeof window !== `undefined`)){

  // Pasar un literal string
    var url = new URL('https://example.com?q=search&foo=1&bar=2');
  // Obtener la URL actual desde window.location
    var url2 = new URL(window.location);

  // Obtener parámetros de url.search y pasarlos al constructor
    params = new URLSearchParams(url.search);
    var params2 = new URLSearchParams(url2.search);

    parameter1 = params.get("q");
    console.log("params",url.search);

  // Pasar una secuencia
    var params3 = new URLSearchParams([["foo", 1],["bar", 2]]);

  // Pasar un registro
    var params4 = new URLSearchParams({"foo" : 1 , "bar" : 2});
  }


  return (
    <section>
      <pre>
        {JSON.stringify(parameter1)}
      </pre>
    </section>
  );

}