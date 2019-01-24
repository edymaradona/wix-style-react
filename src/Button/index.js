import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonOld from '../Backoffice/Button';
import ButtonNew from './Button';
import deprecationLog from '../utils/deprecationLog';
import { allValidators } from '../utils/propTypes';

// NOTE: This is a class an not an SFC because our Tooltip can NOT accept SFC as children.
class Button extends Component {
  static propTypes = {
    upgrade: allValidators(PropTypes.bool, (props, propName) => {
      if (!props[propName]) {
        deprecationLog(
          `Using "Button" with current API is deprecated. In order to upgrade to the new Button api just use "<Button upgrade/>" and follow "5.1 Button" changed api docs. IMPORTANT! - After upgrading, when you import the react/enzyme "buttonTestkitFactory", you will get an async testkit (all methods are async).`,
        );
      }
    }),
  };
  render() {
    const { upgrade, ...rest } = this.props;
    return (
      (this.props.upgrade && <ButtonNew {...rest} />) || <ButtonOld {...rest} />
    );
  }
}

Button.displayName = 'Button';

export default Button;
