import type { Meta, StoryFn } from '@storybook/react';

import Chip from './Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    stroke: {
      control: 'boolean',
    },
    rounded: {
      control: 'radio',
      options: ['round', 'rect'],
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;

const ChipTemplate: StoryFn<typeof Chip> = (args) => <Chip {...args} />;

export const Default = ChipTemplate.bind({});
Default.args = {
  rounded: 'round',
  stroke: false,
  children: <Chip.Label>칩 컴포넌트</Chip.Label>,
};

export const Tool = ChipTemplate.bind({});
Tool.args = {
  rounded: 'rect',
  children: (
    <>
      <Chip.Icon src="https://via.placeholder.com/20" alt="Custom Icon" />
      <Chip.Label>Tool 이름</Chip.Label>
    </>
  ),
};

export const ToolButton = ChipTemplate.bind({});
ToolButton.args = {
  rounded: 'rect',
  children: (
    <>
      <Chip.Icon src="https://via.placeholder.com/20" alt="Custom Icon" />
      <Chip.Label>Tool 이름</Chip.Label>
      <Chip.Icon src="https://via.placeholder.com/20" alt="Custom Icon" />
    </>
  ),
};

export const Category = ChipTemplate.bind({});
Category.args = {
  rounded: 'rect',
  children: (
    <>
      <Chip.Label>카테고리</Chip.Label>
    </>
  ),
};
