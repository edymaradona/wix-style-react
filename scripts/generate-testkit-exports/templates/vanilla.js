import ReactDOM from 'react-dom';

import {
  testkitFactoryCreator,
  uniTestkitFactoryCreator,
} from 'wix-ui-test-utils/vanilla';

export {
  badgeTestkitFactory,
  stylableCounterBadgeTestkitFactory as counterBadgeTestkitFactory,
  toggleSwitchTestkitFactory,
  labelTestkitFactory,
  floatingHelperTestkitFactory,
  linearProgressBarTestkitFactory,
  circularProgressBarTestkitFactory,
} from 'wix-ui-backoffice/dist/src/testkit';

import buttonDriverFactory from '../src/Deprecated/Button/Button.driver';
import { buttonDriverFactory as buttonNextDriverFactory } from '../src/Button/Button.driver';

export const buttonTestkitFactory = obj => {
  const domInstance = ReactDOM.findDOMNode(obj.wrapper);
  const hasUpgrade = domInstance.querySelector('[data-upgrade]');

  return hasUpgrade
    ? uniTestkitFactoryCreator(buttonNextDriverFactory)(obj)
    : testkitFactoryCreator(buttonDriverFactory)(obj);
};
