/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../storiesHierarchy';
import { storySettings, testStories } from './storySettings';

import ExampleStandard from './ExampleStandard';
import ExampleControlled from './ExampleControlled';
import ExampleRtl from './ExampleRtl';

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(testStories.slider, () => (
  <div>
    <ExampleStandard />
    <ExampleRtl />
    <ExampleControlled />
  </div>
));
