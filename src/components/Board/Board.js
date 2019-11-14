import React from 'react';
import './Board.css';

const board = (props) => {
  if (props.activeQuarter === 1) {
    return(
      <ul className='Board bg-light text-dark p-0'>
        {props.quarter1.map((el,index) =>
          <li key={el + Math.random()}
              className="d-flex justify-content-between align-items-end pt-1 mx-2 border-bottom">
            {el}
            <button type="button"
                    className="btn btn-light"
                    onClick={props.deleteItem(index,'quarter_1')}>X</button>
          </li>)}
      </ul>
    );
  }
  if (props.activeQuarter === 2) {
    return(
      <ul className='Board bg-light text-dark p-0'>
        {props.quarter2.map((el,index) =>
          <li key={el + Math.random()}
              className="d-flex justify-content-between align-items-end pt-1 mx-2 border-bottom">
            {el}
            <button type="button"
                    className="btn btn-light"
                    onClick={props.deleteItem(index,'quarter_2')}>X</button>
          </li>)}
      </ul>
    );
  }
  if (props.activeQuarter === 3) {
    return(
      <ul className='Board bg-light text-dark p-0'>
        {props.quarter3.map((el,index) =>
          <li key={el + Math.random()}
              className="d-flex justify-content-between align-items-end pt-1 mx-2 border-bottom">
            {el}
            <button type="button"
                    className="btn btn-light"
                    onClick={props.deleteItem(index,'quarter_3')}>X</button>
          </li>)}
      </ul>
    );
  }
  if (props.activeQuarter === 4) {
    return(
      <ul className='Board bg-light text-dark p-0'>
        {props.quarter4.map((el,index) =>
          <li key={el + Math.random()}
              className="d-flex justify-content-between align-items-end pt-1 mx-2 border-bottom">
            {el}
            <button type="button"
                    className="btn btn-light"
                    onClick={props.deleteItem(index,'quarter_4')}>X</button>
          </li>)}
      </ul>
    );
  }
  return  <ul className='Board bg-light text-dark'></ul>
}

export default board;
