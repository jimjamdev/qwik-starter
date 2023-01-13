import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  overflowX: 'hidden',
});

globalStyle('*, *:after, *:before', {
  boxSizing: 'border-box'
});
