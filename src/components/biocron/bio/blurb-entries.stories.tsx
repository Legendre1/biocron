import type { Meta, StoryObj } from '@storybook/react';
import BlurbEntry from './blurb-entry';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof BlurbEntry> = {
    title: 'Biocron/Bio/BlurbEntry',
    component: BlurbEntry,
    parameters: {
        layout: 'centered',
    },
    decorators : [(Story) => (<BrowserRouter><Story/></BrowserRouter>)]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    body1: 'Dec 1980 - Present',
    title: 'Pro Nerd',
    body2: 'Playing all the games',
  },
};