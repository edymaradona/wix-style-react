import React from 'react';
import { storySettings } from './storySettings';
import GoogleAddressInput from '../../src/GoogleAddressInput';
import clients from '../../src/clients';
import GoogleAPILoader from '../utils/Components/GoogleAPILoader';
import LiveCodeExample from '../utils/Components/LiveCodeExample';

const InFormExample = `
class ExampleWithFormField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  render() {
    return (
      <FormField label="GoogleAddressInput component">
        <GoogleAddressInput
          value={this.state.value}
          onChange={e => this.setState({value: e.target.value})}
          onSet={e => this.setState({value: e.originValue})}
          Client={clients.GoogleMapsClient}
        />
      </FormField>
    )
  }
}
render(<ExampleWithFormField/>);
`;

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: GoogleAddressInput,
  componentPath: '../../src/GoogleAddressInput/GoogleAddressInput.js',

  componentWrapper: ({ component }) => (
    <GoogleAPILoader>{component}</GoogleAPILoader>
  ),
  componentProps: setProps => ({
    dataHook: storySettings.dataHook,
    Client: clients.GoogleMapsClient,
    value: '',
    onChange: e => setProps({ value: e.target.value }),
    onSet: e => setProps({ value: e.originValue }),
    placeholder: 'Enter Address...',
  }),

  examples: (
    <GoogleAPILoader>
      <LiveCodeExample
        title="Usage in forms (with FormField)"
        initialCode={InFormExample}
        autoRender={false}
      />
    </GoogleAPILoader>
  ),
};
