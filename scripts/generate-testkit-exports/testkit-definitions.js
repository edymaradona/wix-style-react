const skipSanityTest = true;
const noTestkit = true;
const manualExport = true;
const unidriver = true;

/*
 * This file exports object with config for component testkits.
 *
 * Glossary:
 *   regular components export testkits and pass sanity tests automatically (no config).
 *   non-regular components need additional config for export and sanity tests to be automated.
 *
 * { [component.displayName]: TestkitDefinitions }
 *
 * [component.displayName] = {
 *   // what kind of drivers should be tested
 *   drivers?: ['vanilla', 'enzyme']
 *
 *   // set to true if testkit already has export in `test/generate-testkit-exports/enzyme.template
 *   // this is used for proxied components from other libraries (like wix-ui-backoffice)
 *   manualExport?: false;
 *
 *   // skip sanity tests for this component entirely.
 *   // this is likely an indication for a fix
 *   skipTestkitSanity?: false;
 *
 *   // Indicate that component does not have testkit at all.
 *   // It is sometimes ok not to have one.
 *   noTestkit?: false;
 *
 *   // Mark if component uses unidriver.
 *   // It is required for unidriver, because it is tested differently
 *   unidriver?: false;
 *
 *   // set path to testkit if path is not following convention
 *   // this file will be imported and wrapped with appropriate testkit factory
 *   // (one of testkitFactoryCreator, uniTestkitFactoryCreator, enzymeTestkitFactoryCreator or enzymeUniTestkitFactoryCreator
 *   testkitPath?: function;
 * }
 */

module.exports = {
  SideMenuDrill: {
    skipSanityTest,
    testkitPath: '../src/SideMenu/DrillView/DrillView.driver',
  },

  BadgeSelectItemBuilder: { skipSanityTest, noTestkit },

  ColorPicker: {
    skipSanityTest, // missing export in testkit/index.js, so skipping for now
  },

  MultiSelect: {
    skipSanityTest, // testkit does not have root `exists` method
  },

  MultiSelectComposite: {},

  MultiSelectCheckbox: {
    skipSanityTest, // testkit does not have root `exists` method
  },

  AutoCompleteComposite: {},

  DragAndDrop: { skipSanityTest, noTestkit },

  DragDropContextProvider: { skipSanityTest, noTestkit },

  EndorseContentLayout: {
    skipSanityTest,
    // TODO: testkit of this component is not following convention.
    // It is used only internally and before automated export was not exported manually
    noTestkit,
  },

  GoogleAddressInput: {
    skipSanityTest,
    // TODO: testkit of this component is not following convention.
    // It is used only internally and before automated export was not exported manually
    noTestkit,
  },

  GoogleAddressInputWithLabel: { skipSanityTest },

  Grid: { skipSanityTest, noTestkit },

  HBox: { skipSanityTest, noTestkit },

  Layout: { skipSanityTest, noTestkit },

  MessageBox: { skipSanityTest, noTestkit },

  Header: {
    testkitPath: '../src/Card/Header/Header.driver',
    // TODO: this is actually  Card.Header, but is exported just as header
    skipSanityTest,
  },

  Page: { skipSanityTest },

  PageHeader: { skipSanityTest },

  PopoverMenuItem: { skipSanityTest, noTestkit },

  Popover: {},

  TableToolbar: { skipSanityTest, noTestkit },

  Tooltip: { skipSanityTest },

  VBox: { skipSanityTest, noTestkit },

  Collapse: { skipSanityTest, noTestkit },

  Card: { skipSanityTest, noTestkit },

  LinearProgressBar: {
    manualExport,
  },

  CircularProgressBar: {
    manualExport,
  },

  Composite: { skipSanityTest, noTestkit },

  FloatingHelper: {
    manualExport,
  },

  FullTextView: { skipSanityTest, noTestkit },

  RichTextArea: {
    beforeAllHook: () => (window.getSelection = () => ({})),
  },

  RichTextAreaComposite: {},

  Range: {},

  Avatar: { unidriver },

  ButtonLayout: {
    skipSanityTest, // TODO: i don't knowm, it fails, need to check why. Currently it doesn't have test anyway. Leaving for later
  },

  Tag: {},

  TextButton: {
    unidriver,
  },

  IconButton: {
    unidriver,
    skipSanityTest,
  },

  CloseButton: {
    unidriver,
  },

  CardGalleryItem: {
    unidriver,
  },

  Label: { manualExport },

  SideMenu: {
    testkitPath: '../src/SideMenu/core/SideMenu.driver',
  },

  ToggleSwitch: { manualExport },

  CounterBadge: {
    manualExport,
  },

  Badge: {
    manualExport,
  },

  Button: {
    manualExport, // TODO: should be automated but can't because of the `upgrade` prop. Once it's gone, it can be automated again
    unidriver,
  },

  ImageViewer: {},

  FormField: {},

  BadgeSelect: {},

  Breadcrumbs: {},

  Calendar: {},

  CalendarPanel: {},

  CalendarPanelFooter: {
    unidriver,
  },

  DataTable: {},

  Slider: {},

  Selector: {},

  StatsWidget: {},

  Table: {},

  Tabs: {},

  Modal: {},

  ContactItemBuilder: { skipSanityTest },

  Draggable: {
    testkitPath: '../src/DragAndDrop/Draggable/Draggable.driver',
    skipSanityTest,
  },

  EditableRow: {
    testkitPath: '../src/EditableSelector/EditableRow/EditableRow.driver',
    skipSanityTest,
  },

  FieldLabelAttributes: {
    testkitPath: '../src/FieldLabelAttributes/FieldLabelAttributes.driver',
    skipSanityTest,
  },

  FieldWithSelectionComposite: {
    testkitPath:
      '../src/Composite/FieldWithSelectionComposite/FieldWithSelectionComposite.driver',
    skipSanityTest,
  },

  Carousel: {
    drivers: ['enzyme'],
  },

  Notification: {},

  DatePicker: {
    skipSanityTest, // testkit does not have root `exists` method
  },

  ModalSelectorLayout: {},

  Proportion: { unidriver, drivers: ['enzyme'] },

  GeneratedTestComponent: { unidriver, drivers: ['enzyme'] },

  DropdownBase: { unidriver },

  RadioButton: {
    testkitPath: '../src/RadioGroup/RadioButton/RadioButton.driver',
    skipSanityTest,
  },

  MessageBoxMarketerialLayout: {
    testkitPath: '../src/MessageBox/MessageBoxMarketerialLayout.driver',
    skipSanityTest,
  },

  MessageBoxFunctionalLayout: {
    testkitPath: '../src/MessageBox/MessageBoxFunctionalLayout.driver',
    skipSanityTest,
  },

  TextLinkLayout: {
    testkitPath: '../src/BaseComponents/TextLinkLayout/TextLinkLayout.driver',
    skipSanityTest,
  },

  Box: { unidriver },
};
