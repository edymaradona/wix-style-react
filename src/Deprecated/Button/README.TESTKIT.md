# Button Testkits

> General Buttons

## Button TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| getButtonTextContent | - | string | returns the button text |
| isButtonDisabled | - | bool | fulfilled if button disabled |
| isPrefixIconExists | - | bool | fulfilled if button prefix icon appeared |
| isSuffixIconExists | - | bool | fulfilled if button suffix icon appeared |
| click | - | - | clicks on the button |
| exists (Only in Unit Test) | - | bool | fulfilled if element in the DOM |
| element (Only in E2E) | - | element | returns the driver element |

### Puppeteer

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| element | - | element | returns the element |
| click | - | - | clicks on the button |
| getButtonTextContent | - | string | returns the button text |

## Usage Example

> Unit Testing Example
```javascript
  import React from 'react';
  import {buttonTestkitFactory} from 'wix-style-react/dist/testkit';
  import {buttonTestkitFactory as enzymeButtonTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div/><Button dataHook={dataHook}/></div>);
  const testkit = enzymeButtonTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div/><Button dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = buttonTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.exists()).toBeTruthy();
```


> E2E example
```javascript
  //Element should be rendered with a data-hook into the DOM
  <Button dataHook='myDataHook'/>

  /**********************
   Protractor example
  **********************/

  import {buttonTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';

  //Create an element testkit via the data-hook attribute
  const testkit = buttonTestkitFactory({dataHook: 'myDataHook'});

  browser.get(appUrl);  //Your application url

  waitForVisibilityOf(testkit.element(), 'Cannot find Button')
     .then(() => {
       //Do tests
        expect(testkit.element().isDisplayed()).toBeTruthy();
     });
```

```javascript
/**********************
   Puppeteer example
  **********************/

  import puppeteer from 'puppeteer';
  import {buttonTestkitFactory} from 'wix-style-react/dist/testkit/puppeteer';

  //puppeteer setup
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //Create an element testkit via the data-hook attribute
  const testkit = await buttonTestkitFactory({dataHook: 'myDataHook', page});

  await page.goto(appUrl); //Your application url

  expect(await testkit.getButtonTextContent()).to.equal('my button');
```
