import type { Meta, StoryObj } from '@storybook/react';
import Profiles from './profiles';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Profiles> = {
    title: 'Biocron/Home/Profiles',
    component: Profiles,
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