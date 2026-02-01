import plugin from 'tailwindcss/plugin';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import patterns from './patterns.js';

export default plugin(
  ({ matchUtilities, theme }) => {
    const patternList = theme('pattern', {});
    const colors = flattenColorPalette(theme('colors'));

    for (const [patternName, patternSvg] of Object.entries(patternList)) {
      matchUtilities(
        {
          [`pattern-${patternName}`]: (value, { modifier }) => {
            const opacityValue = modifier !== null ? modifier : '1';
            
            const colorStr = Array.isArray(value) ? value[0] : value;
            const encodedColor = colorStr.toString().replace('#', '%23');

            let coloredPattern = patternSvg.replace('{{color}}', encodedColor);
            coloredPattern = coloredPattern.replace('{{opacity}}', opacityValue);

            return {
              backgroundImage: coloredPattern,
            };
          },
        },
        {
          values: colors,
          modifiers: theme('opacity'),
          type: ['color', 'any'],
        }
      );
    }
  },
  {
    theme: {
      pattern: patterns,
    },
  }
);
