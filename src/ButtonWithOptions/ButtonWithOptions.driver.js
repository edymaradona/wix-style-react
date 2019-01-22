import buttonDriverFactory from '../Deprecated/Button/Button.driver.js';
import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';

const ButtonWithOptionsDriverFactory = ({ element }) => {
  const buttonWrapper = element.querySelector(
    '[data-hook=buttonWithOptions-button-wrapper]',
  );
  const dropdownLayout = element.querySelector(
    '[data-hook=buttonWithOptions-dropdownLayout]',
  );
  const buttonDriver = buttonDriverFactory({
    element: buttonWrapper.childNodes[0],
    wrapper: buttonWrapper,
  });
  const dropdownLayoutDriver = dropdownLayoutDriverFactory({
    element: dropdownLayout,
  });

  const driver = {
    exists: () => !!element,
    outsideClick: () =>
      document.body.dispatchEvent(new Event('mouseup', { cancelable: true })),
  };
  return { driver, buttonDriver, dropdownLayoutDriver };
};

export default ButtonWithOptionsDriverFactory;
