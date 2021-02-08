import React from 'react';
import "./styles.css";
function Card(props){
    return(<div>
      <h1>{props.id}</h1>
      <h1>{props.name}</h1>
        <img 
          alt="sample text" 
          src={props.source} />
      <p>{props.email}</p>
    </div>
    );
  }

  export default Card;