import React from 'react';
import CardStyle from './Card.css';

const card = (props) => {
  const quarterCard = (
    <div className="card CardStyle" style={{width: '100%'}}>
     <div className="card-body">
       <b className="card-title">{props.title}</b>
       <h6 className="card-subtitle mb-2 mt-5">{props.subtitle}</h6>
       <p className="card-text mt-5 ">You have {props.assignments} assignments</p>
     </div>
    </div>
  );
  const activeQuarterCard = (
    <div className="card CardStyle" style={{width: '100%', borderColor:'#FF6347'}}>
     <div className="card-body">
       <b className="card-title">{props.title}</b>
       <h6 className="card-subtitle mb-2 mt-5">{props.subtitle}</h6>
       <p className="card-text mt-5 ">You have {props.assignments} assignments</p>
     </div>
    </div>
  );

  const cardStyleResult = props.activeQuarterNumber == props.id ? activeQuarterCard : quarterCard

  return <>{cardStyleResult}</>
}

export default card;
