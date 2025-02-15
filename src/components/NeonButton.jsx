import React from 'react';
import './NeonButton.css';

function NeonButton({ onClick, children }) {
  return (
    <button className="neon-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default NeonButton;
