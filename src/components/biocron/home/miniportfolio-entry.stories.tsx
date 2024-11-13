import type { Meta, StoryObj } from '@storybook/react';
import MiniportfolioEntry from './miniportfolio-entry';

const meta: Meta<typeof MiniportfolioEntry> = {
    title: 'Biocron/MiniportfolioEntry',
    component: MiniportfolioEntry,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};