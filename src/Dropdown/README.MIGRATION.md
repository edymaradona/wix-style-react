# Dropdown Migration Guide

## Migration from 5.x.x to 6.x.x (upgrade prop)

Previously, `selectedId` prop was used as hybrid of Controlled and Uncontrolled modes.
You could update the `selectedId` (Controlled), but when an option is selected, it would immediately set the state.

### Steps to upgrade

- Pass `upgrade=true` (`<Dropdown upgrade/>`)
- If you have been using `<Dropdown/>` as a controlled component, you are good to go.
- If you were just using `selectedId` to set the initially selected option, then you need to pass the option id in the `initialSelectedId` prop instead.

> The new API will be affective from the next major version.

### Documentation

See the [`<Dropdown/>` component docs](https://wix-wix-style-react.surge.sh/?selectedKind=Components&selectedStory=Dropdown&full=0&addons=0&stories=1&panelRight=0) for examples and API reference.
