import type { Meta, StoryObj } from '@storybook/react';

import Header from './header';

const meta: Meta<typeof Header> = {
    title: 'Biocron/Header',
    component: Header,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
       
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};