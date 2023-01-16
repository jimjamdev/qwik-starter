// rainbow-sprinkles.css.ts
import { defineProperties, createRainbowSprinkles } from 'rainbow-sprinkles';
import { theme } from "~/ui/theme/theme.css";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  dynamicProperties: {
    // Define pre-determined values, which will be autosuggested
    color: theme.color,
    backgroundColor: theme.color,
    margin: theme.space,
    marginTop: theme.space,
    marginLeft: theme.space,
    marginRight: theme.space,
    marginBottom: theme.space,
    // Will work with any CSS value
    display: true,
    textAlign: true,
    flexDirection: true,
    justifyContent: true,
    alignItems: true,
    height: true,
    minHeight: true,
    width: true,
    minWidth: true,
  },
  staticProperties: {
    // Build out utility classes that don't use CSS variables
    // display: ['block', 'flex', 'inline-block', 'inline-flex'],
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
