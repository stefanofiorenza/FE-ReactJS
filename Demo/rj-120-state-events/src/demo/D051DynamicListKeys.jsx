import React from 'react';

  function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }
  
  export default function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={number.toString()}
                value={number} />
  
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }