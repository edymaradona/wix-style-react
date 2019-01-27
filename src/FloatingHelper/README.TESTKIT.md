# FloatingHelper component

> FloatingHelper is a popover component with specific content layout.

## FloatingHelper TestKit API

### Required Polyfills (For JSDom)

```javascript
import { requestAnimationFramePolyfill, rangePolyfill } from 'wix-style-react/dist/testkit/polyfills';

beforeAll(() => {
  rangePolyfill.install();
  requestAnimationFramePolyfill.install();
});
```

### Enzyme / ReactTestUtils
| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
|isOpened | | | |
|mouseEnter | | | |
|mouseLeave | | | |
|clickCloseButton | | |  |
|getHelperContentDriver| | | |
|getWidth| | | |
## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {floatingHelperTestkitFactory as floatingHelperTestkitFactory} from 'wix-style-react/dist/testkit';
  import {floatingHelperTestkitFactory as enzymeFloatingHelperTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';
  import waitForCond from 'wait-for-cond';

  function waitFor(predicate, msg) {
    return waitForCond(predicate, 2000, msg);
  }

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<FloatingHelper dataHook={dataHook} {..._props}>{children}</FloatingHelper>);
  const testkit = enzymeFloatingHelperTestkitFactory({wrapper, dataHook});

  //Do tests
  testkit.clickCloseButton();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div><FloatingHelper dataHook={dataHook} {..._props}>{children}</FloatingHelper></div>)
  );
  const testkit = floatingHeleperTestkitFactory({wrapper, dataHook});
  
  //Do tests
  testkit.clickCloseButton();
```
