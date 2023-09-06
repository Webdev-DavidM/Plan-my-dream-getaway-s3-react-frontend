import { css } from "styled-components";
import { color } from "./Variables";
import { device } from "./Breakpoints";

export const inner = (maxWidth = null) => css`
  align-items: center;
  display: flex;
  margin: 0 auto;
  ${maxWidth};
  width: 100%;
`;

export const button = (padding = { padding: ".5rem" }) => css`
  ${padding}
  border-radius: 4px;
  font-size: 14px;
  background-color: none;
  border: 1px solid ${color.green};
  color: ${color.green};
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${color.green};
    border: 1s solid transparent;
    color: ${color.navy};
  }
`;

export const flexContainer = (verticalPosition = null) => css`
  display: flex;
  justify-content: center;

  ${verticalPosition};
`;

export const section = (width) => css`
  min-height: 500px;

  padding: 2rem;

  @media ${device.tablet} {
    padding: 8rem;
    ${width};
  }
`;

export const paragraph = css`
  font-size: 18px;
  margin: 2rem 0;
  font-weight: 400;
`;
