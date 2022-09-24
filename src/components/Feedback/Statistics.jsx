import React from 'react';

export const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <span className="Counter__value">{good}</span>
      <span className="Counter__value">{neutral}</span>
      <span className="Counter__value">{bad}</span>
    </div>
  );
};
