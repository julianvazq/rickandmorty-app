import styled from 'styled-components';
import { BoxShadowCSS, ContainerPaddingCSS } from '../../../styles';

export const CharacterCard = styled.article`
    ${BoxShadowCSS}
    ${ContainerPaddingCSS}
    & > section + section {
        border-top: 1px solid lightgray;
        padding-top: 1rem;
        margin-top: 1rem;
    }
`;

export const CharacterThumbnail = styled.img`
    display: block;
    margin: 0 auto;
    max-width: 80%;
`;

export const CharacterName = styled.h2`
    font-size: 1.25rem;
`;

export const Metadata = styled.h3`
    font-size: 1rem;
    font-weight: 400;
`;

export const SectionHeader = styled.h4``;

export const DescriptionText = styled.p`
    font-style: italic;
`;
