import type { Meta, StoryObj } from '@storybook/react';

import Tag from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'components/common/Tag',
  component: Tag,
  args: {
    rounded: 'xl',
    weight: 'bold',
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Cta: Story = {
  args: {
    item: '필수',
    color: 'cta',
  },
};

export const Secondary: Story = {
  args: {
    item: '#리더십',
    color: 'secondary',
    weight: 'normal',
  },
};

export const Primary: Story = {
  args: {
    item: '평가 완료',
    color: 'primary',
    size: 'sm',
    rounded: 'full',
  },
};

export const Gray: Story = {
  args: {
    item: '대기',
    color: 'gray',
  },
};

export const Black: Story = {
  args: {
    item: '확인중',
    color: 'black',
  },
};

export const Green: Story = {
  args: {
    item: '수료',
    color: 'green',
  },
};

export const Red: Story = {
  args: {
    item: '미수료',
    color: 'red',
  },
};
