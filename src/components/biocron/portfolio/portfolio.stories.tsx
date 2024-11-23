import type { Meta, StoryObj } from '@storybook/react';
import Portfolio from './portfolio'

const meta: Meta<typeof Portfolio> = {
    title: 'Biocron/Portfolio/Portfolio',
    component: Portfolio,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};