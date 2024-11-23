import type { Meta, StoryObj } from '@storybook/react';
import QualificationBlurb from './qualification-blurb';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof QualificationBlurb> = {
    title: 'Biocron/Bio/QualificationBlurb',
    component: QualificationBlurb,
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