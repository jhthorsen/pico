import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssPresetEnv from 'postcss-preset-env';

const config = {
  plugins: [
    postcssImport(),
    postcssNested(),
    postcssPresetEnv({
      stage: 2,
      features: {
        'nesting-rules': false, // convered by postcssNested
      }
    }),
  ],
};

export default config;
