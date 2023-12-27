import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';

import { Page } from './Page';

const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  // 스토리북에서 테스트할 때 사용되는 함수. 해당 스토리에 대한 사용자 행동을 정의하는 부분
  play: async ({ canvasElement }) => {
    // async: 비동기
    const canvas = within(canvasElement); // 컴포넌트 내부에서 특정 엘리먼트를 찾는다
    const loginButton = canvas.getByRole('button', { name: /Log in/i }); // canvas 내에서 'Log in' 이라는 텍스트를 가진 button 태그를 찾는다
    await expect(loginButton).toBeInTheDocument(); //  엘리먼트가 화면에 나타나는지 여부
    await userEvent.click(loginButton); // 유저 이벤트에 의해서 버튼이 클릭되었다
    await expect(loginButton).not.toBeInTheDocument(); // 그리고 로그인 버튼이 화면에서 사라졌다.. 여부

    const logoutButton = canvas.getByRole('button', { name: /Log out/i }); // Log out 버튼을 찾는다
    await expect(logoutButton).toBeInTheDocument(); // 로그아웃 버튼이 화면에 나타났는지 확인한다
  },
};
