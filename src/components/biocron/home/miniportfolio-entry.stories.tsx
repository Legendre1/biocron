import type { Meta, StoryObj } from '@storybook/react';
import MiniportfolioEntry from './miniportfolio-entry';

const meta: Meta<typeof MiniportfolioEntry> = {
    title: 'Biocron/Home/MiniportfolioEntry',
    component: MiniportfolioEntry,
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