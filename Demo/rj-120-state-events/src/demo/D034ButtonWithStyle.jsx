import React from 'react';
import "./D034ButtonWithStyle.css";

export default function ButtonStyle(props) {

  const btnStyle= "btn-"+props.style;
  const classToApply =  "btn "+btnStyle; //should be either "btn btn-icon btn-primary" OR "btn btn-icon btn-danger"

  return (
    <div>
        <a href="" className={classToApply} ><i></i> {props.label}</a>       
    </div>
  );
}