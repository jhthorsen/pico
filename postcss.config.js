import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssPseudoShortHand from 'postcss-pseudo-shorthand';

import Color from 'color';

const processed = Symbol();

const postcssColorVariableShorthand = {
  postcssPlugin: 'postcss-color-variable-shorthand',
  Declaration(decl, _params) {
    if (!decl.prop.endsWith('--hsl')) return;
    if (decl[processed]) return;
    decl[processed] = true;

    try {
      let value = decl.value;
      const prop = [];

      if (value.match(/^\s*(hsl|rgb)\(.*var\(/)) {
        value = value.replace(/var\([^)]+\)|\d[^, ]*/, m => {
          prop.push(m.startsWith('var') ? m : '');
          return m.startsWith('var') ? '0' : m;
        });
      }

      const hsl = Color(value).hsl().array();
      for (let i = 0; i < hsl.length; i++) {
        hsl[i] = prop[i] ? prop[i] : hsl[i].toFixed(3);
      }

      decl.value = `${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%`;
      decl.after(decl.prop.replace(/--hsl$/, '') + `: hsl(var(${decl.prop}))`);
    }
    catch (err) {
      console.warn(decl.prop + ': ' + err);
    }
  },
};

const config = {
  plugins: [
    postcssImport(),
    postcssNested(),
    postcssPseudoShortHand(),
    postcssColorVariableShorthand,
  ],
};

export default config;
