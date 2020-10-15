import styled from 'styled-components';

export const TopMenuDiv = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.color2};
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({theme}) => theme.shadows.boxShadow2};
  position: fixed;

  @media(max-width: 411px) {
    padding: 20px;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
