import styled from 'styled-components';
import { breakpoint } from '../../../../helpers/breakpoints';

export const TabInnerContent = styled.div`
  margin-top: 5px;
  border-radius: 4px;
  padding: 30px;
  width: 100%;
  background: rgba(129, 212, 223, .75); 

  @media ${breakpoint.tablet} {
    max-width: 600px;
    width: 100%;
  }

  @media ${breakpoint.laptop} {
    max-width: 800px;
  }
`;
