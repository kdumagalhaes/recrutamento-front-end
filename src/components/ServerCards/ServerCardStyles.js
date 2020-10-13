import styled from 'styled-components';

export const ServerCardDiv = styled.div`
  width: 100%;
  max-width: 330px;
  height: auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.color2};
  box-shadow: ${({ theme }) => theme.shadows.boxShadow2};
  border-radius: ${({ theme }) => theme.borderRadius.radius2};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ServerCardInfo = styled.div`

  color: #fff;

  span {
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.color5};
    font-size: 0.6rem;
  }

  p {
    line-height: 22px;
  }
`;

export const ServerCardStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 100%;
    max-width: 100px;
    margin-bottom: 15px;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.7rem;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.color4};
    border-radius: 50px;
  }
`;
