import styled from 'styled-components';

export const SideImageDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${({backgroundImg}) => backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
