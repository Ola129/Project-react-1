import React from "react";
import "./Expert.css";

const Expert = ({ name, bio, image, gender }) => (
  <div className="expert_section">
    <img src={image} className="experts_photo" alt={name} />
    <div className={`expert_${gender}`}>
      <h3 className="significant_text padding_bottom">{name}</h3>
      <p className="text">{bio}</p>
    </div>
  </div>
);

export default Expert;
