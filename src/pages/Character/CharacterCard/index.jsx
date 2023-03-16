import React from 'react';
import LocationInformation from '../LocationInformation';
import * as S from './styles';

const CharacterCard = ({ character }) => {
    const name = character.name;
    const species = character.species;
    const gender = character.gender;
    const thumbnailSrc = character.image;

    console.log('character', character);

    return (
        <S.CharacterCard>
            <section>
                <S.CharacterThumbnail src={thumbnailSrc}></S.CharacterThumbnail>
            </section>
            <section>
                <S.CharacterName>{name}</S.CharacterName>
                <S.Metadata>
                    {species} ({gender})
                </S.Metadata>
            </section>
            <section>
                <S.SectionHeader>Origin</S.SectionHeader>
                <LocationInformation
                    locationUrl={character.origin.url}
                    locationName={character.origin.name}
                />
            </section>
            <section>
                <S.SectionHeader>Location</S.SectionHeader>
                <LocationInformation
                    locationUrl={character.location.url}
                    locationName={character.location.name}
                />
            </section>
        </S.CharacterCard>
    );
};

export default CharacterCard;
