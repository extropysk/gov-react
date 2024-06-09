import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { Button, ButtonProps } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select' },
    onClick: { action: 'clicked' },
  },
}
export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Button',
  variant: 'default',
  onClick: () => alert('clicked'),
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
  variant: 'secondary',
}

export const Warning = Template.bind({})
Warning.args = {
  label: 'Button',
  variant: 'warning',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Button',
  disabled: true,
}
