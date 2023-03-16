import React from 'react';
import { useParams } from 'react-router-dom';
import { RickAndMortyAPI } from '../../api/RickAndMortyAPI';
import useFetch, { STATUS } from '../../hooks/useFetch';
import CharacterCard from './CharacterCard';
import CharacterEpisodes from './CharacterEpisodes';
import * as S from './styles';

const Character = () => {
    let { characterId } = useParams();
    const { data: character, status } = useFetch({
        url: RickAndMortyAPI.getCharacterByIdUrl(characterId),
        lsKey: characterId,
    });

    if (status === STATUS.Error) {
        return <p>Failed to load character.</p>;
    }

    if (status === STATUS.Idle || status === STATUS.Fetching) {
        return <p>Loading character...</p>;
    }

    return (
        <S.Container>
            <CharacterCard character={character} />
            <CharacterEpisodes
                characterId={character.id}
                episodeUrls={character.episode}
            />
        </S.Container>
    );
};

export default Character;
