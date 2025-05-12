import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig(() => {
  const { publicVars } = loadEnv({ prefixes: ['PUBLIC_'] });

  return {
    plugins: [pluginReact()],
    source: {
      define: publicVars,
    },
  };
});
