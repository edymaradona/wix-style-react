import React from 'react';
import {SelectionContextPropTypes} from 'wix-style-react/Table';
import {
  TableToolbar,
  ItemGroup,
  Item,
  SelectedCount,
  Divider
} from 'wix-style-react/Table/Toolbar';

import Card from 'wix-style-react/Card';
import Search from 'wix-style-react/Search';
import Button from 'wix-style-react/Button';
import {PenOutline, Duplicate2, Export} from 'wix-style-react/Icons';

export class BulkActionsExample extends React.Component {
  render() {
    return (
      <Card>
        <BulkActionsToolbar selectedCount={12}/>
      </Card>
    );
  }
}

const BulkActionsToolbar = props => (
  <TableToolbar>
    <ItemGroup position="start">
      <Item>
        <SelectedCount>{`${props.selectedCount} Selected`}</SelectedCount>
      </Item>
    </ItemGroup>
    <ItemGroup position="end">
      <Item layout="button">
        <Button
          theme="whiteblueprimary" prefixIcon={<Export/>}
          onClick={() => window.alert(`Exporting selectedIds=${props.getSelectedIds()}`)}
          >
          Export
        </Button>
      </Item>
      <Item layout="button">
        <Button
          theme="whiteblueprimary" prefixIcon={<Duplicate2/>}
          onClick={() => window.alert(`Duplicating selectedIds=${props.getSelectedIds()}`)}
          >
          Duplicate
        </Button>
      </Item>
      <Item layout="button">
        <Button
          theme="whiteblueprimary" prefixIcon={<PenOutline/>}
          onClick={() => window.alert(`Editing selectedIds=${props.getSelectedIds()}`)}
          >
          Edit
        </Button>
      </Item>
      <Divider/>
      <Item>
        <Search expandable/>
      </Item>
    </ItemGroup>
  </TableToolbar>
);
BulkActionsToolbar.propTypes = SelectionContextPropTypes;
