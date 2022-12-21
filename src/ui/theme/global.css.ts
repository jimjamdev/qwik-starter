import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0,
  padding: 0
});

globalStyle('*, *:after, *:before', {
  boxSizing: 'border-box'
});
