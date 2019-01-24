import { isClassExists } from '../../../test/utils';

const getAttribute = (element, attribute) => element.getAttribute(attribute);

const buttonLayoutDriverFactory = ({ element }) => {
  return {
    exists: () => !!element,
    doesComponentHasClass: className => isClassExists(element, className),
    getComponentAttribute: attribute => getAttribute(element, attribute),
  };
};

export default buttonLayoutDriverFactory;
