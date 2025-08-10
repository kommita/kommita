import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MainWindow } from './MainWindow';

describe('Main window component', () => {
  test('it should render children', () => {
    render(<MainWindow><p>Test text</p></MainWindow>);

    const testText = screen.getByText('Test text');

    expect(testText).toBeInTheDocument();
  });
});
