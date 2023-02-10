import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className="card-container" key={props.monster.id}>
      <img
        alt={`monster ${props.monster.name}`}
        src={`https://robohash.org/${props.monster.id}?set=set2&size=300x300`}
      />
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  )
;