import type { Meta, StoryObj } from '@storybook/react';
import CornerButton from './corner-button'

const meta: Meta<typeof CornerButton> = {
    title: 'Biocron/CornerButton',
    component: CornerButton,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        onClick: {
            action: true,
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Back: Story = {
    args: {
        color: "lightBlue",
        disabled: false
    },
};


