import React, { PropTypes, Component } from 'react';
import { styles } from '.';

const displayName = '<%= pascalEntityName %>';
const propTypes = {};
const defaultProps = {};

class <%= pascalEntityName %> extends Component {
  constructor(props) {
    super(props);

    // this.state = {};
  }

  render() {
    <div className={styles.container}>
      <%= pascalEntityName %>
    </div>
  }
}
<%= pascalEntityName %>.displayName = displayName;
<%= pascalEntityName %>.propTypes = propTypes;
<%= pascalEntityName %>.defaultProps = defaultProps;

export default <%= pascalEntityName %>;
