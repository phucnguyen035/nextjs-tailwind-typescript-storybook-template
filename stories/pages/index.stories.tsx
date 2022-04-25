import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import Home from '../../pages/index';

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

export const HomePage: ComponentStory<typeof Home> = () => <Home />;
HomePage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole('button'));
  expect(canvas.getByTestId('count')).toHaveTextContent('1');
};
