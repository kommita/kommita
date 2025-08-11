import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WindowContainer } from './WindowContainer';

describe('Window container component', () => {
  test('it should render children', () => {
    render(<WindowContainer><p>Test text</p></WindowContainer>);

    const testText = screen.getByText('Test text');

    expect(testText).toBeInTheDocument();
  });
});
