import {
  enzymeTestkitFactoryCreator,
  enzymeUniTestkitFactoryCreator,
} from 'wix-ui-test-utils/enzyme';

export {
  badgeTestkitFactory,
  stylableCounterBadgeTestkitFactory as counterBadgeTestkitFactory,
  toggleSwitchTestkitFactory,
  labelTestkitFactory,
  floatingHelperTestkitFactory,
  linearProgressBarTestkitFactory,
  circularProgressBarTestkitFactory,
} from 'wix-ui-backoffice/dist/src/testkit/enzyme';

import buttonDriverFactory from '../src/Deprecated/Button/Button.driver';
import { buttonDriverFactory as buttonNextDriverFactory } from '../src/Button/Button.driver';

export const buttonTestkitFactory = obj => {
  const hasUpgrade = obj.wrapper.find('[data-upgrade]').length;

  return hasUpgrade
    ? enzymeUniTestkitFactoryCreator(buttonNextDriverFactory)(obj)
    : enzymeTestkitFactoryCreator(buttonDriverFactory)(obj);
};
