import { css } from 'styled-components';

export const Reset = css`
  /**
  *   As well as using normalize.css, it is often advantageous to remove all
  *   margins from certain elements
  */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  dl,
  dd,
  ol,
  ul,
  form,
  fieldset,
  legend,
  figure,
  table,
  th,
  td,
  caption,
  hr {
    margin: 0;
    padding: 0;
  }

  /* Remove underlines from potentially troublesome elements */
  u,
  ins {
    text-decoration: none;
  }

  /* Remove indenting and bullet styles form lists */
  ul,
  ol,
  dl {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Remove underline from links by default */
  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    text-align: left;
  }

  /**
   *	1. Prevents SVG receiving click events in MS EDGE and IE11,
   *	   use in conjuntion with focusable="false" on the SVG element
   */
  svg {
    pointer-events: none; /* [1] */
  }
`;
