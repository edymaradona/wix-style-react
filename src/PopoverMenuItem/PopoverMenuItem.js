import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import WixComponent from '../BaseComponents/WixComponent';
import Text, { WEIGHTS } from '../Text';

import styles from './PopoverMenuItem.scss';

class PopoverMenuItem extends WixComponent {
  static displayName = 'PopoverMenuItem';

  static propTypes = {
    icon: PropTypes.node,
    text: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['normal', 'large']),
    disabled: PropTypes.bool,
    divider: PropTypes.bool,
  };

  static defaultProps = {
    size: 'normal',
    disabled: false,
    divider: false,
  };

  render() {
    const isDisabled = this.props.disabled;
    const isDivider = this.props.divider;

    return isDivider ? (
      <li className={styles.rootDivider}>
        <div className={styles.divider} />
      </li>
      ) : (
      <li
        className={classnames(styles.root, {
          [styles.large]: this.props.size === 'large',
        })}
      >
        <button
          disabled={isDisabled}
          type="button"
          className={styles.button}
          onClick={this.props.onClick}
        >
          {this.props.icon && (
            <div className={styles.icon}>{this.props.icon}</div>
          )}

          <div className={styles.text}>
            <Text
              weight={WEIGHTS.normal}
              light={isDisabled}
              secondary={isDisabled}
              dataHook="menu-item-text"
              size={this.props.size === 'normal' ? 'small' : 'medium'}
            >
              {this.props.text}
            </Text>
          </div>
        </button>
      </li>
    );
  }
}

export default PopoverMenuItem;
