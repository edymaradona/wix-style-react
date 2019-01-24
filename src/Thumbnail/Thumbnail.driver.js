import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { getStylableState } from '../../test/utils/stylable-uni-testkit';
import thumbnail from './Thumbnail.st.css';
import textDriverFactory from '../Text/Text.driver';
import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

const textTestkitFactory = testkitFactoryCreator(textDriverFactory);

export const thumbnailDriverFactory = base => {
  const byHook = hook => base.$(`[data-hook*="${hook}"]`);
  const getStyle = async (rule) =>
    (await base.attr('style')).match(new RegExp(`${rule}: (.*?);`))[1];

  const titleDriver = async () =>
    textTestkitFactory({
      wrapper: await byHook('thumbnail-title').getNative(),
      dataHook: 'thumbnail-title',
    });

  return {
    ...baseUniDriverFactory(base),

    /** Get thumbnail title */
    getTitle: async () => (await titleDriver()).getText(),

    /** Get thumbnail description */
    getDescription: () => byHook('thumbnail-description').text(),

    /** Get selected icon */
    getSelectedIcon: () => byHook('thumbnail-selected-icon'),

    getBackgroundImage: () => byHook('thumbnail-background-image'),

    /** Is Thumbnail selected */
    isSelected: async () => {
      const stylableState = await getStylableState(base, thumbnail, 'selected');
      return stylableState === 'true';
    },

    /** Is Thumbnail disabled */
    isDisabled: async () => {
      const stylableState = await getStylableState(base, thumbnail, 'disabled');
      return stylableState === 'true';
    },

    /** Get thumbnail image */
    getImage: () => byHook('thumbnail-image'),

    /** Get thumbnail width, if it's set through `width` prop */
    getWidth: async () => await getStyle('width'),

    /** Get thumbnail height, if it's set through `height` prop */
    getHeight: async () => await getStyle('height'),
  };
};
