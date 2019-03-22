import React from 'react';
import './StarWars.css';

const Character = (props) => {
  return (
    <div className="card">
      <h1>{props.obj.name}</h1>
      <div>
        <div>
          <h3>Birth Year:</h3> 
          <span class="cool-text">{props.obj.birth_year}</span>
        </div>       
        {/* <div>
          <h3>Home World:</h3> 
          <span>{props.obj.homeworld}</span>
        </div> */}
        <div>
          <h3>Eye Color:</h3>
          <span class="cool-text">{props.obj.eye_color}</span>
        </div>
        <div>
          <h3>Gender:</h3>
          <span class="cool-text">{props.obj.gender}</span>
        </div>
        <div>
          <h3>Hair Color:</h3>
          <span class="cool-text">{props.obj.hair_color}</span>
        </div>
        <div>
          <h3>Height:</h3>
          <span class="cool-text">{props.obj.height}</span>
        </div>
        <div>
          <h3>Mass:</h3>
          <span class="cool-text">{props.obj.mass}</span>
        </div>
        <div>
          <h3>Skin Color:</h3>
          <span class="cool-text">{props.obj.skin_color}</span>
        </div>
      </div>
    </div>
  )
}

export default Character; 