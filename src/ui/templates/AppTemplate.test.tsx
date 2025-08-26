import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppTemplate } from './AppTemplate';

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
});
