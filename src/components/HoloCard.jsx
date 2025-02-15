import React from 'react';
import './HoloCard.css';

function HoloCard({ title, children }) {
  return (
    <div className="holo-card">
      <h2>{title}</h2>
      <div className="card-content">{children}</div>
    </div>
  );
}

export default HoloCard;
