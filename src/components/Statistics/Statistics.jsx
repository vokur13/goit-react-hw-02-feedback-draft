import React from 'react';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage = 0,
}) => {
  return (
    <div>
      <h3>Statistics</h3>
      <div>
        <ul>
          <li>
            <p>Good {good}</p>
          </li>
          <li>
            <p>Neutral {neutral}</p>
          </li>
          <li>
            <p>Bad {bad}</p>
          </li>
          <li>
            <p>Total {total()}</p>
          </li>
          <li>
            <p>Positive feedback {positivePercentage() + '%'}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
