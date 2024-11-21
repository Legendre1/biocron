import type { Meta, StoryObj } from '@storybook/react';

import FramePanel from './frame-panel';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof FramePanel> = {
    title: 'Biocron/Common/FramePanel',
    component: FramePanel,
    parameters: {
      layout: 'centered',
  },
    decorators : [(Story) => (<BrowserRouter><Story/></BrowserRouter>)]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {classes: 'h-48 w-48'}
};