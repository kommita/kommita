import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Window from './Window';

describe('Window component', () => {
  test('it should render children', () => {
    render(<Window><p>Test text</p></Window>);

    const testText = screen.getByText('Test text');

    expect(testText).toBeInTheDocument();
  });
});
