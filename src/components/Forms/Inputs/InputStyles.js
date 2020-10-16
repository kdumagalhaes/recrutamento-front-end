import styled from 'styled-components'

export const InputTag = styled.input `
    width: 100%;
    max-width: ${({maxWidth}) => maxWidth};
    height: 50px;
    border-radius: 7px;
    border: 1px solid ${({theme}) => theme.colors.color5};
    background: transparent;
    color: ${({theme}) => theme.colors.color3};
    padding: 0 15px;
    margin-bottom: ${({marginBottom}) => marginBottom};
`