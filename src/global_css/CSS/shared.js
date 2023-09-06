import { css } from 'styled-components';
// eslint-disable-next-line
import { colors } from '../Variables';

export const Shared = css`
  /**
   * 	Where 'margin-bottom' is concerned, this value will be the same as the
   * 	base line-height. This allows us to keep a consistent vertical rhythm.
   * 	As per: csswizardry.com/2012/06/single-direction-margin-declarations
   */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  p,
  address,
  table,
  fieldset,
  figure,
  pre {
    margin-bottom: 1rem;
  }

  /* Prevents image stretching when child of flex parentNode */
  img {
    display: inline-block;
    flex: none; /* [1] */
    height: auto;
    max-width: 100%;
    vertical-align: baseline;
  }
`;
