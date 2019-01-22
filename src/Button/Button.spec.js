import React from 'react';

import { render, cleanup } from '../../test/utils/unit';
import { depLogger } from '../utils/deprecationLog';
import Button from '.';

describe('Button', () => {
  afterEach(() => cleanup());

  it('should have correct displayName', async () => {
    expect(Button.displayName).toEqual('Button');
  });
});
