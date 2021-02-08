import React from "react";
import './styles.css';
import favourite,{multiplyfav,dividefav} from "./Heading.js"; //qualquer nome q eu escolher aqui vai usar o default do heading
import Card from "./Card.js";
import contacts from "./contacts.js";


function insertCard(contact){

       return (
       <Card 
       id = {contact.id}
       source = {contact.source}
       name = {contact.name}  
       email = {contact.email}
        />
       );
}
export default function App() {
  return (
    <div className = "App">
           <h2> contacts map</h2>
           {contacts.map(insertCard)}
           {/* <h2> fim contacts map</h2>
      <h1> this is my {favourite}</h1>
      <h1> ayy multiplicado {multiplyfav()}</h1>
      <h2>Start editing to see some magic</h2>
      <h3>Ameno</h3> */}

       {/* <Card 
              source = "https://i.imgur.com/twfhKLM.jpeg"
              name = "Gato do React"  
              email = "rkchamy@hotmail.com"     
       />

       <Card source = "https://i.imgur.com/twfhKLM.jpeg"
              name = "latire"  
              email = "amenoAmenoLatire@Dorime.com"     
       />
       <Card 
            name = {contacts[0].name}  
            email = "amenoAmenoLatire@Dorime.com"
            source ={contacts[0].source}     
     /> */}
       / comentar aqui faz ele pirar em vez de usar posicao de index manual da pra fazer um loop /
     </div>
  
    );
}