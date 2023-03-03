import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssPresetEnv from 'postcss-preset-env';
import postcssPseudoShortHand from 'postcss-pseudo-shorthand';

const config = {
  plugins: [
    postcssImport(),
    postcssNested(),
    postcssPseudoShortHand(),
    postcssPresetEnv({
      stage: 2,
      features: {
        'nesting-rules': false, // convered by postcssNested
      }
    }),
  ],
};

export default config;
