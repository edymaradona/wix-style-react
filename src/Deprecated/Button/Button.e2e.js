import React from 'react';
import { eyesItInstance } from '../../../test/utils/eyes-it';
import { buttonTestkitFactory } from '../../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';

import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import { runFocusTests } from '../../common/Focusable/FocusableTestsE2E';

import { createStoryUrl } from '../../../test/utils/storybook-helpers';
import { storySettings } from '../../../stories/Deprecated/Button/storySettings';

const NO_DESCRIPTION = '';

describe('Backoffice Button', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.kind,
    story: storySettings.storyName,
  });

  const driver = buttonTestkitFactory({ dataHook: 'storybook-button' });
  const eyes = eyesItInstance();

  // Specific as opposed to 'Generic' tests like the Focusable tests.
  describe(NO_DESCRIPTION, () => {
    beforeEach(async () => {
      // TODO: We do browser.get() before EACH test in order to reset the focus.
      // implmement a generic solution in AutoExampleDriver that will do
      // propper reset of the focus, so we don't have to get the page,
      // and thus the test will run faster.
      await browser.get(storyUrl);
      await waitForVisibilityOf(driver.element(), 'Cannot find Button');
    });

    afterEach(() => autoExampleDriver.reset());
    eyes.it(
      'should be in initial state when renders with default',
      async () => {
        expect(await driver.isButtonDisabled()).toBe(false, 'isButtonDisabled');
        expect(await driver.isFocused()).toBe(false, 'isFocused');
      },
    );

    eyes.it('should alert on click', async () => {
      await autoExampleDriver.setProps({
        onClick: () => window.alert('clicked'), // eslint-disable-line no-alert
      });

      await driver.click();

      const alertDialog = browser.switchTo().alert();

      expect(await alertDialog.getText()).toBe('clicked');
      await alertDialog.dismiss();
    });

    eyes.it('should render disabled', async () => {
      await autoExampleDriver.setProps({ disabled: true });
      expect(await driver.isButtonDisabled()).toBe(true);
    });

    eyes.it('should render prefix & sufix', async () => {
      await autoExampleDriver.setProps({
        prefixIcon: <div>prefix</div>,
        suffixIcon: <div>suffix</div>,
      });
      expect(await driver.isPrefixIconExists()).toBe(true);
      expect(await driver.isSuffixIconExists()).toBe(true);
    });

    describe('FocusableDriver', () => {
      it('should be focused when clicked', async () => {
        await driver.click();
        expect(await driver.isFocused()).toBe(true);
      });
    });
  });

  describe('Generic', () => {
    runFocusTests(driver, storyUrl);
  });
});
