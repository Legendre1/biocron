import type { Meta, StoryObj } from '@storybook/react';

import FramePanel from './frame-panel';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof FramePanel> = {
    title: 'Biocron/FramePanel',
    component: FramePanel,
    parameters: {
      layout: 'centered',
  },
    decorators : [(Story) => (<BrowserRouter><Story/></BrowserRouter>)]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};