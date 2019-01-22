import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../BaseComponents/WixComponent';
import Heading from '../Heading';
import Text from '../Text';
import classNames from 'classnames';
import CloseButton from '../CloseButton';

import Button from '../Deprecated/Button';

import * as styles from './MessageBoxMarketerialLayout.scss';

class MessageBoxMarketerialLayout extends WixComponent {
  render() {
    const {
      title,
      content,
      primaryButtonLabel,
      primaryButtonDisabled,
      secondaryButtonLabel,
      onPrimaryButtonClick,
      onSecondaryButtonClick,
      imageUrl,
      onClose,
      theme,
      primaryButtonTheme,
      imageComponent,
      footerBottomChildren,
    } = this.props;

    const headerClasses = classNames({
      [styles.header]: true,
      [styles[`header-${theme}`]]: true,
    });

    return (
      <div className={styles.root}>
        <div className={headerClasses}>
          <div className={styles.close}>
            <CloseButton
              dataHook="close-button"
              size="medium"
              onClick={onClose}
              skin="lightFilled"
            />
          </div>
          {imageComponent ? (
            <div className={styles.headerImageComponent}>{imageComponent}</div>
          ) : (
            <div className={styles.headerImage}>
              <img src={imageUrl} data-hook="header-image" />
            </div>
          )}
        </div>
        <div className={styles.title} data-hook="message-box-title">
          <Heading appearance="H1">{title}</Heading>
        </div>
        <div className={styles.content}>
          <Text size="medium" weight="thin">
            {content}
          </Text>
        </div>
        <div className={styles.buttonsContainer}>
          {primaryButtonLabel ? (
            <div className={styles.primaryButtonContainer}>
              <Button
                theme={`full${primaryButtonTheme || theme}`}
                onClick={onPrimaryButtonClick}
                dataHook="primary-button"
                disabled={primaryButtonDisabled}
              >
                {primaryButtonLabel}
              </Button>
            </div>
          ) : null}
          {secondaryButtonLabel && !footerBottomChildren ? (
            <div className={styles.secondaryButtonContainer}>
              <span
                onClick={onSecondaryButtonClick}
                data-hook="secondary-button"
              >
                {secondaryButtonLabel}
              </span>
            </div>
          ) : null}
        </div>
        {footerBottomChildren ? (
          <div
            data-hook="footer-layout-bottom-children"
            className={styles.bottomChildren}
            children={footerBottomChildren}
          />
        ) : null}
      </div>
    );
  }
}

MessageBoxMarketerialLayout.propTypes = {
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  primaryButtonLabel: PropTypes.string,
  primaryButtonDisabled: PropTypes.bool,
  secondaryButtonLabel: PropTypes.string,
  onPrimaryButtonClick: PropTypes.func,
  onSecondaryButtonClick: PropTypes.func,
  imageUrl: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  imageComponent: PropTypes.node,
  footerBottomChildren: PropTypes.node,
  theme: PropTypes.oneOf(['blue', 'purple']),
  primaryButtonTheme: PropTypes.oneOf(['blue', 'purple']),
};

MessageBoxMarketerialLayout.defaultProps = {
  theme: 'blue',
};

export default MessageBoxMarketerialLayout;
