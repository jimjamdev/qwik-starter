import { globalStyle } from '@vanilla-extract/css';
import { theme } from "~/ui/theme/theme.css";

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  overflowX: 'hidden',
  background: theme.color.body,
});

globalStyle('body', {
  background: theme.color.body,
})

/*globalStyle('*, *:after, *:before', {
  boxSizing: 'border-box'
});*/
