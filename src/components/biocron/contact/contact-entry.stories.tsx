import type { Meta, StoryObj } from '@storybook/react';
import ContactEntry from './contact-entry';

const meta: Meta<typeof ContactEntry> = {
    title: 'Biocron/Contact/ContactEntry',
    component: ContactEntry,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Mail: Story = {
  args: {
    icon: 'email',
    title: 'Mail',
    children: 
      <>
        <a className='font-body' href="mailto:jonlgolden@gmail.com">JonLGolden@gmail.com</a>
        <a className='font-body' href="mailto:aureus.studio@gmail.com">Aureus.Studio@gmail.com</a> 
      </>
  }
}

export const Phone: Story = {
  args: {
    icon: 'phone',
    title: 'Contact',
    children: 
      <>
        <a className='font-body' href="mailto:jonlgolden@gmail.com">Calendly</a>
      </>
  }
}

export const Location: Story = {
  args: {
    icon: 'location',
    title: 'Location',
    children: 
      <>
        <div>Denver, CO, USA</div>
      </>
  }
}

