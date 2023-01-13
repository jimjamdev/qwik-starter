import { globalStyle } from '@vanilla-extract/css';
import { theme } from "~/ui/theme";

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  overflowX: 'hidden',
  backgroundColor: theme.color.body,
});

globalStyle('*, *:after, *:before', {
  boxSizing: 'border-box'
});
