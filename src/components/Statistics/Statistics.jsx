import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StatItem, StatText } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Box>
      <Box as="ul">
        <StatItem>
          <StatText>Good {good}</StatText>
        </StatItem>
        <StatItem>
          <StatText>Neutral {neutral}</StatText>
        </StatItem>
        <StatItem>
          <StatText>Bad {bad}</StatText>
        </StatItem>
        <StatItem>
          <StatText>Total {total()}</StatText>
        </StatItem>
        <StatItem>
          <StatText>Positive feedback {positivePercentage() + '%'}</StatText>
        </StatItem>
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
