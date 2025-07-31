import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { App } from './App';


describe('App', () => {
    test('it should render hello message', () => {
        render(<App/>);

        const heading = document.querySelector('h1');

        expect(heading).toHaveTextContent('Hello, Tailwind!');
    });
});
