import styled from 'styled-components';

export const ServersGridSection = styled.section`
  width: 100%;
  height: auto;
  padding: 30px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-top: 110px;

  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 411px) {
    grid-template-columns: none;
    padding-top: 150px;

  }
`;
