import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  test('it should render hello message', () => {
    render(<App/>);

    const heading = screen.getByRole('heading', { name: /Hello, Tailwind!/i });

    expect(heading).toBeInTheDocument();
  });
});
