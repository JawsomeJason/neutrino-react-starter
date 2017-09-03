import React, { PropTypes } from 'react';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

const defaultProps = {
  match: {
    params: {
      id: null,
    },
  },
};

const Project = ({ match }) => {
  const { params: { id } } = match;
  return (
    <div>
      <h1>Project</h1>
      <p>ID: {id}</p>
    </div>
  );
};

Project.propTypes = propTypes;
Project.defaultProps = defaultProps;

export default Project;
