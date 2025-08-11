import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WindowContent } from './WindowContent';

describe('Window content component', () => {
  test('it should render children', () => {
    render(<WindowContent><p>Test content</p></WindowContent>);

    const element = screen.getByText('Test content');

    expect(element).toBeInTheDocument();
  });
});
