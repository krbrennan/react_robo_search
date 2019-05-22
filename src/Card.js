import React from 'react';


const Card = (props) => {
  return (
    <div className='tc bg-light-blue dib br3 pa4 ma2 grow bw2 shadow-5'>
    <div className='pa2 ma2'>
      <img alt='missing_bot' src={ `https://robohash.org/${props.id}?size=250x200` }/>
          <h2>{props.name}</h2>
          <p>{props.email}</p>
    </div>
    </div>
  );
}

export default Card;
