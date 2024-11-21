import type { Meta, StoryObj } from '@storybook/react';

import Header from './header';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Header> = {
    title: 'Biocron/Common/Header',
    component: Header,
    parameters: {
        layout: 'none',
    },
    decorators : [(Story) => (<BrowserRouter><Story/></BrowserRouter>)]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};