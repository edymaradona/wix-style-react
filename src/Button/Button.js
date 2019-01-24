import React, { Component } from 'react';
import { ButtonNext } from 'wix-ui-core/button-next';
import cx from 'classnames';
import { button } from 'wix-ui-core/themes/backoffice';
import { string, node, oneOf, element, bool, func } from 'prop-types';

class Button extends Component {
  static displayName = 'Button';

  static propTypes = {
    /** Additional classes */
    className: string,
    /** Skins of Button content */
    skin: oneOf([
      'standard',
      'inverted',
      'destructive',
      'premium',
      'dark',
      'light',
      'transparent',
    ]),
    /** Underline of Button content */
    priority: oneOf(['primary', 'secondary']),
    /** Size of Button content */
    size: oneOf(['tiny', 'small', 'medium', 'large']),
    /** Click event handler  */
    onClick: func,
    /** Sets button width to 100% */
    fullWidth: bool,
    /** Element based icon (svg, image etc.) */
    suffixIcon: element,
    /** Element based icon (svg, image etc.) */
    prefixIcon: element,
    /** Applies disabled styles */
    disabled: bool,
    /** String based node */
    children: node,
    /** String based data hook */
    dataHook: string,
    /** Flag to enable new button API. IMPORTANT! - After upgrading, when you import the react/enzyme "buttonTestkitFactory", you will get an async testkit (all methods are async)*/
    upgrade: bool,
  };

  static defaultProps = {
    skin: 'standard',
    priority: 'primary',
    size: 'medium',
    upgrade: true,
  };

  render() {
    const {
      skin,
      priority,
      size,
      fullWidth,
      children,
      className,
      dataHook,
      upgrade,
      ...rest
    } = this.props;

    const fluid = fullWidth ? 'fullWidth' : '';
    const classNames = cx(className, button(fluid, skin, priority, size));

    return (
      <ButtonNext
        {...rest}
        data-upgrade={upgrade}
        data-hook={dataHook}
        className={classNames}
      >
        {children}
      </ButtonNext>
    );
  }
}

export default Button;
