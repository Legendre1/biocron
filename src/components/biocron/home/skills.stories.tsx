import type { Meta, StoryObj } from '@storybook/react';
import Skills from './skills';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Skills> = {
    title: 'Biocron/Home/Skills',
    component: Skills,
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