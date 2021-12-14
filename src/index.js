// 1) Tener a react en scope
 //   import React from "react";
// 2) Tener ReactDOM en scope
    import ReactDOM from "react-dom";
// 3) Tener por lo menos un componente
    function app () {
      return "Hola Mundo"
    }
// 4) 
    ReactDOM.render(<app></app>);
