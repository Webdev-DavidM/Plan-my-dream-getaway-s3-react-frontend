import { css } from 'styled-components';
// eslint-disable-next-line
import { color, fonts, fontWeights } from '../Variables';

export const TopLevel = css`
  html {
    height: 100%;
  }

  /**
   *  1. When the footer 'quick links' button is clicked,
   *     the footer is positioned fixed. Padding here prevents
   *     the content from shunting downwards to fill the space
   *     previosuly occupied by the footer when it was in document flow
   *  2. Ensure min-height when viewport is:
   *     - above 670px
   *     - landscape orientation and < 670px
   */
  body {
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${color.lightestSlate};
    height: 100%;
    justify-content: space-between;
    line-height: 1.4;
    overflow-x: hidden;
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body.is-active {
    overflow: hidden;
  }

  * {
    outline: none;
  }
`;
