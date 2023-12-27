import type { Meta, StoryObj } from '@storybook/react';

import { GenresContainer } from './GenresContainer';

const meta: Meta<typeof GenresContainer> = {
    title: 'Example/GenresContainer',
    component: GenresContainer,
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default:Story = {
    args: {color: "#ffffff", backgroundColor: "#0f0f0f", label: "GenresDDDD"}
}