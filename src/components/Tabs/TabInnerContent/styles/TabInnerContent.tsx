import styled from 'styled-components';
import { breakpoint } from '../../../../helpers/breakpoints';

export const TabInnerContent = styled.div`
  margin-top: 5px;
  border-radius: 4px;
  padding: 30px;
  width: 100%;
  border: 1px solid #ccc;

  @media ${breakpoint.tablet} {
    max-width: 600px;
    width: 100%;
  }

  @media ${breakpoint.laptop} {
    max-width: 800px;
  }
`;
