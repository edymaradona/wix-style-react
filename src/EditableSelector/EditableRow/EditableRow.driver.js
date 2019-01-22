import inputDriverFactory from '../../Input/Input.driver';
import buttonDriverFactory from '../../Deprecated/Button/Button.driver';

const editableRowDriverFactory = ({ element }) => {
  const inputDriver = inputDriverFactory({
    element: element.querySelector('[data-hook="edit-row-input"]'),
    wrapper: element,
  });
  const approveBtnDriver = buttonDriverFactory({
    element: element.querySelector('[data-hook="edit-row-approve-button"]'),
    wrapper: element,
  });
  const cancelBtnDriver = buttonDriverFactory({
    element: element.querySelector('[data-hook="edit-row-cancel-button"]'),
    wrapper: element,
  });

  return {
    exists: () => !!element,
    isInputFocused: () => inputDriver.isFocus(),
    clickApprove: () => approveBtnDriver.click(),
    isApproveDisabled: () => approveBtnDriver.isButtonDisabled(),
    clickCancel: () => cancelBtnDriver.click(),
    getText: () => inputDriver.getValue(),
    setText: text => inputDriver.enterText(text),
    keyDown: keyCode => inputDriver.trigger('keyDown', { keyCode }),
  };
};

export default editableRowDriverFactory;
