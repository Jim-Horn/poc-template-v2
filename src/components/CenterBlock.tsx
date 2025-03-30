import styled from 'styled-components';

const StyledCenterBlock = styled.section`
  width: 75vw;
  height: 75vh;
  outline: 1px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: monospace;
  padding: 1rem;
`;

const CenterBlock = ({ children }: { children: React.ReactNode }) => (
  <StyledCenterBlock>{children}</StyledCenterBlock>
);

export default CenterBlock;
