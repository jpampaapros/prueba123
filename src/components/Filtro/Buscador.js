import React, { useState, useEffect } from "react"
import { navigate } from "gatsby-link"

export default function Buscador() {

  const arr = ["uno", "dos", "uno", "tres", "cuatro", "cinco", "seis", "uno"]
  const [numeros, setNumeros] = useState([]);

  // const filtro = () => {
  //   let newarr = arr.filter(number => number === "uno");
  //   setNumeros(newarr);
  // }


  const formSend = () => {
    navigate("/?q=dos");
  }


  useEffect(() => {
    if((typeof window !== `undefined`)){
      const urlPageSearch = window.location.search;
      const params = new URLSearchParams(urlPageSearch);
      const parameter1 = params.get("q");
      if(params && parameter1){
        console.log()
        let newarr = arr.filter(number => number === parameter1);
        setNumeros(newarr);
      }else{
        setNumeros(arr)
      }
    }
  },[numeros])



  return (
    <section>
      {/*<button onClick={filtro}>Filtro</button>*/}
      <button onClick={formSend}>Prueba</button>
      <ul>
        {
          numeros.map((ele,i) => (
            <li key={i}>{ele}</li>
          ))
        }
      </ul>
    </section>
  );

}