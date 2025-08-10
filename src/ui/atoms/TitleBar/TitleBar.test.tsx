import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TitleBar } from './TitleBar';

describe('Title-bar component', () => {
  test('it should render children', () => {
    render(<TitleBar><p>Test title</p></TitleBar>);

    const element = screen.getByText('Test title');

    expect(element).toBeInTheDocument();
  });

  test('it should render title if provided', () => {
    render(<TitleBar title='Test title' />);

    const element = screen.getByText('Test title');

    expect(element).toBeInTheDocument();
  });
});
