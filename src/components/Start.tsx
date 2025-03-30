import styled from 'styled-components';

const StyledStartWrapper = styled.section`
  width: 640px;
  height: 320px;
  outline: 1px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: monospace;
`;

const Start = () => {
  return (
    <StyledStartWrapper>
      <h1>It's a start</h1>
      <h2>
        Dare to <s>develop</s> dream
      </h2>
    </StyledStartWrapper>
  );
};

export default Start;
