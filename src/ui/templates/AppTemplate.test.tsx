import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppTemplate } from './AppTemplate';
import { TitleBar } from '../atoms/TitleBar';

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

  test('it should render header title if provided', () => {
    render(<AppTemplate title='Test title'></AppTemplate>);

    const titleElement = screen.getByText('Test title');

    expect(titleElement).toBeInTheDocument();
  });

  test('it should fail if title & title bar provided together', () => {
    expect(() => render(
      <AppTemplate title='Test title' titleBar={<TitleBar />}></AppTemplate>
    )).toThrowError('You cannot use both title and titleBar props together.');
  });

  test('it should render title bar if provided', () => {
    render(
      <AppTemplate titleBar={<TitleBar title='Test Title Bar' />} />
    );

    const titleBarElement = screen.getByText('Test Title Bar');

    expect(titleBarElement).toBeInTheDocument();
  });
});
