import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../app/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/nextjs-vite",
  "staticDirs": [],
  managerHead: (head) => `
    <base href="/storybook/" />
    ${head}
    <script>
      (function() {
        var url = new URL(window.location.href);
        if (!url.searchParams.has('path')) {
          url.searchParams.set('path', '/docs/introduction--docs');
          window.location.replace(url.toString());
        }
      })();
    </script>
  `
};
export default config;