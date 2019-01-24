# ButtonLayout Testkits

> Button layout that can wrap any other component

## ButtonLayout TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| doesComponentHasClass | string | boolean | true if the element have a class <arg> |
| isButtonDisabled | - | bool | fulfilled if button disabled |
| getComponentAttribute | string | attribute | get <arg> attribute |
| exists | - | bool | fulfilled if element in the DOM |
| setProps | json | element | returns a clone of this element with the new props from the json | 

## Usage Example

> Unit Testing Example
```javascript
  import React from 'react';
  import {buttonLayoutTestkitFactory} from 'wix-style-react/dist/testkit';
  import {buttonLayoutTestkitFactory as enzymeButtonLayoutTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><ButtonLayout dataHook={dataHook}><Children/></ButtonLayout></div>);
  const testkit = enzymeButtonLayoutTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><ButtonLayout dataHook={dataHook}><Children/></ButtonLayout></div>, {dataHook})
  );
  const testkit = buttonLayoutTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();
```
