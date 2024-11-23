import type { Meta, StoryObj } from '@storybook/react';
import PortfolioEntry from './portfolio-entry';

const meta: Meta<typeof PortfolioEntry> = {
    title: 'Biocron/Portfolio/PortfolioEntry',
    component: PortfolioEntry,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Blackjack: Story = {
  args: {game: "blackjack"}
};

export const PTBoss: Story = {
  args: {game: "papertoss"}
};

export const NJR: Story = {
  args: {game: "njr"}
};

export const HashPics: Story = {
  args: {game: "pics"}
};