import styled from "styled-components";

export const StyledForm = styled.form`
    display: block;
    margin-top: 0em;
`;

export const StyledHeader = styled.header`
    color: ${({theme}) => theme.color.rose};
    text-align: center;
    font-size: 25px ;
`;

export const LabelText = styled.span`
    max-width: 100px;
    width: 100%;
    display: inline-block;
    margin-right: 5px;
`;

export const Field = styled.input`
    border: 1px solid ${({ theme }) => theme.color.black};
    width: 100%;
    padding: 10px;
    max-width: 400px;
    border-radius: 10px;
`;

export const StyledButton = styled.button`
    background-color: rgb(148, 146, 146);
    border-radius: 5px;
    margin: auto;
    width: 100%;
    border-radius: 5px;
    margin: auto;
    width: 100%;

    &:hover {
        filter: brightness(110%);
    }
`;