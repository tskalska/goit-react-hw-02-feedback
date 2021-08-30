import React from 'react';

export default function Section (props){
  return (
    <div>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </div>)
}
