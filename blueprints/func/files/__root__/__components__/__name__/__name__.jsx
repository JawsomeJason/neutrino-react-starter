import React from 'react';
// import React, { PropTypes } from 'react';
import { styles } from '.';

const displayName = '<%= pascalEntityName %>';
const propTypes = {};
const defaultProps = {};

const <%= pascalEntityName %> = () => (
  <div className={styles.container}>
    <%= pascalEntityName %>
  </div>
);

<%= pascalEntityName %>.displayName = displayName;
<%= pascalEntityName %>.propTypes = propTypes;
<%= pascalEntityName %>.defaultProps = defaultProps;

export default <%= pascalEntityName %>;
