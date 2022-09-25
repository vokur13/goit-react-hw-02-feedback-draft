import React from 'react';
import PropTypes from 'prop-types';
// import { SectionTitle } from './SectionTitle.styled';

export const Section = ({ title, children }) => {
  return (
    <section>
      <div>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
