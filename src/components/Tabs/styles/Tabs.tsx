import styled from 'styled-components';

export const Tabs = styled.div`
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  max-width: 700px;
  position: relative;

  * {
    box-sizing: border-box;
  }
`;

export const Spinner = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  right: 10px;
  top: 10px;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
