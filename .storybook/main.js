/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  'stories': [
    '../src/ui/**/*.mdx',
    '../src/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  'addons': [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest'
  ],
  'framework': {
    'name': '@storybook/react-vite',
    'options': {}
  },
  'viteFinal': async (config) => {
    const { default: tailwindcss } = await import('@tailwindcss/vite');
    config.plugins = config.plugins ?? [];
    config.plugins.push(tailwindcss());
    return config;
  }
};
export default config;
