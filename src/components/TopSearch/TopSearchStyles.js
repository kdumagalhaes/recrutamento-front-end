import styled from 'styled-components';

export const TopSearchInput = styled.input`
  width: 100%;
  max-width: 600px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.color0};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.radius1};
  padding: 0 15px;
  color: ${({ theme }) => theme.colors.color3};
  margin: 0 20px;

  @media (max-width: 411px) {
    margin: 0;
  }
`;
