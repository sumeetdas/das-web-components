import type { Meta, StoryObj } from '@storybook/web-components';
import './Component';
import { html } from 'lit';
 
// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta: Meta = {
  title: 'DasWebComponents/DasLayoutCenter',
  tags: ['autodocs'],
  render: () => html`
    <das-layout-center>
        <h1>DasLayoutCenter</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla convallis libero in dui finibus, sit amet malesuada
            nunc ultrices. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
            Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.

            <button>Click me</button>
        </p>
    </das-layout-center>
    `,
};

export default meta;

type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Default: Story = {
  
};
