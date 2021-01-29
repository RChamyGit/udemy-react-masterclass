import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var linguagem = "dorime";

var date = new Date();

var year = date.getFullYear(); //JSX


ReactDOM.render(
  <div>
    <App/>
  <h1 className="color" contentEditable= 'true'>My favourite computer languages</h1>
      <ol>
    <li>
      java
    </li>
    <li>php {linguagem}</li>
    <li>javascript</li>
    <li>c#</li>
  </ol>
  <p>{year}</p>
  </div>
  ,
  document.getElementById('root'));