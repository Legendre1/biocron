import type { Meta, StoryObj } from '@storybook/react';
import Minibio from './minibio';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Minibio> = {
    title: 'Biocron/Minibio',
    component: Minibio,
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