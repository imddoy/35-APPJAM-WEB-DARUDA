import type { Meta, StoryFn } from '@storybook/react';

import Chip from './Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;

const ChipTemplate: StoryFn<typeof Chip> = (args) => <Chip {...args} />;

export const Default = ChipTemplate.bind({});
Default.args = {
  stroke: false,
  size: 'small',
  children: (
    <Chip.RoundContainer>
      <Chip.Label>칩 컴포넌트</Chip.Label>
    </Chip.RoundContainer>
  ),
};

export const Tool = ChipTemplate.bind({});
Tool.args = {
  stroke: false,
  size: 'small',
  children: (
    <Chip.RectContainer>
      <Chip.Icon src="https://via.placeholder.com/20" alt="Custom Icon" />
      <Chip.Label>Tool 이름</Chip.Label>
    </Chip.RectContainer>
  ),
};

export const ToolButton = ChipTemplate.bind({});
ToolButton.args = {
  children: (
    <Chip.RectContainer>
      <Chip.Icon src="https://via.placeholder.com/20" alt="Custom Icon" />
      <Chip.Label>Tool 이름</Chip.Label>
      <Chip.Icon src="https://via.placeholder.com/20" alt="Custom Icon" />
    </Chip.RectContainer>
  ),
};

export const Category = ChipTemplate.bind({});
Category.args = {
  children: (
    <Chip.RectContainer>
      <Chip.Label>카테고리</Chip.Label>
    </Chip.RectContainer>
  ),
};
