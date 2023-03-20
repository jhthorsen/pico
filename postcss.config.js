import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssColorVariableShorthand from 'postcss-color-variable-shorthand';
import postcssPseudoShortHand from 'postcss-pseudo-shorthand';

const config = {
  plugins: [
    postcssImport(),
    postcssNested(),
    postcssPseudoShortHand(),
    postcssColorVariableShorthand(),
  ],
};

export default config;
