import React from 'react';
import Button from 'wix-style-react/Button';
import { storySettings } from './storySettings';
import icons from '../utils/icons-for-story';

import ButtonStory from './examples';

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,
  component: Button,
  componentPath: '../../src/Button/Button.js',

  componentProps: {
    as: 'button',
    children: 'Button',
    skin: 'standard',
    priority: 'primary',
    size: 'medium',
  },

  exampleProps: {
    onClick: () => 'Clicked!',
    prefixIcon: icons,
    suffixIcon: icons,
    fullWidth: false,
    disabled: false,
    as: ['button', 'a', 'span', 'div'],
  },

  examples: <ButtonStory />,
};
