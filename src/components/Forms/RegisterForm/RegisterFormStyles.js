import styled from 'styled-components';

export const RegisterFormTag = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0 0 90px 0;
    color: ${({ theme }) => theme.colors.color2};
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 0.9rem;
  }

  label {
    font-size: 0.1px;
  }

  h3 {
    margin-top: 60px;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.color5};
      transition: color 0.4s;

      &:hover {
        color: ${({ theme }) => theme.colors.color3};
      }
    }
  }
`;
