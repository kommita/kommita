import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppTemplate } from './AppTemplate';
import { TitleBar } from '../molecules/TitleBar';
import { StatusBar } from '../molecules/StatusBar/StatusBar';

describe('App Template', () => {
  test('it should render children components', () => {
    render(
      <AppTemplate>
        <div>Test Child</div>
      </AppTemplate>
    );

    const childElement = screen.getByText('Test Child');

    expect(childElement).toBeInTheDocument();
  });

  test('it should add default title bar if not provided', () => {
    render(<AppTemplate />);

    const defaultTitleBar = screen.getByRole('banner');

    expect(defaultTitleBar).toBeInTheDocument();
  });

  test('it should render title bar', () => {
    render(
      <AppTemplate titleBar={<TitleBar title='Test Title Bar' />} />
    );

    const titleBarElement = screen.getByText('Test Title Bar');

    expect(titleBarElement).toBeInTheDocument();
  });

  test('it should render status bae', () => {
    render(<AppTemplate statusBar={<StatusBar />} />);

    const statusBarElement = screen.getByText(/^\d+\.\d+\.\d+(-.+)?$/);

    expect(statusBarElement).toBeInTheDocument();
  });
});
