import type { Meta, StoryObj } from '@storybook/react';
import ProfilePic from './profile-pic';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof ProfilePic> = {
    title: 'Biocron/Bio/ProfilePic',
    component: ProfilePic,
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