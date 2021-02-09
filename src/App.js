import React from "react";
import './styles.css';
import Login from './Login.js'
// function insertCard(contact){

//        return (
//        <Card 
//        id = {contact.id}
//        source = {contact.source}
//        name = {contact.name}  
//        email = {contact.email} 
//        // {/*precisa ser a mesma variavel do parametro...*/}
//         />
//        );
// }
export default function App() {
       const isloggedin = false;

       // function checkCondition(){
       //        if(isloggedin === true) {
       //               return   <h1>Welcome to The Home Page User</h1>;
       //        }else{
       //               return(
       //               <Login />
       //               );
       //        }
       // } 
       //mal otimizado
  return (
    <div className = "App">
           {isloggedin?<h1 id="home"> Olá Usuário</h1> : <Login />}     </div>
  
    );
}