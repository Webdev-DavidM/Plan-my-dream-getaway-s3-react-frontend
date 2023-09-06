import { createGlobalStyle } from 'styled-components';
import { Normalize } from './normalize';
import { Reset } from './reset';
import { BoxSizing } from './box-sizing';
import { Shared } from './shared';
import { TopLevel } from './top-level';

const GlobalStyles = createGlobalStyle`
  ${Normalize}
  ${Reset}
  ${BoxSizing}
  ${Shared}
  ${TopLevel}
`;

export default GlobalStyles;
