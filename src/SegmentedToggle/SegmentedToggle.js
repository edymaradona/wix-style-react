import React from 'react';
import { string } from 'prop-types';
import { generateID } from '../utils/generateId';

import styles from './SegmentedToggle.st.css';
import ToggleButton from './ToggleButton/ToggleButton';

class SegmentedToggle extends React.Component {
  static displayName = 'SegmentedToggle';

  static propTypes = {
    dataHook: string,
    defaultChecked: string,
    name: string,
  };

  state = {
    checked: this.props.defaultChecked,
    name: this.props.name || generateID(),
  };

  _onChange = evt => {
    const { onChange } = this.props;
    this.setState({ checked: evt.target.value }, () =>
      onChange ? onChange(evt) : null,
    );
  };

  render() {
    const { dataHook, children, ...rest } = this.props;
    return (
      <div data-hook={dataHook} {...styles('root', {}, rest)}>
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            name: this.state.name,
            onChange: this._onChange,
            checked: child.props.value === this.state.checked,
          }),
        )}
      </div>
    );
  }
}

SegmentedToggle.Button = ToggleButton;
export default SegmentedToggle;
