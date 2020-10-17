import styled from 'styled-components';

export const RegisterFormTag = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
    max-width: 380px;
    height: 50px;
    border-radius: 7px;
    border: 1px solid ${({ theme }) => theme.colors.color5};
    background: transparent;
    color: ${({ theme }) => theme.colors.color3};
    padding: 0 15px;
    margin-bottom: 20px;
  }

  button {
    width: 100%;
    max-width: 380px;
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
  }

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
