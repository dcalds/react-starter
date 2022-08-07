import styled from "styled-components";

export const Text = styled.p`
    font-size: 32px;
    color: ${props => props.theme.colors.c1};
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;

    padding: 150px 0;
`;