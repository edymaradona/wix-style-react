import React from 'react';
import Slider from './ControlledSlider';
import { storySettings } from './storySettings';

const style = {
  padding: '0 5px 55px',
  width: '500px',
};

export default () => (
  <div>
    <div style={style}>
      Single handle
      <Slider dataHook={storySettings.dataHook} value={[3]} min={1} max={10} />
    </div>
    <div style={style}>
      Multiple handles
      <Slider
        dataHook={`${storySettings.dataHook}-multiple`}
        value={[3, 4, 5]}
        min={1}
        max={10}
      />
    </div>
  </div>
);
