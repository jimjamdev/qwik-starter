import { style } from "styled-vanilla-extract/qwik";
import { theme } from '~/ui/theme/theme.css';

export const headerCss = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.color.brand,
  color: 'white',
  height: '60px',
})

export const linkStyle = style({
  color: 'white',
  textDecoration: 'none',
  padding: '0 10px',
});
