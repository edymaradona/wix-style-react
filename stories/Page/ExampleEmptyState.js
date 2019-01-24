import React from 'react';

import Page from 'wix-style-react/Page';
import Button from 'wix-style-react/Button';
import TextButton from 'wix-style-react/TextButton';
import EmptyState from 'wix-style-react/EmptyState';
import { Add } from 'wix-style-react/new-icons';

import ImagePlaceholder from '../assets/ImagePlaceholder';

const pageContainerStyles = {
  height: 500,
  display: 'flex',
  flexFlow: 'column',
  minHeight: 0,
  maxWidth: '90%',
};

const ExampleEmptyState = () => (
  <div data-hook="story-page-empty-state" style={pageContainerStyles}>
    <Page>
      <Page.Header
        title="Your Product"
        actionsBar={
          <Button withNewIcons prefixIcon={<Add />}>
            New Item
          </Button>
        }
      />

      <Page.Content>
        <EmptyState
          theme="page"
          title="You don't have any items yet"
          subtitle="Create your product item in an easy & fast way to display it on your website"
          image={<ImagePlaceholder />}
        >
          <TextButton prefixIcon={<Add />}>New Item</TextButton>
        </EmptyState>
      </Page.Content>
    </Page>
  </div>
);

export default ExampleEmptyState;
