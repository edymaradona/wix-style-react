import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';
import headerDriverFactory from '../Card/Header/Header.driver';
import { badgeDriverFactory } from 'wix-ui-backoffice/dist/src/components/Badge/Badge.driver';
import { findByHook } from '../../test/utils';
import deprecationLog from '../utils/deprecationLog';

const statsWidgetDriverFactory = ({ element }) => {
  const getBadgeDriver = elm => badgeDriverFactory({ element: elm });

  const getStatistic = index =>
    findByHook(element, 'stats-widget-content-wrapper').childNodes[index];

  const headerElement = findByHook(element, 'stats-widget-title');

  const headerDriver = headerDriverFactory({
    wrapper: element,
    element: headerElement,
  });

  return {
    exists: () => !!element,

    titleText: () => headerDriver.title(),

    isStatisticsContentExists: () =>
      !!findByHook(element, 'stats-widget-content-wrapper'),

    isEmptyStateExists: () => !!findByHook(element, 'stats-widget-empty-state'),

    getStatisticTitle: index =>
      findByHook(getStatistic(index), 'statistics-item-title').textContent,

    getStatisticSubTitle: index =>
      findByHook(getStatistic(index), 'statistics-item-subtitle').textContent,

    getStatisticPercentValue: index =>
      findByHook(getStatistic(index), 'percent-value').textContent,

    isNegativePercentValue: index =>
      getBadgeDriver(
        findByHook(getStatistic(index), 'percent-value'),
      ).getSkin() === 'danger',

    getStatisticPercentClass: index => {
      const percentIcon = findByHook(getStatistic(index), 'percent-icon');
      return (percentIcon && percentIcon.getAttribute('data-class')) || '';
    },

    getFilterButtonDriver: dataHook => ({
      dropdownLayoutDriver: dropdownLayoutDriverFactory({
        element: findByHook(
          findByHook(element, dataHook),
          'dropdown-base-dropdownlayout',
        ),
      }),
    }),
  };
};

export default statsWidgetDriverFactory;
