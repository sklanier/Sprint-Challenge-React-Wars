import React from 'react';
import './StarWars.css';

const Character = (props) => {
  return (
    <div className="card">
      <h1 class="cool-name">{props.obj.name}</h1>
      <div>
        <div>
          <h3 class="cool-title">Birth Year:</h3> 
          <span class="cool-text">{props.obj.birth_year}</span>
        </div>       
        {/* <div>
          <h3>Home World:</h3> 
          <span>{props.obj.homeworld}</span>
        </div> */}
        <div>
          <h3 class="cool-title">Eye Color:</h3>
          <span class="cool-text">{props.obj.eye_color}</span>
        </div>
        <div>
          <h3 class="cool-title">Gender:</h3>
          <span class="cool-text">{props.obj.gender}</span>
        </div>
        <div>
          <h3 class="cool-title">Hair Color:</h3>
          <span class="cool-text">{props.obj.hair_color}</span>
        </div>
        <div>
          <h3 class="cool-title">Height:</h3>
          <span class="cool-text">{props.obj.height}</span>
        </div>
        <div>
          <h3 class="cool-title">Mass:</h3>
          <span class="cool-text">{props.obj.mass}</span>
        </div>
        <div>
          <h3 class="cool-title">Skin Color:</h3>
          <span class="cool-text">{props.obj.skin_color}</span>
        </div>
      </div>
    </div>
  )
}

export default Character; 