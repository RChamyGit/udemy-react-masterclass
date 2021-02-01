import React from "react";
import './styles.css';
import favourite,{multiplyfav,dividefav} from "./Heading.js"; //qualquer nome q eu escolher aqui vai usar o default do heading
import Card from "./Card.js";

export default function App() {
  return (
    <div className = "App">
      <h1> this is my {favourite}</h1>
      <h1> ayy multiplicado {multiplyfav()}</h1>
      <h2>Start editing to see some magic</h2>
      <h3>Ameno</h3>

     <Card source = "https://i.imgur.com/twfhKLM.jpeg"
            name = "Gato do React"  
            email = "rkchamy@hotmail.com"     
     />

<Card source = "https://i.imgur.com/twfhKLM.jpeg"
            name = "latire"  
            email = "amenoAmenoLatire@Dorime.com"     
     />
     </div>
  
    );
}