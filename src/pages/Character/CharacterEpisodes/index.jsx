import React from 'react';
import { RickAndMortyAPI } from '../../../api/RickAndMortyAPI';
import useFetch, { STATUS } from '../../../hooks/useFetch';
import EpisodeCount from '../EpisodeCount';
import EpisodesTable from '../EpisodeTable';
import * as S from './styles';

const CharacterEpisodes = ({ characterId, episodeUrls = [] }) => {
    const { data: episodes, status } = useFetch({
        request: () => RickAndMortyAPI.getEpisodes(episodeUrls),
        lsKey: `${characterId}_episodes`,
    });

    if (status === STATUS.Error) {
        return <p>Failed to load episodes.</p>;
    }

    if (status === STATUS.Idle || status === STATUS.Fetching) {
        return <p>Loading episodes...</p>;
    }

    return (
        <S.EpisodesContainer>
            <EpisodeCount count={episodeUrls.length} />
            <EpisodesTable episodes={episodes} />
        </S.EpisodesContainer>
    );
};

export default CharacterEpisodes;
