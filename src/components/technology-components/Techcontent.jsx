import React from 'react';

export default function Techcontent({content}) {
  return (
    <div>
      <h5>THE TERMINOLOGY...</h5>
        <h2>{content.name}</h2>
        <p>{content.description}</p>
    </div>
  )
}
