import React from 'react';
function Card(props){
    return(<div>
    <h1>{props.name}</h1>
    <img 
      alt="dorime" 
      src={props.source} />
    <p>dorime</p>
    </div>
    );
  }

  export default Card;