import React from 'react';
import './StarWars.css';
import Character from './Character';

// Making forms "controlled components"
// 1. add a property on state that controls each input
// 2. On the input, add a "value" attribute - pass in the state property to the value attr
// 3. Add onChange, and pass in the change handler function
// 4. on the input, add a "name" attr that is the same as the state property that is controlling that input

const CharForm = (props) => {
  return (
      <div >
          <div id="form">{props.value.map(item => <Character obj={item} key={item.created}/>)}</div>    
      </div>
  )
}

export default CharForm; 