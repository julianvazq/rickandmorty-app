import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 2rem;
    & > :first-child {
        flex: 1 1 300px;
        max-width: 350px;
    }
    & > :nth-child(2) {
        flex: 1 1 auto;
    }
`;
