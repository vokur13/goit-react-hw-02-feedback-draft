import styled from 'styled-components';

export const StatItem = styled.li`
  padding: ${props => `${props.theme.space[2]}px`};
  &:not(:last-child) {
    margin-bottom: ${props => `${props.theme.space[2]}px`};
  }
`;

export const StatText = styled.p`
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.normal};
`;
