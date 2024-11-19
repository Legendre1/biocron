import type { Meta, StoryObj } from '@storybook/react';
import BioBlurb from './bio-blurb';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof BioBlurb> = {
    title: 'Biocron/Bio/BioBlurb',
    component: BioBlurb,
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