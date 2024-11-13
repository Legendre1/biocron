import type { Meta, StoryObj } from '@storybook/react';
import Miniportfolio from './miniportfolio';

const meta: Meta<typeof Miniportfolio> = {
    title: 'Biocron/Miniportfolio',
    component: Miniportfolio,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};