import React from 'react';
import * as S from './styles';

const CharacterListitem = ({ character, characterId }) => {
    const name = character?.name;
    const species = character?.species;
    const thumbnailSrc = character?.image;

    if (!name) return null;

    return (
        <S.ListItem>
            <S.CharacterLink to={`/character/${characterId}`}>
                <S.CharacterThumbnail
                    src={thumbnailSrc}
                    alt={name}
                ></S.CharacterThumbnail>
                <S.CharacterName>{name}</S.CharacterName>
                <S.CharacterSpecies>{species}</S.CharacterSpecies>
            </S.CharacterLink>
        </S.ListItem>
    );
};

export default CharacterListitem;
