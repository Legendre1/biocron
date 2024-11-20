import type { Meta, StoryObj } from '@storybook/react';
import ExpBlurb from './exp-blurb';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof ExpBlurb> = {
    title: 'Biocron/Bio/ExpBlurb',
    component: ExpBlurb,
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