// rainbow-sprinkles.css.ts
import { defineProperties, createRainbowSprinkles } from 'rainbow-sprinkles';

// or import a theme (e.g. `createTheme`, `createThemeContract`)
const vars = {
  space: {
    none: 0,
    small: '4px',
    medium: '8px',
    large: '16px',
    // etc.
  },
  colors: {
    blue50: '#eff6ff',
    blue100: '#dbeafe',
    blue200: '#bfdbfe',
    gray700: '#374151',
    gray800: '#1f2937',
    gray900: '#111827',
    // etc.
  },
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  dynamicProperties: {
    // Define pre-determined values, which will be autosuggested
    color: vars.colors,
    backgroundColor: vars.colors,
    margin: vars.space,
    marginTop: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    marginBottom: vars.space,
    // Will work with any CSS value
    display: true,
    textAlign: true,
    flexDirection: true,
    justifyContent: true,
    alignItems: true,
  },
  staticProperties: {
    // Build out utility classes that don't use CSS variables
    display: ['block', 'flex', 'inline-block', 'inline-flex'],
  },
  shorthands: {
    bg: ['backgroundColor'],
    m: ['margin'],
    mr: ['marginRight'],
    ml: ['marginLeft'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
  },
});
/* @ts-ignore */
export const rainbowSprinkles = createRainbowSprinkles(responsiveProperties)

export type Sprinkles = Parameters<typeof rainbowSprinkles>[0];
