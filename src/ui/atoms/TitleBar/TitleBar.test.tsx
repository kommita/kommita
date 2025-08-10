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

  test('it should fail if both children and title are provided together', () => {
    expect(() => {
      render(<TitleBar title='Test title'><p>Test title</p></TitleBar>);
    }).toThrowError('TitleBar component should not have both children and title props.');
  });
});
