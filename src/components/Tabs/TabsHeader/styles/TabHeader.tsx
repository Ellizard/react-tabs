import styled, { css } from 'styled-components';
import { breakpoint } from '../../../../helpers/breakpoints';

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const Li = styled.li`
  border-bottom: none;
  display: inline-block;
  width: 100%;
  margin-top: 2px;

  @media ${breakpoint.tablet} {
    width: auto;
    margin-right: 2px;
  }
`;

export const Button = styled("button")<{isActiveTab: boolean}>`
  padding: 10px 25px;
  border-radius: 4px;
  font-size: 14px;
  background: rgba(113, 175, 183, .3);
  cursor: pointer:
  display: inline-block;
  border: none;
  width: 100%;
  transition: transform 0.2s ease-in-out;
  
  :hover {
    cursor: pointer;
    background: rgba(113, 175, 183, .5);
    transform: scale(1.05);
  }

  ${(props) =>
    props.isActiveTab &&
    css`
      background: rgba(113, 175, 183, .65);
    `}
`;
