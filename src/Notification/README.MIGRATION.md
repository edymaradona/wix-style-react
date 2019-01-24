# Notification Migration Guide

## Migration from 5.x.x to 6.x.x (upgrade prop)

Previously, when `type != global` and no `timeout` prop was passed, the notification would be shown for 6 seconds before it was hidden.
There was no way to make persistent notification when `type != global`

### Steps to upgrade

- Pass `upgrade=true` (`<Notification upgrade/>`)
- If you didn't passed `timeout` prop and expected the notification to be hidden after 6 seconds, you should pass `timeout = Notification.DEFAULT_TIMEOUT`.
- While you're at it, rename `timeout` -> `autoHideTimeout`.

> The new API will be affective from the next major version.

### Documentation

See the [`<Notification/>` component docs](https://wix-wix-style-react.surge.sh/?selectedKind=8.%20Notification%20Bars&selectedStory=8.1%20Notification&full=0&addons=0&stories=1&panelRight=0) for examples and API reference.

Old behaviour:

| type | timeout provided | closeTimer|
|----|----|------------|
|global | - | no close |
|global | XX | XX timeout |
|local , sticky | - | default 6sec timeout |
|local , sticky | XX | XX timeout |

New behaviour: (with upgrade=true):

> Regardless of the `type`

|  timeout provided| Auto-Hide|
|----|------------|
| - | no auto-hide |
| XX | auto-hide after XX duration |
