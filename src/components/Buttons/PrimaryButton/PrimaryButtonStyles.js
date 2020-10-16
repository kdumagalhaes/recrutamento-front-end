import styled from 'styled-components';

export const PrimaryButtonTag = styled.button`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: 50px;
  background-color: ${({ theme }) => theme.colors.color5};
  color: ${({ theme }) => theme.colors.color3};
  border-radius: 7px;
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.shadow2};
  transition: background-color 0.4s;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 30px;

  &:hover {
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.color5};
    color: ${({ theme }) => theme.colors.color5};
  }
`;
