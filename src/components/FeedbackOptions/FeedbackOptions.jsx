import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.entries(options).map(([key]) => {
        return (
          <Button
            key={key}
            onClick={() => {
              onLeaveFeedback(key);
            }}
          >
            {key}
          </Button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
