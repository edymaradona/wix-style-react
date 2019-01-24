import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import dropdownDriverFactory from './Dropdown.driver';
import Dropdown from './Dropdown';
import { dropdownTestkitFactory } from '../../testkit';
import { dropdownTestkitFactory as enzymeDropdownTestkitFactory } from '../../testkit/enzyme';
import { mount } from 'enzyme';
import { sleep } from 'wix-ui-test-utils/react-helpers';
import { createRendererWithDriver, cleanup } from '../../test/utils/unit';

describe('Dropdown', () => {
  const render = createRendererWithDriver(dropdownDriverFactory);
  const createDriver = jsx => render(jsx).driver;

  const getOptions = () => [
    { id: 0, value: 'Option 1' },
    { id: 1, value: 'Option 2' },
    { id: 2, value: 'Option 3', disabled: true },
    { id: 3, value: 'Option 4' },
    { id: 'divider1', value: '-' },
    { id: 'element1', value: <span style={{ color: 'brown' }}>Option 4</span> },
  ];

  afterEach(() => {
    cleanup();
  });

  describe('Uncontrolled SelectedId', () => {
    it('should select item with selectedId on init state', () => {
      const { inputDriver, dropdownLayoutDriver } = createDriver(
        <Dropdown options={getOptions()} initialSelectedId={0} />,
      );

      expect(dropdownLayoutDriver.isOptionSelected(0)).toBeTruthy();
      expect(inputDriver.getValue()).toBe('Option 1');
    });

    it('should select an item when clicked', () => {
      const { driver, dropdownLayoutDriver } = createDriver(
        <Dropdown options={getOptions()} />,
      );
      driver.focus();
      dropdownLayoutDriver.clickAtOption(0);
      expect(dropdownLayoutDriver.isOptionSelected(0)).toBeTruthy();
    });

    it('should enter the selected option text when selected', () => {
      const { driver, inputDriver, dropdownLayoutDriver } = createDriver(
        <Dropdown options={getOptions()} />,
      );
      driver.focus();
      dropdownLayoutDriver.clickAtOption(0);
      expect(inputDriver.getValue()).toBe('Option 1');
    });

    it('should close when clicking on input (header)', () => {
      const { dropdownLayoutDriver, inputDriver } = createDriver(
        <Dropdown options={getOptions()} />,
      );
      inputDriver.click();
      expect(dropdownLayoutDriver.isShown()).toBeTruthy();

      return sleep(200).then(() => {
        inputDriver.click();
        expect(dropdownLayoutDriver.isShown()).toBeFalsy();
      });
    });

    it('should be read only', () => {
      const { driver } = createDriver(<Dropdown options={getOptions()} />);
      expect(driver.isReadOnly()).toBeTruthy();
    });

    describe('initiallySelected', () => {
      it('should keep selectedId and value when initialSelectedId changed', () => {
        const { driver: _driver, rerender } = render(
          <Dropdown options={getOptions()} initialSelectedId={0} />,
        );
        const { dropdownLayoutDriver } = _driver;
        expect(dropdownLayoutDriver.isOptionSelected(0)).toBeTruthy();
        rerender(<Dropdown options={getOptions()} initialSelectedId={1} />);
        expect(dropdownLayoutDriver.isOptionSelected(0)).toBeTruthy();
      });
    });

    it(`should update selectedId when options change and id doesn't exist anymore`, () => {
      const { driver: _driver, rerender } = render(
        <Dropdown
          options={[{ id: 0, value: 'Option 1' }, { id: 1, value: 'Option 2' }]}
          initialSelectedId={0}
        />,
      );
      const { inputDriver, dropdownLayoutDriver } = _driver;

      expect(dropdownLayoutDriver.optionById(0).isSelected()).toBeTruthy();
      expect(inputDriver.getValue()).toBe('Option 1');
      rerender(<Dropdown options={[{ id: 1, value: 'Option 2' }]} />);

      expect(
        dropdownLayoutDriver.options().some(option => option.isSelected()),
      ).toBeFalsy();
      expect(inputDriver.getValue()).toBe('');
    });

    describe('PropTypes Validation', () => {
      let consoleErrorSpy;

      beforeEach(() => {
        consoleErrorSpy = jest
          .spyOn(global.console, 'error')
          .mockImplementation(jest.fn());
      });
      afterEach(() => {
        consoleErrorSpy.mockRestore();
      });

      it('should log error when selectedId and initialSelectedId are used together', () => {
        render(
          <Dropdown
            options={getOptions()}
            selectedId={0}
            initialSelectedId={0}
          />,
        );
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy).toBeCalledWith(
          expect.stringContaining(
            `'selectedId' and 'initialSelectedId' cannot both be used at the same time.`,
          ),
        );
      });
    });
  });

  describe('Controlled SelectedId', () => {
    it('should keep current selection and value when option clicked', () => {
      const { driver, dropdownLayoutDriver, inputDriver } = createDriver(
        <Dropdown options={getOptions()} selectedId={0} />,
      );

      driver.focus();
      dropdownLayoutDriver.clickAtOption(1);

      expect(dropdownLayoutDriver.isOptionSelected(0)).toBeTruthy();
      expect(inputDriver.getValue()).toBe('Option 1');
    });

    it('should have no selection if selectedId does not exist', () => {
      const { dropdownLayoutDriver } = createDriver(
        <Dropdown
          options={[{ id: 0, value: 'Option 1' }]}
          selectedId={99}
        />,
      );

      expect(dropdownLayoutDriver.optionById(0).isSelected()).toBeFalsy();
    });

    it('should update selection and value when selectedId changes', () => {
      const { driver: _driver, rerender } = render(
        <Dropdown options={getOptions()} selectedId={0} />,
      );
      const { dropdownLayoutDriver, inputDriver } = _driver;

      expect(dropdownLayoutDriver.isOptionSelected(0)).toBeTruthy();
      expect(inputDriver.getValue()).toBe('Option 1');

      rerender(<Dropdown options={getOptions()} selectedId={1} />);

      expect(dropdownLayoutDriver.isOptionSelected(1)).toBeTruthy();
      expect(inputDriver.getValue()).toBe('Option 2');
    });
  });

  describe('Rerender', () => {
    it('should keep value when unrelated prop updates', () => {
      const { driver: _driver, rerender } = render(
        <Dropdown options={getOptions()} />,
      );
      const { inputDriver } = _driver;

      inputDriver.enterText('foo');
      expect(inputDriver.getValue()).toBe('foo');
      rerender(<Dropdown options={getOptions()} status="error" />);

      expect(inputDriver.getValue()).toBe('foo');
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const dataHook = 'myDataHook';
      const wrapper = div.appendChild(
        ReactTestUtils.renderIntoDocument(
          <div>
            <Dropdown dataHook={dataHook} />
          </div>,
        ),
      );
      const dropdownTestkit = dropdownTestkitFactory({ wrapper, dataHook });
      expect(dropdownTestkit.driver.exists()).toBeTruthy();
      expect(dropdownTestkit.inputDriver.exists()).toBeTruthy();
      expect(dropdownTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      const dataHook = 'myDataHook';
      const wrapper = mount(<Dropdown dataHook={dataHook} />);
      const dropdownTestkit = enzymeDropdownTestkitFactory({
        wrapper,
        dataHook,
      });
      expect(dropdownTestkit.driver.exists()).toBeTruthy();
      expect(dropdownTestkit.inputDriver.exists()).toBeTruthy();
      expect(dropdownTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
    });
  });
});
