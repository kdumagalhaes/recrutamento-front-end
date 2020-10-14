import styled from 'styled-components';

export const ServerCardDiv = styled.div`
  width: 100%;
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
  align-items: flex-end;

  img {
    width: 100%;
    max-width: 100px;
  }

  .on {
    width: 12px;
    height: 12px;
    background-color: ${({ theme }) => theme.colors.color6};
    border-radius: 50px;
    margin-bottom: 15px;
  }

  .off {
    width: 12px;
    height: 12px;
    background-color: ${({ theme }) => theme.colors.color7};
    border-radius: 50px;
    margin-bottom: 15px;
  }
`;
