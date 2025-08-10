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

  test('it should add default title bar if not provided', () => {
    render(<AppTemplate />);
    
    const defaultTitleBar = screen.getByRole('banner');

    expect(defaultTitleBar).toBeInTheDocument();
  });

  test('it should render title bar if provided', () => {
    render(
      <AppTemplate titleBar={<TitleBar title='Test Title Bar' />} />
    );

    const titleBarElement = screen.getByText('Test Title Bar');

    expect(titleBarElement).toBeInTheDocument();
  });
});
