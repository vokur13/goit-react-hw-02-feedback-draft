import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.entries(options).map(([key]) => {
        return (
          <button
            key={key}
            type="button"
            onClick={() => {
              onLeaveFeedback(key);
            }}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
